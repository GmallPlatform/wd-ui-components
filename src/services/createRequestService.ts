import { sendMessage } from "../utils/sendMessage";

interface ServiceConfig {
  lskey: string;

  refreshTokenUrl: string;
  apiUrl: string;

  tokenField?: string;
  useRefreshToken?: boolean;
  defaultHeaders?: () => { [key: string]: string };
}

interface IRequestParams {
  url: string;
  method?: string;
  body?: any;
  queryString?: any;
  multipart?: boolean;
  currentPage?: number;
  perPage?: number;
  search?: string;
  headers?: { [key: string]: string };
  limit?: number;
  skip?: number;
  params?: any;
  signal?: AbortSignal;
}
type HeadersType = Record<string, string>;
interface IRequest {
  method: string;
  body?: any;
  headers: HeadersType;
  signal?: AbortSignal;
}
function createRequestService({
  lskey,
  refreshTokenUrl,
  apiUrl,
  useRefreshToken = false,
  tokenField = "accessToken",

  defaultHeaders,
}: ServiceConfig) {
  const handleError = (err: any) => {
    if (err.name === "AbortError") {
      throw err;
    }

    if (err?.statusCode === 401) {
      sendMessage("unauthorized");
      return;
    }

    // if (err?.statusCode === 404 || err?.statusCode === 400) {
    //   sendMessage("page-not-found");
    //   return;
    // }

    throw err;
  };

  const getUser = () => {
    try {
      return JSON.parse(localStorage.getItem(lskey) ?? "null");
    } catch {
      return null;
    }
  };
  const setUser = (user: any) => {
    localStorage.setItem(lskey, JSON.stringify(user));
  };

  // to hold the failed requests.
  let accessTokenPromise: Promise<any> | null = null;
  //to ensure that only one token refresh request is made at a time.
  let isRefreshingAccessToken = false;

  // const handleSuccessfulTokenRefresh = async (user: any): Promise<any> => {
  //   if (!isRefreshingAccessToken) {
  //     isRefreshingAccessToken = true;
  //     accessTokenPromise = refreshToken(user).finally(() => {
  //       isRefreshingAccessToken = false;
  //       accessTokenPromise = null;
  //     });
  //     await accessTokenPromise;
  //   } else {

  //     return accessTokenPromise?.then();
  //   }
  // };
  const handleSuccessfulTokenRefresh = async (user: any): Promise<any> => {
    // Если токен уже обновляется, ждем завершения текущего процесса.
    if (isRefreshingAccessToken) {
      return accessTokenPromise;
    }

    // Устанавливаем состояние, что обновление началось.
    isRefreshingAccessToken = true;

    try {
      accessTokenPromise = refreshToken(user); // Запускаем процесс обновления токена.
      await accessTokenPromise; // Дожидаемся завершения обновления.
      return accessTokenPromise;
    } catch (error) {
      console.error("Failed to refresh token:", error);
      throw error; // Прокидываем ошибку для обработки на уровне вызова.
    } finally {
      // Сбрасываем состояние обновления независимо от результата.
      isRefreshingAccessToken = false;
      accessTokenPromise = null;
    }
  };

  const send = async (data: IRequestParams) => {
    if (useRefreshToken) {
      const user = getUser();
      if (user.exp && user.exp - Date.now() / 1000 < 10) {
        try {
          await handleSuccessfulTokenRefresh(user);
        } catch (error) {
          console.error("Failed to refresh token:", error);
          accessTokenPromise = null;
          setUser(null);
          window.location.href = "/";
          throw error;
          // clear the old promise so that the next request can start trying to update the token again
        }
      }
    }

    const { url, request } = getUrlAndRequest(data);

    const uri = apiUrl + url;

    try {
      const response = await fetch(uri, request);
      if (data.signal?.aborted) {
        throw new DOMException("Request aborted", "AbortError");
      }
      if (response.status < 300) {
        try {
          //console.log(response);
          const d = await response.json();
          return d;
        } catch (error) {
          console.log(error);
          throw error;
        }
      } else {
        const err = await response?.json();
        throw err;
      }
    } catch (err: any) {
      console.log(err);
      handleError(err);
      // if (err && err.statusCode && (err.statusCode === 400 || err.statusCode === 404)) {

      //   navigate("/404");
      // }
      // if (err && err.statusCode && (err.statusCode === 400 || err.statusCode === 404)) {
      //   navigate("/404");
      // }
      // if (err && err.statusCode && err.statusCode === 401) {
      //   navigate("/unauthorized");
      // }
      throw err;
    }
  };

  const refreshToken = async (user: any) => {
    const headers: HeadersType = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const request: IRequest = {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ refreshToken: user.refreshToken }),
    };
    // if (user && user.refreshToken && user.refreshToken.length > 10) {
    //   request.headers["x-refresh-token"] = `${user.refreshToken}`;

    // }
    let url = apiUrl + refreshTokenUrl;

    try {
      const response = await fetch(url, request);
      if (response.status < 300) {
        try {
          const d = await response.json();
          const u = getUser() || {};
          setUser({
            ...u,
            [tokenField]: d[tokenField],
            refreshToken: d.refreshToken,
            exp: d.exp,
            email: d.email,
          });
          //setUser(d);
          return d;
        } catch (error) {
          console.log(error);
          throw error;
        }
      } else {
        const err = await response?.json();
        throw err;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const getUrlAndRequest = (data: IRequestParams) => {
    const headers: HeadersType = {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...data.headers,
    };
    const request: IRequest = {
      method: data.method ? data.method.toUpperCase() : "GET",
      headers: headers,
      signal: data.signal,
    };

    if (data.multipart) {
      delete request.headers["Content-Type"];
    }
    const parameters = data.params || {};

    const paramsKeys = Object.keys(parameters);

    if (data.method && data.method.toUpperCase() !== "GET" && data.body) {
      request["body"] = data.multipart ? data.body : JSON.stringify(data.body);
    }
    //const user = getUser();

    // if (user && user[tokenField] && user[tokenField].length > 10 && !request.headers[authheader]) {
    //   request.headers[authheader] = bearer ? `Bearer ${user[tokenField]}` : user[tokenField];
    // }

    if (defaultHeaders) {
      const headers = defaultHeaders();
      Object.keys(headers).forEach((key) => {
        request.headers[key] = headers[key];
      });
    }
    //request.headers["projectid"] = PROJECT_ID || "";
    // console.log(tokenField, user);
    // console.log(request.headers[authheader]);
    let params = "";
    // if (data.queryString) {
    //   params = "?queryString=" + JSON.stringify(data.queryString);
    // }
    if (typeof data.currentPage !== "undefined") {
      const addChar = params ? "&" : "?";
      params += `${addChar}currentPage=${data.currentPage}`;
    }
    if (data.perPage) {
      const addChar = params ? "&" : "?";
      params += `${addChar}perPage=${data.perPage}`;
    }
    // if (data.limit) {
    //   const addChar = params ? "&" : "?";
    //   params += `${addChar}limit=${data.limit}`;
    // }
    // if (data.skip) {
    //   const addChar = params ? "&" : "?";
    //   params += `${addChar}skip=${data.skip}`;
    // }
    if (data.search) {
      const addChar = params ? "&" : "?";
      params += `${addChar}search=${data.search}`;
    }
    if (paramsKeys.length > 0) {
      paramsKeys.forEach((key) => {
        const addChar = params ? "&" : "?";
        params += `${addChar}${key}=${parameters[key]}`;
      });
    }
    let url = data.url + params;
    return { url, request };
  };

  return {
    sendRequest: send,
  };
}
export default createRequestService;

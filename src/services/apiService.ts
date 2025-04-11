import { IListResponse, IPaginate } from "../types/request";

export interface IApiService<T> {
  deleteMany: (d: any) => Promise<any>;
  deleteOne: (d: string) => Promise<any>;
  updagteOne: (d: T) => Promise<T>;
  createOne: (d: T) => Promise<T>;
  getOne: (d: string) => Promise<T>;
  getAll: () => Promise<T[]>;
}

interface RequestOptions {
  headers?: Record<string, string>;
  params?: Record<string, any>;
  signal?: AbortSignal;
  url?: string;
}

interface SendRequestFunction {
  (req: any): Promise<any>;
}

export class ApiService<T> {
  constructor(
    private endpoint: string,
    private sendRequest: SendRequestFunction,
    //private _reloadEvents?: any,
  ) {}

  getAll = (options?: RequestOptions): Promise<T[]> => {
    return new Promise((resolve, reject) => {
      const req = {
        url: `${this.endpoint}${options?.url || ""}`,
        method: "GET",
        headers: options?.headers,
        params: options?.params,
        signal: options?.signal,
      };
      this.sendRequest(req).then(resolve, reject);
    });
  };
  getMany = (
    paginate?: IPaginate,
    options?: RequestOptions,
  ): Promise<IListResponse<T>> => {
    return new Promise((resolve, reject) => {
      const req = {
        url: `${this.endpoint}`,
        method: "GET",
        queryString: paginate?.query,
        currentPage: paginate?.currentPage,
        perPage: paginate?.perPage,
        search: paginate?.search,
        signal: options?.signal,
        headers: options?.headers,
        params: options?.params,
      };

      this.sendRequest(req).then(resolve, reject);
    });
  };

  getOne = (id: string): Promise<T> => {
    return new Promise((resolve, reject) => {
      const req = {
        url: `${this.endpoint}/${id}`,
        method: "GET",
      };
      this.sendRequest(req).then(resolve, reject);
    });
  };

  createOne = (body: Omit<T, "id">, options?: RequestOptions): Promise<T> => {
    const url = this.endpoint;
    return new Promise((resolve, reject) => {
      const req = {
        url: url,
        method: "POST",
        body,
        headers: options?.headers,
        params: options?.params,
      };
      this.sendRequest(req).then(resolve, reject);
    });
  };

  updateOne = (id: string, body: T, options?: RequestOptions): Promise<T> => {
    return new Promise((resolve, reject) => {
      const req = {
        url: `${this.endpoint}/${id}`,
        method: "PATCH",
        body,
        headers: options?.headers,
        params: options?.params,
      };
      this.sendRequest(req).then(resolve, reject);
    });
  };
  updateAll = (body: T, options?: RequestOptions): Promise<T> => {
    return new Promise((resolve, reject) => {
      const req = {
        url: `${this.endpoint}`,
        method: "PATCH",
        body,
        signal: options?.signal,
        headers: options?.headers,
        params: options?.params,
      };
      this.sendRequest(req).then(resolve, reject);
    });
  };

  deleteOne = (id: string, options?: RequestOptions): Promise<void> => {
    return new Promise((resolve, reject) => {
      const req = {
        url: `${this.endpoint}/${id}`,
        method: "DELETE",
        signal: options?.signal,
        headers: options?.headers,
        params: options?.params,
      };
      this.sendRequest(req).then(resolve, reject);
    });
  };

  deleteMany = (
    body: { ids: string[] },
    options?: RequestOptions,
  ): Promise<void> => {
    return new Promise((resolve, reject) => {
      const req = {
        url: `${this.endpoint}/delete-many`,
        method: "PUT",
        body,
        signal: options?.signal,
        headers: options?.headers,
        params: options?.params,
      };
      this.sendRequest(req).then(resolve, reject);
    });
  };
  uploadImgage = (body: T, options?: any): Promise<T> => {
    return new Promise((resolve, reject) => {
      const req = {
        url: `${this.endpoint}/assets/images`,
        method: "POST",
        multipart: true,
        headers: options?.headers,
        body,
      };
      this.sendRequest(req).then(resolve, reject);
    });
  };
  deleteImage = (id: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const req = {
        url: `${this.endpoint}/assets/images/${id}`,
        method: "DELETE",
      };
      this.sendRequest(req).then(resolve, reject);
    });
  };
}

import createRequestService from "@/services/createRequestService";
import { LSPrefix, initConfig } from "../config/initConfig";
//import createRequestService from "../shared-components/services/createRequestService";
import {
  getCurrentFacilityLS,
  getCurrentProjectLS,
  getUser,
} from "./localStorage";
const refreshTokenUrl = initConfig.refreshAuthSessionUrl;
// const VITE_AUTHHEADER = process.env.VITE_AUTHHEADER;
// const VITE_API_URL = process.env.VITE_API_URL;
const { VITE_AUTHHEADER, VITE_API_URL } = import.meta.env;

const requestService = createRequestService({
  lskey: `${LSPrefix}-user`,
  refreshTokenUrl,
  useRefreshToken: true,
  apiUrl: VITE_API_URL || "http://localhost:3001",
  defaultHeaders: () => {
    const currentProject = getCurrentProjectLS();
    const currentFacility = getCurrentFacilityLS();
    const user = getUser();
    return {
      [VITE_AUTHHEADER || "Authorization"]: `Bearer ${user?.accessToken}`,
      projectId: currentProject,
      facilityId: currentFacility || "",
    };
  },
});

export const sendRequest: any = requestService.sendRequest;

import axios from "axios";
import { AuthGuardUrls } from "../../../interface";
import { getToken } from "./localStorage";
import { getSessitonToken } from "./sessionStorage";

export const Axios = axios.create();

Axios.interceptors.request.use(
  (config) => {
    const baseUrl = `${process.env.REACT_APP_BASE_URL}${config.url}`;
    const token = getSessitonToken().token;

    const updatedConfig = {
      ...config,
      url: baseUrl,
      headers: token && {
        Authorization: `Bearer ${token}`,
      },
    };

    return updatedConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.href = AuthGuardUrls.index;
    }

    return Promise.reject(error);
  }
);

import axios from "axios";
import Cookies from "js-cookie"

export const baseURL = "http://localhost:2222";

export const baseService = axios.create({
  baseURL,
});

export const logout = (): void => {
  Cookies.remove("authorization");
};

export const fillToken = (authorization: string) => {
  baseService.defaults.headers.common.Authorization = `Bearer ${authorization}`;
  Cookies.set("authorization", authorization);
};

export const attachAuthToken = (authorization: string) => {
  baseService.defaults.headers.common.Authorization = `Bearer ${authorization}`;
};
export const token = Cookies.get("authorization");

baseService.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response.status === 401) {
      logout();
    }
    return Promise.reject(error);
  }
);
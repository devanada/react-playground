import axios from "axios";

let bearerToken = "";
let baseUrl = "";
const axiosWithConfig = axios.create();

export const setAxiosConfig = (token: string, backendUrl: string) => {
  baseUrl = backendUrl;
  bearerToken = token;
};

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  axiosConfig.baseURL = baseUrl;
  axiosConfig.headers.Authorization = `Bearer ${bearerToken}`;

  return axiosConfig;
});

export default axiosWithConfig;

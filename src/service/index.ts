import Cache from "@/utils/Cache";
import axios, { AxiosInstance } from "axios";

const Myrequest: AxiosInstance = axios.create({
  baseURL: "http://watermelonhit.cn:8080",
  timeout: 5000,
});

Myrequest.interceptors.request.use((config) => {
  const token = Cache.getCache("token");
  config.headers!.Authorization = `Bearer ${token}`;
  return config;
});

Myrequest.interceptors.response.use((config: any) => {
  return config.data;
});

export default Myrequest;

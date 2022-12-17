import Cache from "@/utils/Cache";
import axios, { AxiosInstance } from "axios";

const Myrequest: AxiosInstance = axios.create({
  baseURL: "http://152.136.185.210:5000",
  timeout: 5000,
});

Myrequest.interceptors.request.use((config) => {
  const token = Cache.getCache("token");
  config.headers!.Authorization = `Bearer ${token}`;
  return config;
});

Myrequest.interceptors.response.use((config) => {
  return config.data.data;
});

export default Myrequest;

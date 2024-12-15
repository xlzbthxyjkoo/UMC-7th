import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_APP_API_KEY}`,
  },
  baseURL: import.meta.env.VITE_MOVIE_API_URL,
});

console.log("axiosInstance 설정:", axiosInstance.defaults);

export { axiosInstance };

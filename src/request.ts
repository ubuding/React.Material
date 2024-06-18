import axios from "axios";
const instance = axios.create({
  baseURL: "",
  timeout: 60000,
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    const { status, data } = response;
    if (status === 200) return data;

    return Promise.reject(new Error("请求失败!"));
  },
  function (error) {
    console.error(error.code);
    return Promise.reject(error);
  }
);

export const request = instance;

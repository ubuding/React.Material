import { request } from "request";

export const getHistory = () => {
  return request.get("/oioweb/api/common/history");
};

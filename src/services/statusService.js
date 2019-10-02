import http from "./httpService";

export function getStatuses() {
  return http.get("/statuses");
}

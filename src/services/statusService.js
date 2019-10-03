import http from "./httpService";
import { apiUrl } from "../config.json";

export function getStatuses() {
  return http.get(apiUrl + "/statuses");
}

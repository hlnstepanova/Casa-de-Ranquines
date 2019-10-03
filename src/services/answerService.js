import http from "./httpService";
import { apiUrl } from "../config.json";

export function getAnswers() {
  return http.get(apiUrl + "/answers");
}

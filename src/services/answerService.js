import http from "./httpService";

export function getAnswers() {
  return http.get("/answers");
}

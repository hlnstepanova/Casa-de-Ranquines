import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/collaborators";

function collaboratorUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getCollaborators() {
  return http.get(apiEndpoint);
}

export function getCollaborator(id) {
  return http.get(collaboratorUrl(collaboratorId));
}

export function saveCollaborator(collaborator) {
  if (collaborator._id) {
    const body = { ...collaborator };
    delete body._id;
    return http.put(collaboratorUrl(collaborator._id), body);
  }

  return http.post(apiEndpoint, collaborator);
}

export function changeCollaboratorStatus(id) {
  let collaboratorInDb = collaborators.find(c => c._id === id);
  collaboratorInDb.status =
    collaboratorInDb.status === "desativado" ? "ativado" : "desativado";
  return collaboratorInDb;
}

export function deleteMovie(collaboratorId) {
  return http.delete(collaboratorUrl(collaboratorId));
}

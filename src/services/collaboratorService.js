import http from "./httpService";

const apiEndpoint = "/collaborators";

function collaboratorUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getCollaborators() {
  return http.get(apiEndpoint);
}

export function getCollaborator(collaboratorId) {
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

export function changeCollaboratorStatus(collaborator) {
  const body = { ...collaborator };
  const statusId =
    body.status._id === "5d9622eafdd3ff26b8628179"
      ? "5d9622eafdd3ff26b8628178"
      : "5d9622eafdd3ff26b8628179";
  const childrenId = body.children._id;
  delete body._id;
  delete body.status;
  delete body.children;
  body.statusId = statusId;
  body.childrenId = childrenId;
  return http.put(collaboratorUrl(collaborator._id), body);
}

export function deleteMovie(collaboratorId) {
  return http.delete(collaboratorUrl(collaboratorId));
}

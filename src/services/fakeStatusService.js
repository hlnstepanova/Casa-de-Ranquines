export const statuses = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "ativado" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "desativado" }
];

export function getStatuses() {
  return statuses.filter(s => s);
}

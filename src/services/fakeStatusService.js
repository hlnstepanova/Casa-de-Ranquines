export const statuses = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "ativado" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "desativado" }
];

export const answers = [
  { _id: "5b21ca3eeb7f6fbccd471845", name: "sim" },
  { _id: "5b21ca3eeb7f6fbccd471878", name: "não" },
  { _id: "5b21ca3eeb7f6fbccd4718733", name: "" }
];

export function getStatuses() {
  return statuses.filter(s => s);
}

export function getAnswers() {
  return answers.filter(a => a);
}

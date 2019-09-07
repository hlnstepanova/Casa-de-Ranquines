const collaborators = [
  {
    _id: "0",
    name: "Adeilton Dos Santos Silva",
    status: { _id: "5b21ca3eeb7f6fbccd471818", name: "ativado" },
    birthday: "1971-10-05",
    address: "Rua Alfredo Pitombeira Nº 101",
    reference: "Rua Da Auto Escola.",
    neighborhood: "Santa Lúcia",
    city: "Maceió",
    state: "AL",
    phone: "",
    mobile: "8862-5092",
    workphone: "",
    email: "",
    children: { _id: "5b21ca3eeb7f6fbccd471845", name: "sim" },
    religion: "Católica",
    collaborationDay: "10",
    value: "20,00",
    purpose: ""
  },
  {
    _id: "1",
    name: "Adelane Noemia Dos Santos Oliveira (linda)",
    status: { _id: "5b21ca3eeb7f6fbccd471818", name: "ativado" },
    birthday: "1999-06-22",
    address: "Rua Luiz Clemente Vasconcelos , N°454 (casa Amarela).",
    reference: "Prox. A Casa Da Vadereis, Rua Dos Ônibus.",
    neighborhood: "Clima Bom I",
    city: "Maceió",
    state: "AL",
    phone: "",
    mobile: "9 8726- 1228",
    workphone: "",
    email: "",
    religion: "",
    collaborationDay: "15",
    value: "5,00",
    purpose: ""
  },
  {
    _id: "2",
    name: "Adelany Epifânio Da Silva",
    status: { _id: "5b21ca3eeb7f6fbccd471818", name: "ativado" },
    birthday: "1966-07-05",
    address: "Conj. Padre Cícero, N°67.",
    reference:
      "Aven. Presidente Fernando Collor, Entra Na Rua Após A Aero Pharma, Entra Na Primeira A Esquerda, Depois Primeira A Direita E Depois Primeira A Direita.",
    neighborhood: "Tabuleiro Do Pinto",
    city: "Rio Largo",
    state: "AL",
    phone: "",
    mobile: "9336-0268",
    workphone: "",
    email: "",
    religion: "",
    collaborationDay: "10",
    value: "10,00",
    purpose: ""
  },
  {
    _id: "3",
    name: "Adeilda Cordeiro Lima Da Silva",
    status: { _id: "5b21ca3eeb7f6fbccd471818", name: "ativado" },
    birthday: "1963-07-23",
    address: "R. Luiz Carlos Basto, 202.",
    reference: "Rua Do 5° Distrito.",
    neighborhood: "Cleto",
    city: "Maceió",
    state: "AL",
    phone: "3324-4281",
    mobile: "9962-9959",
    workphone: "",
    email: "",
    religion: "Católica",
    collaborationDay: "10",
    value: "20,00",
    purpose: ""
  },
  {
    _id: "4",
    name: "Adelmo Batista Farias",
    status: { _id: "5b21ca3eeb7f6fbccd471818", name: "ativado" },
    birthday: "1954-12-09",
    address: "Rua A 33, Qd. A 33, Nº 518",
    reference: "Entrega Na Igreja",
    neighborhood: "Benedito Bentes I",
    city: "Maceió",
    state: "AL",
    phone: "3344-2964",
    mobile: "9107-9031",
    workphone: "",
    email: "abf54@hotmail.com,",
    religion: "Católica",
    collaborationDay: "10",
    value: "30,00",
    purpose: ""
  },
  {
    _id: "5",
    name: "Ademilde Silva De Lima",
    status: { _id: "5b21ca3eeb7f6fbccd471818", name: "ativado" },
    birthday: "1951-10-18",
    address: "Rua B-49, Qd B-50, Nº",
    reference: "Rua Da Loteria",
    neighborhood: "Benedito Bentes I",
    city: "Maceió",
    state: "AL",
    phone: "3344-2087",
    mobile: "-",
    workphone: "-",
    email: "-",
    religion: "",
    collaborationDay: "15",
    value: "5,00",
    purpose: "Cozinha."
  },
  {
    _id: "6",
    name: "Aderval De Araujo Lima",
    status: { _id: "5b21ca3eeb7f6fbccd471818", name: "ativado" },
    birthday: "1972-07-01",
    address: "R. Santa Rita N° 2000",
    reference:
      "Na Rua Do Luciano Construções Segue Para O Final Da Rua, Pega A Esquerda E Depois A Primeira Rua A Direita. Ao Chegar Na Adega E Merc. Dois Irmãos, É A Casa De Frente.",
    neighborhood: "Benedito Bentes I",
    city: "Maceió",
    state: "AL",
    phone: "",
    mobile: "8831-8229/9965-6172",
    workphone: "",
    email: "",
    religion: "Católica",
    collaborationDay: "Entre o dia 05 e 10.",
    value: "10,00",
    purpose: ""
  },

  {
    _id: "316",
    name: "Lituane Pinheiro Da Silva",
    status: { _id: "5b21ca3eeb7f6fbccd471818", name: "ativado" },
    birthday: "1992-10-14",
    address: "Rua B 51, Quadra B 50, Nº 389.",
    reference: "Rua Do Antigo Mercadinho Pena Branca.",
    neighborhood: "Benedito Bentes 1",
    city: "Maceió",
    state: "AL",
    phone: "9.9939-5882",
    mobile: "98865-4166",
    workphone: "",
    email: "",
    religion: "Católica",
    collaborationDay: "05",
    value: "10,00",
    purpose: ""
  },
  {
    _id: "317",
    name: "Lucas Ferreira De Melo",
    status: { _id: "5b21ca3eeb7f6fbccd471818", name: "ativado" },
    birthday: "1993-10-20",
    address: "Avenida Domingos Leite",
    reference: "Na Rua Do Hospital",
    neighborhood: "Centro",
    city: "Cacimbinhas",
    state: "AL",
    phone: "99184-9807",
    mobile: "",
    workphone: "",
    email: "",
    religion: "Católica",
    collaborationDay: "15",
    value: "5,00",
    purpose: ""
  },
  {
    _id: "318",
    name: "Lúcia Batista",
    status: { _id: "5b21ca3eeb7f6fbccd471818", name: "ativado" },
    birthday: "1948-09-22",
    address: "Conj. Rua Palmeira, Bl. 3ª, Apto. 303.",
    reference: "Rua Do Bombeiro Resgate",
    neighborhood: "Serraria",
    city: "Maceió",
    state: "AL",
    phone: "3241-9438",
    mobile: "",
    email: "lgomeslins@uol.com.br",
    children: { _id: "5b21ca3eeb7f6fbccd471878", name: "não" },
    religion: "",
    collaborationDay: "15",
    value: "20,00",
    purpose: "Cozinha"
  },
  {
    _id: "319",
    name: "Lúcia Maria Gomes De Lima",
    status: { _id: "5b21ca3eeb7f6fbccd471818", name: "ativado" },
    birthday: "1965-03-07",
    address: "Conj. Osman Loureiro, Qd. D 7, N° 69.",
    reference:
      "Trabalha No Tirbunal/ Lanche Das Crianças/defafom (4°andar) - Anexo Do Cícero Amélio.",
    neighborhood: "Clima Bom",
    city: "Maceió",
    state: "AL",
    phone: "3324-5288",
    mobile: "8891-8312",
    workphone: "3315-5592 (Tribunal)",
    email: "lgomeslins@uol.com.br",
    religion: "",
    collaborationDay: "25",
    value: "10,00",
    purpose: "Lanche Das Crianças"
  },
  {
    _id: "320",
    name: "Lucia Vilela Santos Texeira",
    status: { _id: "5b21ca3eeb7f6fbccd471818", name: "ativado" },
    birthday: "1967-02-10",
    address: "Cond. Central Parque, Bl.12, Apt. 02.",
    reference:
      "Perto Do Shopping Pátio, Tem Uma Academia De Frete Duplo Impacto.",
    neighborhood: "B. Benedito Bentes I",
    city: "Maceió",
    state: "AL",
    phone: "",
    mobile: "8862-7960",
    workphone: "",
    email: "",
    children: { _id: "5b21ca3eeb7f6fbccd471845", name: "sim" },
    religion: "Católico",
    collaborationDay: "10",
    value: "5,00",
    purpose: ""
  },
  {
    _id: "321",
    name: "Luciana Santos Rodrigues",
    status: { _id: "5b21ca3eeb7f6fbccd471818", name: "ativado" },
    birthday: "1966-04-18",
    address: "Conjunto Vale Verde 1, Bloco 5, Apto. 104.",
    reference: "Mora Proximo Ao Espetinho Da Maria, Na Serraria",
    neighborhood: "Serraria",
    city: "Maceió",
    state: "AL",
    phone: "",
    mobile: "9.8829-4020",
    workphone: "",
    email: "",
    religion: "Católica",
    collaborationDay: "25",
    value: "20,00",
    purpose: ""
  },
  {
    _id: "322",
    name: "Luciano Leite Espindola",
    status: { _id: "5b21ca3eeb7f6fbccd471818", name: "ativado" },
    birthday: "1975-03-05",
    address: "Rua B 49, Quadra B 48, Nº 329.",
    reference: "Rua Da Padaria São Jorge",
    neighborhood: "B. Bentes 1",
    city: "Maceió",
    state: "AL",
    phone: "9.8856-9001",
    mobile: "",
    workphone: "",
    email: "",
    religion: "Católico",
    collaborationDay: "25",
    value: "20,00",
    purpose: ""
  },
  {
    _id: "323",
    name: "Luciano Lourenço De Amorim",
    status: { _id: "5b21ca3eeb7f6fbccd471818", name: "ativado" },
    birthday: "1961-05-26",
    address: "Rua A 48, Quadra A 49, Nº 328",
    reference: "Rua Antes Da Rua Que A Nadja Mora",
    neighborhood: "Benedito Bentes 1",
    city: "Maceió",
    state: "AL",
    phone: "",
    mobile: "9981-3537",
    workphone: "",
    email: "",
    religion: "Evangelico",
    collaborationDay: "A PARTIR DO DIA 10",
    value: "",
    purpose: ""
  },
  {
    _id: "324",
    name: "Luciene Guedes Soares",
    status: { _id: "5b21ca3eeb7f6fbccd471818", name: "ativado" },
    birthday: "1970-12-19",
    address: "Av. Benedito Bentes, 367.",
    reference:
      "Av. Principal Do Benedito Bentes Ii, Em Frente A Farmácia Do Trabalhador.",
    neighborhood: "Benedito Bentes Ii",
    city: "Maceió",
    state: "AL",
    phone: "",
    mobile: "8893-7690",
    workphone: "",
    email: "",
    children: { _id: "5b21ca3eeb7f6fbccd471845", name: "sim" },
    religion: "Católica",
    collaborationDay: "10",
    value: "5,00",
    purpose: ""
  },

  {
    _id: "693",
    name: "Paulo Ricardo De Andrade Lopes",
    status: { _id: "5b21ca3eeb7f6fbccd471814", name: "desativado" },
    birthday: "1987-07-24",
    address: "Rua A-41, Qd A-41, Nº 134",
    reference: "Av Pratagy. Rua Do Ponto Da Fruta.",
    neighborhood: "Benedito Bentes I",
    city: "Maceió",
    state: "AL",
    phone: "-",
    mobile: "8874-0070",
    workphone: "-",
    email: "-",
    children: { _id: "5b21ca3eeb7f6fbccd471878", name: "não" },
    religion: "Católica",
    collaborationDay: "10",
    value: "40,00",
    purpose: "Imagem De Santa Luiza"
  },
  {
    _id: "694",
    name: "Ramone Caroline Amorim Paranhos",
    status: { _id: "5b21ca3eeb7f6fbccd471814", name: "desativado" },
    birthday: "1994-11-12",
    address: "Minador Do Lúcio",
    reference: "Posto Petrobrás",
    neighborhood: "",
    city: "Cacimbinhas",
    state: "AL",
    phone: "3422-1614",
    mobile: "",
    workphone: "",
    email: "",
    religion: "Católica",
    collaborationDay: "15",
    value: "15,00",
    purpose: ""
  },
  {
    _id: "695",
    name: "Selma Cesária De Freitas Almeida",
    status: { _id: "5b21ca3eeb7f6fbccd471814", name: "desativado" },
    birthday: "1967-06-29",
    address: "Av. Bela Vista, Qd. 34, N°22.",
    reference: "",
    neighborhood: "Benedito Bentes Ii",
    city: "Maceió",
    state: "AL",
    phone: "",
    mobile: "8853-6123",
    workphone: "",
    email: "",
    religion: "Protestante",
    collaborationDay: "10",
    value: "10,00",
    purpose: ""
  },
  {
    _id: "696",
    name: "Selma Lopes",
    status: { _id: "5b21ca3eeb7f6fbccd471814", name: "desativado" },
    birthday: "1962-12-04",
    address: "Minador Do Lúcio",
    reference: "Escola José Calado Cavalcante",
    neighborhood: "",
    city: "Cacimbinhas",
    state: "AL",
    phone: "3422-1614",
    mobile: "",
    workphone: "",
    email: "",
    religion: "Católica",
    collaborationDay: "15",
    value: "15,00",
    purpose: ""
  }
];

export function getCollaborators() {
  return collaborators;
}

export function getCollaborator(id) {
  return collaborators.find(c => c._id === id);
}

export function saveCollaborator(collaborator) {
  let collaboratorInDb =
    collaborators.find(c => c._id === collaborator._id) || {};
  collaboratorInDb.name = collaborator.name;
  collaboratorInDb.status = collaborator.status;
  collaboratorInDb.birthday = collaborator.birthday;
  collaboratorInDb.address = collaborator.address;
  collaboratorInDb.reference = collaborator.reference;
  collaboratorInDb.neighborhood = collaborator.neighborhood;
  collaboratorInDb.city = collaborator.city;
  collaboratorInDb.state = collaborator.state;
  collaboratorInDb.phone = collaborator.phone;
  collaboratorInDb.mobile = collaborator.mobile;
  collaboratorInDb.workPhone = collaborator.workPhone;
  collaboratorInDb.email = collaborator.email;
  collaboratorInDb.children = collaborator.children;
  collaboratorInDb.religion = collaborator.religion;
  collaboratorInDb.collaborationDay = collaborator.collaborationDay;
  collaboratorInDb.value = collaborator.value;
  collaboratorInDb.purpose = collaborator.purpose;

  if (!collaboratorInDb._id) {
    collaboratorInDb._id = Date.now().toString();
    collaborators.push(collaboratorInDb);
  }

  return collaboratorInDb;
}

export function changeCollaboratorStatus(id) {
  let collaboratorInDb = collaborators.find(c => c._id === id);
  collaboratorInDb.status =
    collaboratorInDb.status === "desativado" ? "ativado" : "desativado";
  return collaboratorInDb;
}

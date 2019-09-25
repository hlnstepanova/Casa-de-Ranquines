import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import MapContainer from "./common/mapContainer";
import {
  getCollaborator,
  saveCollaborator
} from "../services/collaboratorService";
import { getStatuses } from "../services/statusService";
import { getAnswers } from "../services/answerService";
import { getCollaborators } from "./../services/collaboratorService";

class CollaboratorForm extends Form {
  state = {
    data: {
      name: "",
      statusId: "",
      birthday: new Date(),
      address: "",
      reference: "",
      neighborhood: "",
      city: "",
      state: "",
      phone: "",
      mobile: "",
      workphone: "",
      email: "",
      childrenId: "5d8bbcd8694a2d001610480d",
      religion: "",
      collaborationDay: "",
      value: "",
      purpose: ""
    },
    statuses: [],
    answers: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    name: Joi.string()
      .required()
      .label("Nome"),
    statusId: Joi.string()
      .required()
      .label("Estado"),
    birthday: Joi.date()
      .required()
      .label("Anniversário"),
    address: Joi.string()
      .required()
      .label("Endereço"),
    reference: Joi.string()
      .allow("")
      .label("Referência"),
    neighborhood: Joi.string()
      .required()
      .label("Bairro"),
    city: Joi.string()
      .required()
      .label("Cidade"),
    state: Joi.string()
      .required()
      .label("UF"),
    phone: Joi.string()
      .allow("")
      .label("Telefone"),
    mobile: Joi.string()
      .allow("")
      .label("Celular"),
    workphone: Joi.string()
      .allow("")
      .label("Telefone do trabalho"),
    email: Joi.string()
      .email()
      .allow("")
      .label("E-mail"),
    childrenId: Joi.string()
      .allow("")
      .label("Tem filhos?"),
    religion: Joi.string()
      .allow("")
      .label("Religião"),
    collaborationDay: Joi.string()
      .required()
      .label("Dia de colaboração"),
    value: Joi.string()
      .required()
      .label("Valor"),
    purpose: Joi.string()
      .allow("")
      .label("Destino de colaboração")
  };

  async populateStatuses() {
    const { data: statuses } = await getStatuses();
    this.setState({ statuses });
  }

  async populateCollaborators() {
    const { data: collaborators } = await getCollaborators();
    this.setState({ collaborators });
  }

  async populateAnswers() {
    const { data: answers } = await getAnswers();
    this.setState({ answers });
  }

  async populateCollaborator() {
    try {
      const collaboratorId = this.props.match.params.id;
      if (collaboratorId === "new") return;

      const { data: collaborator } = await getCollaborator(collaboratorId);
      this.setState({ data: this.mapToViewModel(collaborator) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateStatuses();
    await this.populateAnswers();
    await this.populateCollaborator();
  }

  //get only necessary parts of the movie object
  mapToViewModel(collaborator) {
    return {
      _id: collaborator._id,
      name: collaborator.name,
      statusId: collaborator.status._id,
      birthday: collaborator.birthday ? collaborator.birthday : "",
      address: collaborator.address ? collaborator.address : "",
      reference: collaborator.reference ? collaborator.reference : "",
      neighborhood: collaborator.neighborhood ? collaborator.neighborhood : "",
      city: collaborator.city ? collaborator.city : "",
      state: collaborator.state ? collaborator.state : "",
      phone: collaborator.phone ? collaborator.phone : "",
      mobile: collaborator.mobile ? collaborator.mobile : "",
      workphone: collaborator.workphone ? collaborator.workphone : "",
      email: collaborator.email ? collaborator.email : "",
      childrenId: collaborator.children ? collaborator.children._id : "",
      religion: collaborator.religion ? collaborator.religion : "",
      collaborationDay: collaborator.collaborationDay
        ? collaborator.collaborationDay
        : "",
      value: collaborator.value ? collaborator.value : "",
      purpose: collaborator.purpose ? collaborator.purpose : ""
    };
  }

  doSubmit = async () => {
    await saveCollaborator(this.state.data);
    this.props.history.push("/collaborators");
  };

  render() {
    const selectedPlace = {
      name: this.state.data.name,
      address: this.state.data.address
    };

    return (
      <React.Fragment>
        <h1>Cartão do Amigo Evangelizador</h1>
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("name", "Nome")}
              {this.renderSelect("statusId", "Estado", this.state.statuses)}
              {this.renderInput("birthday", "Anniversário", "date")}
              {this.renderInput("address", "Endereço")}
              {this.renderInput("reference", "Referência")}
              {this.renderInput("neighborhood", "Bairro")}
              {this.renderInput("city", "Cidade")}
              {this.renderInput("state", "Estado")}
              {this.renderInput("phone", "Telefone")}
              {this.renderInput("mobile", "Celular")}
              {this.renderInput("workPhone", "Telefone do trabalho")}
              {this.renderInput("email", "E-mail", "email")}
              {this.renderSelect("childrenId", "Filhos", this.state.answers)}
              {this.renderInput("religion", "Religião")}
              {this.renderInput("collaborationDay", "Dia de colaboração")}
              {this.renderInput("value", "Valor")}
              {this.renderInput("purpose", "Destino de colaboração")}
              {this.renderButton("Salvar")}
            </form>
          </div>
          <div className="col">
            <MapContainer selectedPlace={selectedPlace}></MapContainer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CollaboratorForm;

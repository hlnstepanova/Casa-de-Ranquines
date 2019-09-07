import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import {
  getCollaborator,
  saveCollaborator
} from "../services/fakeCollaboratorService";
import { getStatuses } from "../services/fakeStatusService";

class CollaboratorForm extends Form {
  state = {
    data: {
      name: "",
      statusId: "",
      birthday: "",
      address: "",
      reference: "",
      neighborhood: "",
      city: "",
      state: "",
      phone: "",
      mobile: "",
      workPhone: "",
      email: "",
      children: false,
      religion: "",
      collaborationDay: "",
      value: "",
      purpose: ""
    },
    statuses: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    name: Joi.date()
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
    reference: Joi.string().label("Referência"),
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
      .required()
      .label("Telefone"),
    mobile: Joi.string().label("Celular"),
    workPhone: Joi.string().label("Telefone do trabalho"),
    email: Joi.string()
      .email()
      .label("E-mail"),
    children: Joi.boolean().label("Tem filhos?"),
    religion: Joi.string().label("Religião"),
    collaborationDay: Joi.string()
      .required()
      .label("Dia de colaboração"),
    value: Joi.string()
      .required()
      .label("Valor"),
    purpose: Joi.string().label("Destino de colaboração")
  };

  componentDidMount() {
    const statuses = getStatuses();
    this.setState({ statuses });

    //get the movieId from router and check if it's new, otherwise populate the form
    const collaboratorId = this.props.match.params.id;
    if (collaboratorId === "new") return;

    //check if such id exists and if does, populate the form
    //return - because replace doesn't guarantee the rest of the code is stopped
    const collaborator = getCollaborator(collaboratorId);
    if (!collaborator) return this.props.history.replace("/not-found");
    this.setState({ data: this.mapToViewModel(collaborator) });
  }

  //get only necessary parts of the movie object
  mapToViewModel(collaborator) {
    return {
      _id: collaborator._id,
      name: collaborator.name,
      statusId: collaborator.status,
      birthday: collaborator.birthday,
      address: collaborator.address,
      reference: collaborator.reference,
      neighborhood: collaborator.neighborhood,
      city: collaborator.city,
      state: collaborator.state,
      phone: collaborator.phone,
      mobile: collaborator.mobile,
      workPhone: collaborator.workPhone,
      email: collaborator.email,
      children: collaborator.children,
      religion: collaborator.religion,
      collaborationDay: collaborator.collaborationDay,
      value: collaborator.value,
      purpose: collaborator.purpose
    };
  }

  doSubmit = () => {
    saveCollaborator(this.state.data);
    this.props.history.push("/collaborators");
  };

  render() {
    return (
      <div>
        <h1>Cartão do Amigo Evangelizador</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Nome")}
          {this.renderSelect("status", "Estado", this.state.statuses)}
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
          {this.renderInput("children", "Filhos")}
          {this.renderInput("religion", "Religião")}
          {this.renderInput("collaborationDay", "Dia de colaboração")}
          {this.renderInput("value", "Valor")}
          {this.renderInput("purpose", "Destino de colaboração")}
          {this.renderButton("Salvar")}
        </form>
      </div>
    );
  }
}

export default CollaboratorForm;

import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import MapContainer from "./common/mapContainer";
import {
  getCollaborator,
  saveCollaborator
} from "../services/fakeCollaboratorService";
import { getStatuses, getAnswers } from "../services/fakeStatusService";

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
      workPhone: "",
      email: "",
      childrenId: "5b21ca3eeb7f6fbccd4718733",
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
    workPhone: Joi.string()
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

  componentDidMount() {
    const statuses = getStatuses();
    this.setState({ statuses });

    const answers = getAnswers();
    this.setState({ answers });

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
      statusId: collaborator.status._id,
      birthday: collaborator.birthday ? collaborator.birthday : "",
      address: collaborator.address ? collaborator.address : "",
      reference: collaborator.reference ? collaborator.reference : "",
      neighborhood: collaborator.neighborhood ? collaborator.neighborhood : "",
      city: collaborator.city ? collaborator.city : "",
      state: collaborator.state ? collaborator.state : "",
      phone: collaborator.phone ? collaborator.phone : "",
      mobile: collaborator.mobile ? collaborator.mobile : "",
      workPhone: collaborator.workPhone ? collaborator.workPhone : "",
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

  doSubmit = () => {
    saveCollaborator(this.state.data);
    this.props.history.push("/collaborators");
  };

  render() {
    const selectedPlace = {
      name: this.state.data.name,
      address: this.state.data.address
    };

    console.log(selectedPlace);

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

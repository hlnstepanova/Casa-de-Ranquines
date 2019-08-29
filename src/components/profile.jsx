import React, { Component } from "react";
import {
  getCollaborators,
  getCollaborator
} from "../services/fakeCollaboratorsService";

class Profile extends Component {
  state = {
    items: getCollaborators(),
    selectedItemId: 4,
    headings: {
      _id: "id",
      name: "Nome",
      status: "Estado",
      birthday: "Data de Nascimento",
      address: "Endereço",
      reference: "Referência",
      neighborhood: "Bairro",
      city: "Cidade",
      state: "UF",
      phone: "Telefone",
      mobile: "Celular",
      workPhone: "Telefone do Trabalho",
      email: "E-mail",
      children: "Tem Filhos",
      religion: "Religião",
      collaborationDay: "Dia da Colaboração",
      value: "Valor",
      purpose: "Destino da Colaboração"
    }
  };

  componentDidMount() {
    this.setState({ items: getCollaborators() });
  }

  render() {
    const currentItem = getCollaborator(this.state.selectedItemId);
    return (
      <React.Fragment>
        <table>
          <tbody>
            {Object.keys(this.state.headings).map(key => (
              <tr key={key}>
                <td>{this.state.headings[key]}</td>
                <td>{currentItem[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Profile;

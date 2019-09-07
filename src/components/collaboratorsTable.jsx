import React, { Component } from "react";
import Table from "./common/table";
import { Link } from "react-router-dom";

class CollaboratorsTable extends Component {
  columns = [
    {
      path: "name",
      label: "Nome",
      content: collaborator => (
        <Link to={`/collaborators/${collaborator._id}`}>
          {collaborator.name}
        </Link>
      )
    },
    { path: "status.name", label: "Estado" },
    { path: "birthday", label: "Anniversário" },
    { path: "city", label: "Cidade" },
    { path: "collaborationDay", label: "Dia de colabaração" },
    { path: "value", label: "Valor" },

    // TODO: add a desactivate button
    {
      key: "changeStatus",
      content: collaborator => (
        <button
          onClick={() => this.props.onChangeStatus(collaborator)}
          className={
            collaborator.status.name === "desativado"
              ? "btn btn-success btn-sm"
              : "btn btn-danger btn-sm"
          }
        >
          {collaborator.status.name === "desativado" ? "Ativar" : "Desativar"}
        </button>
      )
    }
  ];
  render() {
    const { collaborators, sortColumn, onSort } = this.props;

    console.log(collaborators);
    return (
      <Table
        columns={this.columns}
        data={collaborators}
        sortColumn={sortColumn}
        onSort={onSort}
      ></Table>
    );
  }
}

export default CollaboratorsTable;

import React, { Component } from "react";
import Table from "./common/table";
import { Link } from "react-router-dom";

class AnniversariesTable extends Component {
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
    { path: "value", label: "Valor" }
  ];
  render() {
    const { anniversaries, sortColumn, onSort } = this.props;

    if (anniversaries.length === 0)
      return <p>Não há anniversariantes neste mês.</p>;

    console.log(anniversaries);
    return (
      <Table
        columns={this.columns}
        data={anniversaries}
        sortColumn={sortColumn}
        onSort={onSort}
      ></Table>
    );
  }
}

export default AnniversariesTable;

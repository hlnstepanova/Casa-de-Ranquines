import React, { Component } from "react";
import { Link } from "react-router-dom";
import CollaboratorsTable from "./collaboratorsTable.jsx";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import {
  getCollaborators,
  changeCollaboratorStatus
} from "../services/fakeCollaboratorService";
import { getStatuses } from "../services/fakeStatusService";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import SearchBox from "./common/searchBox";

class Collaborators extends Component {
  state = {
    collaborators: [],
    statuses: [],
    currentPage: 1,
    pageSize: 5,
    searchQuery: "",
    selectedStatus: null,
    sortColumn: { path: "name", order: "asc" }
  };

  componentDidMount() {
    const statuses = [{ _id: "", name: "todo" }, ...getStatuses()];

    this.setState({ collaborators: getCollaborators(), statuses });
  }

  handleStatusChange = collaborator => {
    //desactivate
    const collaborators = [...this.state.collaborators];
    const id = collaborators.indexOf(collaborator);
    collaborators[id] = { ...collaborators[id] };
    collaborators[id].status =
      collaborators[id].status === "ativado" ? "desativado" : "ativado";
    this.setState({ collaborators });

    changeCollaboratorStatus(collaborator._id);
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleStatusSelect = status => {
    this.setState({ selectedStatus: status, searchQuery: "", currentPage: 1 });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedStatus: null, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedStatus,
      searchQuery,
      collaborators: allCollaborators
    } = this.state;

    let filtered = allCollaborators;
    if (searchQuery)
      filtered = allCollaborators.filter(m =>
        m.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedStatus && selectedStatus._id)
      filtered = allCollaborators.filter(
        m => m.status._id === selectedStatus._id
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const collaborators = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: collaborators };
  };

  render() {
    const { length: count } = this.state.collaborators;
    const {
      pageSize,
      currentPage,
      sortColumn,
      searchQuery,
      selectedStatus
    } = this.state;

    if (count === 0)
      return <p>Não há Amigos Evangelizadores no banco de dados.</p>;

    const { totalCount, data: collaborators } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.statuses.map(function(a) {
              const { _id, name } = a;
              return { _id, name: name + "s" };
            })}
            selectedItem={this.state.selectedStatus}
            onItemSelect={this.handleStatusSelect}
          />
          <Link
            to="/collaborators/new"
            className="btn btn-primary mt-3"
            style={{ marginBottom: 20 }}
          >
            + Novo amigo
          </Link>
        </div>
        <div className="col">
          <p>
            No total {totalCount} Amigos Evangelizadores{" "}
            {selectedStatus && selectedStatus.name !== "todo"
              ? selectedStatus.name + "s"
              : ""}{" "}
            no banco de dados.
          </p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <CollaboratorsTable
            collaborators={collaborators}
            sortColumn={sortColumn}
            // onLike={this.handleLike}
            onChangeStatus={this.handleStatusChange}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Collaborators;

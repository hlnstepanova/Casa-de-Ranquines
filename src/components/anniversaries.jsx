import React, { Component } from "react";
import AnniversariesTable from "./anniversariesTable.jsx";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { getCollaborators } from "../services/collaboratorService";
import { paginate } from "../utils/paginate";
import _ from "lodash";

class Anniversaries extends Component {
  state = {
    collaborators: [],
    months: [],
    currentPage: 1,
    pageSize: 5,
    selectedMonth: new Date().getMonth(),
    sortColumn: { path: "birthday", order: "asc" }
  };

  async componentDidMount() {
    const months = [
      { name: "janeiro", number: 0 },
      { name: "fevereiro", number: 1 },
      { name: "março", number: 2 },
      { name: "abril", number: 3 },
      { name: "maio", number: 4 },
      { name: "junho", number: 5 },
      { name: "julho", number: 6 },
      { name: "agosto", number: 7 },
      { name: "setembro", number: 8 },
      { name: "outobro", number: 9 },
      { name: "novembro", number: 10 },
      { name: "dezembro", number: 11 }
    ];

    const { data: collaborators } = await getCollaborators();

    this.setState({ collaborators, months });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleMonthSelect = month => {
    this.setState({ selectedMonth: month.number, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedMonth,
      collaborators: allCollaborators
    } = this.state;

    let filtered = allCollaborators.filter(
      c =>
        c.status.name === "ativado" &&
        new Date(c.birthday).getMonth() === selectedMonth
    );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const anniversaries = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: anniversaries };
  };

  render() {
    const { pageSize, currentPage, sortColumn } = this.state;
    const { totalCount, data: anniversaries } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.months}
            selectedItem={this.state.selectedMonth}
            onItemSelect={this.handleMonthSelect}
            textProperty="name"
            valueProperty="number"
          />
        </div>
        <div className="col">
          <AnniversariesTable
            anniversaries={anniversaries}
            sortColumn={sortColumn}
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

export default Anniversaries;

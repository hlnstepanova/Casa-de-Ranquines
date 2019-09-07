import React, { Component } from "react";
import Input from "./input";

const SearchBox = ({ value, onChange }) => {
  return (
    <Input
      type="text"
      name="query"
      className="form-control my-3"
      placeholder="Buscar..."
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
    ></Input>
  );
};

export default SearchBox;

import React from "react";
const ListGroup = ({
  textProperty,
  valueProperty,
  items,
  onItemSelect,
  selectedItem,
  path
}) => {
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedItem || item[valueProperty] === selectedItem
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {path === "/collaborators"
            ? item[textProperty] + "s"
            : item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;

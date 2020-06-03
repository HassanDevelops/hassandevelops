import React from "react";
import PropTypes from "prop-types";

const ListItems = ({ listItemsArray }) => {
  return (
    <ul>
      {listItemsArray.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </ul>
  );
};

ListItems.propTypes = {};

export default ListItems;

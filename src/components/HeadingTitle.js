import React from "react";
import PropTypes from "prop-types";

const HeadingTitle = ({ titleText }) => {
  return <div>{titleText}</div>;
};

HeadingTitle.propTypes = {
  titleText: PropTypes.string,
};

export default HeadingTitle;

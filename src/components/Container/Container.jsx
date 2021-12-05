import React from "react";
import PropTypes from "prop-types";
import cs from "./Container.module.css";

const Container = ({ children }) => (
  <div className={cs.Container}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;

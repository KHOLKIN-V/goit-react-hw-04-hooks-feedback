import React from "react";
import PropTypes from "prop-types";
import cs from "./Notification.module.css";

const Notification = ({ message }) => <h2 className={cs.title}>{message}</h2>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;

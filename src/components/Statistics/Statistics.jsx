import PropTypes from "prop-types";
import React from "react";
import cs from "./Statistics.module.css";

const Statistics = ({
  onGood,
  onNeutral,
  onBad,
  onTotal,
  onPositivePercentage = "0",
}) => (
  <>
    <h2 className={cs.title}>Statistics</h2>
    <ul className={cs.list}>
      <li className={cs.item}>Good: {onGood}</li>
      <li className={cs.item}>Neutral: {onNeutral}</li>
      <li className={cs.item}>Bad: {onBad}</li>
    </ul>
    <ul className={cs.listTotal}>
      <li className={cs.item}>Total: {onTotal}</li>
      <li className={cs.item}>Positive feedback: {onPositivePercentage}%</li>
    </ul>
  </>
);

Statistics.propTypes = {
  onGood: PropTypes.number.isRequired,
  onNeutral: PropTypes.number.isRequired,
  onBad: PropTypes.number.isRequired,
  onTotal: PropTypes.number.isRequired,
  onPositivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

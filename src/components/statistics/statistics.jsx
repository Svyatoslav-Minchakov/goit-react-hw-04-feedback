// import React from 'react';

export const Statistics = props => {
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <li>
          <span>Good:</span>
          <span>{props.good}</span>
        </li>
        <li>
          <span>Neutral:</span>
          <span>{props.neutral}</span>
        </li>
        <li>
          <span>Bad:</span>
          <span>{props.bad}</span>
        </li>
        <li>
          <span>Total:</span>
          <span>{props.total}</span>
        </li>
        <li>
          <span>Positive feedback:</span>
          <span>{props.positivePercentage}%</span>
        </li>
      </ul>
    </div>
  );
};

// export default Statistics;

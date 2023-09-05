// import React from 'react';

import {
  StatisticsBox,
  StatisticsTitle,
  StatisticsList,
  FeedbackSign,
  FeedbackQuantity,
  StatisticsListItem,
} from './statistics.styled';

export const Statistics = props => {
  return (
    <StatisticsBox>
      <StatisticsTitle>Statistics:</StatisticsTitle>
      <StatisticsList>
        <StatisticsListItem>
          <FeedbackSign>Good:</FeedbackSign>
          <FeedbackQuantity>{props.good}</FeedbackQuantity>
        </StatisticsListItem>
        <StatisticsListItem>
          <FeedbackSign>Neutral:</FeedbackSign>
          <FeedbackQuantity>{props.neutral}</FeedbackQuantity>
        </StatisticsListItem>
        <StatisticsListItem>
          <FeedbackSign>Bad:</FeedbackSign>
          <FeedbackQuantity>{props.bad}</FeedbackQuantity>
        </StatisticsListItem>
        <StatisticsListItem>
          <FeedbackSign>Total:</FeedbackSign>
          <FeedbackQuantity>{props.total}</FeedbackQuantity>
        </StatisticsListItem>
        <StatisticsListItem>
          <FeedbackSign>Positive feedback:</FeedbackSign>
          <FeedbackQuantity>{props.positivePercentage}%</FeedbackQuantity>
        </StatisticsListItem>
      </StatisticsList>
    </StatisticsBox>
  );
};

// export default Statistics;

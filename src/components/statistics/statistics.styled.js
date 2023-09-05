import styled from 'styled-components';

export const StatisticsBox = styled('div')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid gray',
    marginTop: 30,
    paddingBottom: 20,
    borderRadius: 10,
  };
});

export const StatisticsTitle = styled('h2')(() => {
  return {
    marginLeft: 30,
    color: 'rgba(66, 131, 109, 0.911)',
  };
});

export const StatisticsList = styled('ul')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  };
});

export const StatisticsListItem = styled('ul')(() => {
  return {
    display: 'flex',
    gap: 20,
  };
});

export const FeedbackSign = styled('span')(() => {
  return {
    fontSize: 24,
    color: 'grey',
  };
});

export const FeedbackQuantity = styled('div')(() => {
  return {
    fontSize: 24,
    color: 'brown',
  };
});

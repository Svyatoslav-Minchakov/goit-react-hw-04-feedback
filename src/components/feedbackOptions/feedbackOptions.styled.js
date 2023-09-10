import styled from 'styled-components';

export const ButtonsBox = styled('div')(() => {
  return {
    display: 'flex',
    justifyContent: 'center',
    gap: 30,
  };
});

export const Buttons = styled('button')(() => {
  return {
    fontSize: 24,
    padding: 10,
    borderRadius: 4,
    cursor: 'pointer',
    transition: 'background-color 200ms linear',
    textTransform: 'capitalize',

    '&:hover': {
      backgroundColor: 'rgba(66, 131, 109, 0.911)',
      color: 'white',
    },
  };
});

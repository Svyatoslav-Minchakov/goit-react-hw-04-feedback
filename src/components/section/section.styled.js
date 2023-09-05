import styled from 'styled-components';

export const StyledSection = styled('ul')(() => {
  return {
    // margin: '400px auto 0px auto',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    padding: 50,
    backgroundColor: 'rgba(133, 228, 196, 0.247)',
    width: 500,
    borderRadius: 10,
    border: '1px solid teal',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2), 0 16px 20px rgba(0,0,0,0.2)',

    '&>h2': {
      fontSize: 32,
      textAlign: 'center',
      color: 'rgba(66, 131, 109, 0.911)',
      textTransform: 'uppercase',
    },
  };
});

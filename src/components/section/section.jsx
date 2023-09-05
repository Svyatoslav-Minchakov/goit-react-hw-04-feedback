import { StyledSection } from './section.styled';

export const Section = ({ children }) => {
  return (
    <StyledSection title="Please leave feedback">
      <h2>Please leave feedback</h2>
      {children}
    </StyledSection>
  );
};

import { ButtonsBox, Buttons } from './feedbackOptions.styled';

export const FeedbackOptions = ({ options, feedbackClick }) => {
  return (
    <ButtonsBox>
      {options.map(option => (
        <Buttons
          key={option}
          onClick={() => feedbackClick(option)}
          type="button"
        >
          {option}
        </Buttons>
      ))}
    </ButtonsBox>
  );
};

import { ButtonsBox, Buttons } from './feedbackOptions.styled';

export const FeedbackOptions = props => {
  return (
    <ButtonsBox>
      <Buttons onClick={props.feedbackClick} type="button">
        Good
      </Buttons>
      <Buttons onClick={props.feedbackClick} type="button">
        Neutral
      </Buttons>
      <Buttons onClick={props.feedbackClick} type="button">
        Bad
      </Buttons>
    </ButtonsBox>
  );
};

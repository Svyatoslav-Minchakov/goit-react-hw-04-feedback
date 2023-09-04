export const FeedbackOptions = props => {
  return (
    <div>
      <button onClick={props.feedbackClick} type="button">
        Good
      </button>
      <button onClick={props.feedbackClick} type="button">
        Neutral
      </button>
      <button onClick={props.feedbackClick} type="button">
        Bad
      </button>
    </div>
  );
};

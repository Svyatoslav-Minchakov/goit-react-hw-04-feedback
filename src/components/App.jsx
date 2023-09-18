import { useState } from 'react';
import { Statistics } from './statistics/statistics';
import { FeedbackOptions } from './feedbackOptions/feedbackOptions';
import { Section } from './section/section';
import { Notification } from './notification/notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackClick = option => {
    if (option === 'good') setGood(prev => prev + 1);
    if (option === 'neutral') setNeutral(prev => prev + 1);
    if (option === 'bad') setBad(prev => prev + 1);
  };

  const totalClickCount = () => {
    return good + neutral + bad;
  };

  const positiveFeedbackCount = () => {
    const total = totalClickCount();
    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  return (
    <Section>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        feedbackClick={feedbackClick}
      />

      {totalClickCount() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalClickCount()}
          positivePercentage={positiveFeedbackCount()}
        />
      ) : (
        <Notification />
      )}
    </Section>
  );
};

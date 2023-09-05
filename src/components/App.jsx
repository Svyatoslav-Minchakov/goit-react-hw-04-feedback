import { Component } from 'react';
import { Statistics } from './statistics/statistics';
import { FeedbackOptions } from './feedbackOptions/feedbackOptions';
import { Section } from './section/section';
import { Notification } from './notification/notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackClick = event => {
    const buttonName = event.target.textContent.toLowerCase();
    this.setState(prevState => ({
      [buttonName]: prevState[buttonName] + 1,
    }));
  };

  totalClickCount = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  positiveFeedbackCount = () => {
    const total = this.totalClickCount();
    if (total === 0) {
      return 0;
    }
    return Math.round((this.state.good / total) * 100);
  };

  render() {
    return (
      <Section>
        <FeedbackOptions feedbackClick={this.feedbackClick} />

        {this.totalClickCount() > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.totalClickCount()}
            positivePercentage={this.positiveFeedbackCount()}
          />
        ) : (
          <Notification />
        )}
      </Section>
    );
  }
}

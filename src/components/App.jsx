import { Component } from 'react';
import { Statistics } from './statistics/statistics';
import { FeedbackOptions } from './feedbackOptions/feedbackOptions';

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
      <section>
        <h2>Please leave feedback</h2>

        <FeedbackOptions feedbackClick={this.feedbackClick} />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.totalClickCount()}
          positivePercentage={this.positiveFeedbackCount()}
        />
      </section>
    );
  }
}

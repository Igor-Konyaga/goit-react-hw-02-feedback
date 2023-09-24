import { Component } from 'react';
import css from './Feedback.module.css';
import { Statistics } from 'components/statistics/Statistics';
import { FeedbackOptions } from 'components/feedback-options/FeedbackOptions';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const currentId = e.target.id;

    this.setState(prevState => {
      return {
        [currentId]: prevState[currentId] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const calcPersent =
      (100 / (this.state.good + this.state.neutral + this.state.bad)) *
      this.state.good;
    const resultPercent = Math.trunc(calcPersent);
    return resultPercent;
  };

  render() {
    return (
      <div className={css.section}>
        <h1 className={css.title}>Please leave feedback</h1>
        <FeedbackOptions onLeaveFeedback={this.handleClick} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}

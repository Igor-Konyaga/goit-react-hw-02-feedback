import { Component } from 'react';
import css from './Statistics.module.css';

export class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedback: 0,
  };

  handleClick = e => {
    const currentId = e.target.id;

    this.setState(prevState => {
      const calcPersent =
        (100 / (prevState.good + prevState.neutral + prevState.bad + 1)) *
        (prevState.good + (currentId === 'good' && 1));
      const resultPercent = Math.trunc(calcPersent);
      return {
        positiveFeedback: resultPercent,
        [currentId]: prevState[currentId] + 1,
        total: prevState.good + prevState.neutral + prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};

  render() {
    return (
      <div className={css.section}>
        <h1 className={css.title}>Please leave feedback</h1>
        <ul className={`${css.list} ${css.statistics}`}>
          <li className={css.statisticsItem}>
            <button
              className={css.statisticsButton}
              id="good"
              onClick={this.handleClick}
            >
              Good
            </button>
          </li>
          <li className={css.statisticsItem}>
            <button
              className={css.statisticsButton}
              id="neutral"
              onClick={this.handleClick}
            >
              Neutral
            </button>
          </li>
          <li className={css.statisticsItem}>
            <button
              className={css.statisticsButton}
              id="bad"
              onClick={this.handleClick}
            >
              Bad
            </button>
          </li>
        </ul>
        <h2 className={css.title}>Statistics</h2>
        <ul className={`${css.list} ${css.feedback}`}>
          <li>
            <p>Good: {this.state.good}</p>
          </li>
          <li>
            <p>Neutral: {this.state.neutral}</p>
          </li>
          <li>
            <p>Bad: {this.state.bad}</p>
          </li>
        </ul>
        <div className={css.totalBody}>
          <p>Total: {this.state.total}</p>
          <p>Positive feedback: {this.state.positiveFeedback}%</p>
        </div>
      </div>
    );
  }
}

import { Component } from 'react';
import css from './Statistics.module.css';

export class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  click = e => {
    console.log(e.currentTarget.id);
    this.setState({
      [e.currentTarget.id]: this.state[e.currentTarget.id] + 1,
    });
  };

  render() {
    return (
      <div className={css.section}>
        <h1 className={css.title}>Please leave feedback</h1>
        <ul className={`${css.list} ${css.statistics}`}>
          <li className={css.statisticsItem}>
            <button
              className={css.statisticsButton}
              id="good"
              onClick={this.click}
            >
              Good
            </button>
          </li>
          <li className={css.statisticsItem}>
            <button
              className={css.statisticsButton}
              id="neutral"
              onClick={this.click}
            >
              Neutral
            </button>
          </li>
          <li className={css.statisticsItem}>
            <button
              className={css.statisticsButton}
              id="bad"
              onClick={this.click}
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
      </div>
    );
  }
}

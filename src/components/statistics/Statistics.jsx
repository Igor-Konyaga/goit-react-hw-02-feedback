import { Component } from 'react';
import css from './Statistics.module.css';

export class Statistics extends Component {
  render() {
    return (
      <div className={css.section}>
        <h1 className={css.title}>Please leave feedback</h1>
        <ul className={`${css.list} ${css.statistics}`}>
          <li className={css.statisticsItem}>
            <button className={css.statisticsButton}>Good</button>
          </li>
          <li className={css.statisticsItem}>
            <button className={css.statisticsButton}>Neutral</button>
          </li>
          <li className={css.statisticsItem}>
            <button className={css.statisticsButton}>Bad</button>
          </li>
        </ul>
        <h2 className={css.title}>Statistics</h2>
        <ul className={`${css.list} ${css.feedback}`}>
          <li>
            <p>Good:</p>
          </li>
          <li>
            <p>Neutral:</p>
          </li>
          <li>
            <p>Bad:</p>
          </li>
        </ul>
      </div>
    );
  }
}

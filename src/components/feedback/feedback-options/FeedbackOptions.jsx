import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={`${css.list} ${css.feedback0ption}`}>
      <li>
        <button
          className={css.feedback0ptionButton}
          id="good"
          onClick={onLeaveFeedback}
        >
          Good
        </button>
      </li>
      <li>
        <button
          className={css.feedback0ptionButton}
          id="neutral"
          onClick={onLeaveFeedback}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          className={css.feedback0ptionButton}
          id="bad"
          onClick={onLeaveFeedback}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};

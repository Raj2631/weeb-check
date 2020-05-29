import React from 'react';
import classes from './Modal.module.css';

export default function Modal(props) {
  return (
    <div className={classes.Modal}>
      <button onClick={props.click} className={classes.Close}>
        X
      </button>
      <form onSubmit={props.submit}>
        <div>
          <label htmlFor="difficulty">Difficulty: </label>
          <select
            style={{ display: 'block' }}
            name="difficulty"
            id="difficulty"
            value={props.difficultyValue}
            onChange={props.change}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div>
          <label htmlFor="NumberOfQuestions">Number of Questions: </label>
          <input
            style={{ display: 'block' }}
            min="0"
            max="40"
            step="5"
            type="number"
            name="questionsNumber"
            value={props.questionsValue}
            onChange={props.change}
          />
        </div>
        <button onClick={props.click} className={classes.Start}>
          Play Quiz!
        </button>
      </form>
    </div>
  );
}

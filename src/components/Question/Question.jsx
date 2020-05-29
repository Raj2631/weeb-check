import React from 'react';
import classes from './Question.module.css';

export default function Question(props) {
  const buttons = props.question.options.map((option) => {
    let buttonClass = [];
    let disabled = false;
    if (props.show) {
      if (option === props.question.correct) {
        buttonClass.push(classes.Correct);
        disabled = true;
      } else {
        disabled = true;
      }
    }
    return (
      <button
        data-correct={props.question.correct}
        className={buttonClass.join(' ')}
        disabled={disabled}
        onClick={props.onAnswer}
        key={option}
      >
        {option}
      </button>
    );
  });

  return (
    <div className={classes.Question}>
      <p>{props.question.question.replace(/&quot;/g, '"')}</p>
      <div>{buttons}</div>
    </div>
  );
}

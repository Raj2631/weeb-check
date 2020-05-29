import React, { Component } from 'react';
import Question from '../../components/Question/Question';
import classes from './Quiz.module.css';

class Quiz extends Component {
  state = {
    solved: 0,
    current: 0,
    selected: false,
  };

  onAnswerHandler = (e) => {
    this.setState({ selected: true });
    console.log(e.target.dataset.correct, e.target.innerText);
    if (e.target.innerText === e.target.dataset.correct) {
      this.setState((prevState) => ({ solved: prevState.solved + 1 }));
    }
  };

  onNextBtnClick = () => {
    this.setState((prevState) => ({
      current: prevState.current + 1,
      selected: false,
    }));
  };

  render() {
    const totalQuestions = this.props.questions.length;
    const question = this.props.questions[this.state.current];
    const button =
      this.state.current !== this.props.questions.length - 1 ? (
        <button onClick={this.onNextBtnClick}>Next Question</button>
      ) : (
        <button onClick={this.props.playAgain}>Play Again</button>
      );
    return (
      <div className={classes.Quiz}>
        <h1>
          Correct: {this.state.solved}/{totalQuestions}
        </h1>
        <Question
          show={this.state.selected}
          question={question}
          onAnswer={this.onAnswerHandler}
        />
        {button}
      </div>
    );
  }
}

export default Quiz;

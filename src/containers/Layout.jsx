import React, { Component } from 'react';
import classes from './Layout.module.css';
import Home from '../components/Home/Home';
import Backdrop from '../components/UI/Backdrop/Backdrop';
import Modal from '../components/UI/Modal/Modal';

export default class Layout extends Component {
  state = {
    questions: null,
    closeModal: true,
    queryValues: {
      difficulty: 'medium',
      numberOfQuestions: 10,
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.queryValues.difficulty !== prevState.queryValues.difficulty ||
      this.state.queryValues.numberOfQuestions !==
        prevState.queryValues.numberOfQuestions
    ) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    const { difficulty, numberOfQuestions } = this.state.queryValues;
    const res = await fetch(
      `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=31&difficulty=${difficulty}&type=multiple`
    );
    const data = await res.json();
    const questionArr = [];
    data.results.forEach((ques) => {
      const { incorrect_answers, correct_answer, question } = ques;
      const options = [...incorrect_answers, correct_answer];
      const obj = {
        question: question,
        options,
        correct: correct_answer,
      };
      questionArr.push(obj);
    });
    this.setState({ questions: questionArr });
  };

  onCloseModalHandler = () => {
    this.setState({ closeModal: true });
  };

  onInputChangeHandler = (event) => {
    let newValues = {};
    if (event.target.name === 'difficulty') {
      newValues = {
        ...this.state.queryValues,
        difficulty: event.target.value,
      };

      this.setState({ queryValues: newValues });
    } else {
      newValues = {
        ...this.state.queryValues,
        numberOfQuestions: event.target.value,
      };

      this.setState({ queryValues: newValues });
    }
  };

  onCustomHandler = () => {
    this.setState({ closeModal: false });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
  };

  render() {
    let modal = null;
    if (!this.state.closeModal) {
      modal = (
        <Backdrop
          click={this.onCloseModalHandler}
          close={this.state.closeModal}
        >
          <Modal
            submit={this.onSubmitHandler}
            click={this.onCloseModalHandler}
            change={this.onInputChangeHandler}
            difficultyValue={this.state.queryValues.difficulty}
            questionsValue={this.state.queryValues.numberOfQuestions}
          />
        </Backdrop>
      );
    }
    return (
      <div className={classes.Layout}>
        {modal}
        <Home clickOnCustom={this.onCustomHandler} />
      </div>
    );
  }
}

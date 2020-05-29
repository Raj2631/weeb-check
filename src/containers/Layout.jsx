import React, { Component } from 'react';
import classes from './Layout.module.css';
import Home from '../components/Home/Home';

const API =
  'https://opentdb.com/api.php?amount=10&category=31&difficulty=medium&type=multiple';
export default class Layout extends Component {
  state = {
    questions: null,
  };

  async componentDidMount() {
    const res = await fetch(API);
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
  }
  render() {
    return (
      <div className={classes.Layout}>
        <Home />
      </div>
    );
  }
}

import React from 'react';
import classes from './Home.module.css';
import svgImage from '../../assets/quizHome.svg';

const Home = () => {
  return (
    <div className={classes.Home}>
      <h1>WeebCheck</h1>
      <p>Do you like anime? Join the quiz game and see how you perform!</p>
      <img height="300" width="500" src={svgImage} alt="" />
      <button className={classes.Quick}>Quick Game</button>
      <button className={classes.Custom}>Custom</button>
    </div>
  );
};

export default Home;

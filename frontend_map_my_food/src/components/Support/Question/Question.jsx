import React from "react";
import classes from "./Question.module.css";

const Question = ({ question }) => {
  console.log(question);
  return (
    <div className={classes.container}>
      <div>Question</div>
    </div>
  );
};

export default Question;

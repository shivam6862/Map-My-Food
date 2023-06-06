import React from "react";
import classes from "./Question.module.css";

const Question = ({ question }) => {
  return (
    <div className={classes.container_question}>
      <div className={classes.question_heading}>
        {question} <span>*</span>
      </div>
      <input type="text" />
    </div>
  );
};
export default Question;

import React from "react";
import classes from "./Question.module.css";

const Question = ({ question, value, handleChange }) => {
  return (
    <div className={classes.container_question}>
      <div className={classes.question_heading}>
        {question} <span>*</span>
      </div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
};
export default Question;

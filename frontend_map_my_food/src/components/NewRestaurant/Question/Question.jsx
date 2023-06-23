import React, { useState } from "react";
import classes from "./Question.module.css";

const Question = ({ question, value, handleChange }) => {
  const error = value.trim() == "";
  const [isTouch, setIsTouch] = useState(false);
  if (question == "image") return;
  return (
    <div
      className={
        error && isTouch
          ? `${classes.container_question_error}`
          : `${classes.container_question}`
      }
    >
      <div className={classes.question_heading}>
        {question} <span>*</span>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          handleChange(e);
          setIsTouch(true);
        }}
      />
      {error && isTouch && (
        <div className={classes.error}>Please enter a valid {question}.</div>
      )}
    </div>
  );
};
export default Question;

import React from "react";
import classes from "./Questions.module.css";
import Question from "../Question/Question";

const Questions = ({ question }) => {
  return (
    <div className={classes.container}>
      {question.map((data, index) => (
        <Question data={data} index={index} key={index} />
      ))}
    </div>
  );
};

export default Questions;

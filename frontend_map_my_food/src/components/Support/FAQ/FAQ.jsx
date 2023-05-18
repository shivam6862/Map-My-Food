import React from "react";
import { useState } from "react";
import classes from "../Partner.module.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Question from "../Question/Question";
import FAQquestion from "../../TemporaryData/Support/FAQ.json";

const FAQ = () => {
  const [question, setQuestion] = useState(FAQquestion);
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.boxes}>
        <div className={classes.inner_box}>
          <Navigation />
          <div className={classes.box}>
            <div className={classes.heading}>FAQ</div>
            <Question question={question} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

import React from "react";
import { useState } from "react";
import classes from "../Partner.module.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Question from "../Question/Question";
import LegalQuestion from "../../TemporaryData/Support/Legel.json";

const Legal = () => {
  const [question, setQuestion] = useState(LegalQuestion);
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.boxes}>
        <div className={classes.inner_box}>
          <Navigation />
          <div className={classes.box}>
            <div className={classes.heading}>Legal</div>
            <Question question={question} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;

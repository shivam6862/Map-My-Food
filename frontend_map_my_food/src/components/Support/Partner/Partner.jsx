import React, { useState } from "react";
import classes from "../Partner.module.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Question from "../Question/Question";
import PartnerQuestion from "../../TemporaryData/Support/Partner.json";

const Partner = () => {
  const [question, setQuestion] = useState(PartnerQuestion);
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.boxes}>
        <div className={classes.inner_box}>
          <Navigation />
          <div className={classes.box}>
            <div className={classes.heading}>Partner Onboarding</div>
            <Question question={question} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;

import React from "react";
import { useState, useEffect } from "react";
import classes from "../Partner.module.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Questions from "../Questions/Questions";
import LegalQuestion from "../../TemporaryData/Support/Legel.json";
import Loading from "../Loading/Loading";

const Legal = () => {
  const [question, setQuestion] = useState(LegalQuestion);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.boxes}>
        <div className={classes.inner_box}>
          <Navigation />
          <div className={classes.box}>
            <div className={classes.heading}>Legal</div>
            <div className={classes.loading}>{isLoading && <Loading />}</div>
            {!isLoading && <Questions question={question} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;

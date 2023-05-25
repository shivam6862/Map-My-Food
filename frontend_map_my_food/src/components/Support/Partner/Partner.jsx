import React, { useEffect, useState } from "react";
import classes from "../Partner.module.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Questions from "../Questions/Questions";
import PartnerQuestion from "../../TemporaryData/Support/Partner.json";
import Loading from "../Loading/Loading";

const Partner = () => {
  const [question, setQuestion] = useState(PartnerQuestion);
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
            <div className={classes.heading}>Partner Onboarding</div>
            <div className={classes.loading}>{isLoading && <Loading />}</div>
            {!isLoading && <Questions question={question} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;

import React, { useState } from "react";
import classes from "./Question.module.css";

const Question = ({ data, index }) => {
  const [arrowIndex, setArrowIndex] = useState(-1);
  const setIndexWithArrow = (index) => {
    if (arrowIndex == index) setArrowIndex(-1);
    else setArrowIndex(index);
  };
  const sendMail = (subject) => {
    const email = "example@gmail.com";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };
  return (
    <div className={classes.each_quextion} key={index}>
      <div className={classes.downarrow}>
        <i
          className={`${
            arrowIndex == index ? classes.arrow_up : classes.arrow_down
          }`}
        ></i>
      </div>
      <div
        className={classes.heading}
        onClick={() => {
          setIndexWithArrow(index);
        }}
      >
        <h1>
          {data.Question}
          <span>Shivam kumar 21117119 Mechanical Engineering</span>
        </h1>
      </div>
      {index == arrowIndex ? (
        <>
          <div className={classes.top}>
            <div className={classes.each_answer}>
              {data.answer.map((each_answer, index) => (
                <p key={index}>{each_answer}</p>
              ))}
            </div>
          </div>
          <div className={classes.email_exisit}>
            {data.email ? (
              <div className={classes.bottom}>
                <button
                  onClick={() => {
                    sendMail(data.Question);
                  }}
                >
                  SEND AN EMAIL
                </button>
                <h3>We will revert within 24-48 hrs</h3>
              </div>
            ) : (
              <></>
            )}
          </div>
          {data.readmore ? (
            <div className={classes.readmore}>
              <a href={data.readmore}>Read More</a>
            </div>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Question;

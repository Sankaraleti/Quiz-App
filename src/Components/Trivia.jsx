import React, { useEffect, useState } from "react";
// import "../App.css";
import Data from "./data.js";
const Trivia = ({ setstopTime, setQuesNumber, questionNumber }) => {
  const [quesData, setQuesData] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  useEffect(() => {
    setQuesData(Data[questionNumber - 1]);
  }, [quesData, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };
  const handleClick = ans => {
    setSelectedAnswer(ans);
    setClassName("answer active");
    delay(3000, () =>
      setClassName(ans.correct === true ? "answer correct" : "answer wrong")
    );
    delay(6000, () => {
      if (ans.correct) {
        setQuesNumber(prev => prev + 1);
        setSelectedAnswer(null);
      } else {
        setstopTime(true);
      }
    });
  };

  return (
    <>
      <div className="trivia">
        <div className="question">{quesData.question}</div>
        <div className="answers">
          {quesData.answers?.map(ans => (
            <div
              className={selectedAnswer === ans ? className : "answer"}
              onClick={() => handleClick(ans)}
            >
              {ans.text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Trivia;

import "./App.css";
import { useState, useEffect } from "react";
import Trivia from "./Components/Trivia";
function App() {
  const [questionNumber, setNumber] = useState(1);
  const [stopTime, setstopTime] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const moneyValues = [
    { id: 1, amount: 100 },
    { id: 2, amount: 200 },
    { id: 3, amount: 300 },
    { id: 4, amount: 500 },
    { id: 5, amount: 1000 },
    { id: 6, amount: 2000 },
    { id: 7, amount: 4000 },
    { id: 8, amount: 8000 },
    { id: 9, amount: 16000 },
    { id: 10, amount: 32000 },
    { id: 11, amount: 64000 },
    { id: 12, amount: 125000 },
    { id: 13, amount: 250000 },
    { id: 14, amount: 500000 },
    { id: 15, amount: 1000000 }
  ].reverse();

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyValues.find(m => m.id === questionNumber - 1).amount);
  }, [moneyValues, questionNumber]);
  return (
    <div className="App">
      <div className="main">
        {stopTime ? (
          <h1 class="stop-text">you earned : {earned}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">30</div>
            </div>
            <div className="bottom">
              <Trivia
                setstopTime={setstopTime}
                setQuesNumber={setNumber}
                questionNumber={questionNumber}
              />
            </div>
          </>
        )}
      </div>
      <div className="money-pyramid">
        <ul className="money-list">
          {moneyValues.map(item => {
            return (
              <li
                className={
                  questionNumber === item.id ? "moneyItem active" : "moneyItem"
                }
              >
                <span className="number">{item.id}</span>
                <span className="amount"> ${item.amount}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

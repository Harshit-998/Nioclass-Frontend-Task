import React, { useState, useEffect } from "react";
import { MathJax } from "better-react-mathjax";
import Axios from "axios";

function Questions() {
  const [question, setQuestion] = useState("");
  const [questionNumber, setQuestionNumber] = useState([
    "AreaUnderTheCurve_901",
    "BinomialTheorem_901",
    "DifferentialCalculus2_901",
  ]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    Axios.get(
      `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${questionNumber[active]}`
    ).then((response) => {
      setQuestion(response.data[0].Question);
    });
  }, [active]);

  const handle = (value) => {
    console.log(value, active, questionNumber[active]);
    if (value >= questionNumber.length || value < 0) {
    } else {
      setActive(value);
    }
  };

  if (!question) {
    return <h2 className="center">Loading...</h2>;
  }

  return (
    <div className="ques">
      <div className="question-index">Question number {active + 1}: </div>
      <div className="section">
        <div className={"question"}>
          <MathJax>{question}</MathJax>
        </div>
      </div>

      <div className="buttons">
        <button
          className="btn-prev"
          disabled={active < 0}
          onClick={() => handle(active - 1)}
        >
          Previous Question
        </button>
        <button
          disabled={active < 0}
          className="btn-next"
          onClick={() => handle(active + 1)}
        >
          Next Question
        </button>
      </div>
    </div>
  );
}

export default Questions;

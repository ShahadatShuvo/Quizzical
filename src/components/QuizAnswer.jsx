import { Button } from "@mui/material";
import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

function QuizAnswer({ setQuizPage, questionsList }) {
  function calculateScore(questionsList) {
    let temp = 0;
    for (let i = 0; i < 5; i++) {
      if (questionsList[i].clicked_answer === questionsList[i].correct_answer) {
        temp++;
      }
    }
    return temp;
  }
  const score = calculateScore(questionsList);
  return (
    <div className="relative z-30 h-full w-full flex justify-center items-center">
      <Scrollbars style={{ maxWidth: "70vw", maxHeight: "80vh" }}>
        <div className="my-3">
          {questionsList.map((question, index) => (
            <div key={index} className="text-primary">
              <h3 className="mt-2 text-lg font-bold tracking-wide">
                {index + 1}. {question.question}{" "}
              </h3>
              <div className="pt-3 pb-5 border-b border-primary-light">
                {question.shuffledArray.map((option, pos) => (
                  <span
                    key={pos}
                    className={
                      question.correct_answer === option
                        ? "inline-block border border-[#D6DBF5] px-3 py-1 mr-3 my-1 rounded-full bg-green-300"
                        : question.clicked_index === pos
                        ? "inline-block border border-[#D6DBF5] px-3 py-1 mr-3 my-1 rounded-full bg-red-200 "
                        : "inline-block border border-[#D6DBF5] px-3 py-1 mr-3 my-1 rounded-full"
                    }
                  >
                    {option}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="mt-5 flex justify-center items-center">
            <p className="text-xl font-bold text-primary mr-3">
              You Scored {score}/5 correct answers
            </p>
            <Button
              sx={{
                bgcolor: "#4D5B9E",
                "&:hover": {
                  bgcolor: "#4D5B9E",
                },
              }}
              variant="contained"
              size="small"
              onClick={() => setQuizPage("home")}
            >
              Play Again
            </Button>
          </div>
        </div>
      </Scrollbars>
    </div>
  );
}

export default QuizAnswer;

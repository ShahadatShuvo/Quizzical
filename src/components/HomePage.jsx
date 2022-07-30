import { Button } from "@mui/material";
import React from "react";

function HomePage({ setQuizPage, fetchQuiz }) {
  function onHandleClick() {
    setQuizPage("quiz");
    fetchQuiz();
  }
  return (
    <div className="z-30 h-full w-full flex justify-center items-center">
      <div className="text-center leading-10">
        <h1 className="text-4xl font-bold text-primary">Quizzical</h1>
        <p className="text-primary font-bold">Check Your General Knowledge.</p>
        <Button
          sx={{
            bgcolor: "#4D5B9E",
            "&:hover": {
              bgcolor: "#4D5B9E",
            },
          }}
          variant="contained"
          size="small"
          onClick={onHandleClick}
        >
          Start Quiz
        </Button>
      </div>
    </div>
  );
}

export default HomePage;

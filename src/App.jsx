import { Button } from "@mui/material";
import ImgBottom from "./images/bottom.png"
import ImgTop from "./images/top.png"
import HomePage from "./components/HomePage";
import React from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import SingleQuestion from "./components/SingleQuestion";
import QuizAnswer from "./components/QuizAnswer";

function App() {
  const arr = [1, 2, 3, 4, 5];
  const [data, setData] = React.useState([]);

  const [questionsList, setQuestionsList] = React.useState([]);
  const [questionObject, setQuestionObject] = React.useState([]);

  console.log("questionsList:", questionsList);

  const [quizPage, setQuizPage] = React.useState("home");

  async function fetchQuiz() {
    const res = await fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple');
    const data = await res.json();
    setData(data.results);
    setQuestionsList(data.results);
  }

  React.useEffect(() => {
    setQuestionsList((prevArray) => {
      let resultedArray = [];
      for (let i = 0; i < 5; i++) {
        const currentIndexData = prevArray[i];
        let resultedObj = {};
        if (i === questionObject.index) {
          resultedObj = {
            ...currentIndexData,
            clicked_answer: questionObject.clicked_answer,
            clicked_index: questionObject.clicked_index,
            shuffledArray: questionObject.shuffledArray,
          }
        } else {
          resultedObj = {
            ...currentIndexData,
          }
        }
        resultedArray[i] = resultedObj;
      }
      return resultedArray;
    })
  }, [questionObject])

  const displaySingleQuestion = data.map((question, index) => {
    return (<SingleQuestion key={index}
      question={question} pos={index} questionObject={questionObject} setQuestionObject={setQuestionObject} />)
  })

  return (
    <div className="h-[100vh] w-[100vw]">
      {/* Page One Start  */}
      {quizPage === "home" && <HomePage setQuizPage={setQuizPage}
        fetchQuiz={fetchQuiz} />}
      {/* Page One End  */}
      {/* Page Two Start  */}
      {quizPage === "quiz" &&
        (<div className="relative z-30 h-full w-full flex justify-center items-center" >
          <Scrollbars style={{ maxWidth: "70vw", maxHeight: "80vh" }}>
            <div className='my-3'>
              {displaySingleQuestion}
              <div className="mt-5 flex justify-center items-center">
                <Button sx={{
                  bgcolor: "#4D5B9E", "&:hover": {
                    bgcolor: "#4D5B9E",
                  }
                }} variant="contained" size="small" onClick={() => setQuizPage("answer")}>Check Answer</Button></div>
            </div>
          </Scrollbars>
        </div>)
      }
      {/* Page Two End  */}
      {quizPage === "answer" && <QuizAnswer setQuizPage={setQuizPage}
        fetchQuiz={fetchQuiz} />}

      <div className="fixed z-10 bottom-[-8%] left-[-5%]">
        <img src={ImgBottom} alt="" />
      </div>
      <div className="fixed z-10 top-0 right-0">
        <img src={ImgTop} alt="" />
      </div>
    </div>
  );
}

export default App;

import { Alert, Button } from "@mui/material";
import ImgBottom from "./images/bottom.png"
import ImgTop from "./images/top.png"
import HomePage from "./components/HomePage";
import React from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import SingleQuestion from "./components/SingleQuestion";
import QuizAnswer from "./components/QuizAnswer";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';

function App() {
  const [check, setCheck] = React.useState([]);
  const unique = [...new Set(check)];
  const [data, setData] = React.useState([]);

  const [questionsList, setQuestionsList] = React.useState([]);
  const [questionObject, setQuestionObject] = React.useState([]);
  const [open, setOpen] = React.useState(true);

  const [quizPage, setQuizPage] = React.useState("home");

  async function fetchQuiz() {
    const res = await fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple');
    const data = await res.json();
    setData(data.results);
    setQuestionsList(data.results);
  }

  React.useEffect(() => {
    // arr[questionObject.index] = 0; 
    setCheck((prevArr) => {
      if (questionObject.index === 0) {
        return [...prevArr, questionObject.index]
      } else if (questionObject.index === 1) {
        return [...prevArr, questionObject.index]
      } else if (questionObject.index === 2) {
        return [...prevArr, questionObject.index]
      } else if (questionObject.index === 3) {
        return [...prevArr, questionObject.index]
      } else if (questionObject.index === 4) {
        return [...prevArr, questionObject.index]
      }
      return prevArr;
    });
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

  function onHandleClick() {
    if (unique.length < 5) {
      setQuizPage("quiz");
    } else {
      setQuizPage("answer");

    }
    setOpen(true);
  }

  return (
    <div className="h-[100vh] w-[100vw]">
      {/* Page One Start  */}
      {quizPage === "home" && <HomePage setQuizPage={setQuizPage}
        fetchQuiz={fetchQuiz} />}
      {/* Page One End  */}
      {/* Page Two Start  */}
      {quizPage === "quiz" && unique.length < 6 &&
        (<div className="relative z-30 h-full w-full flex justify-center items-center" >
          <div className="absolute bottom-2">
            <Collapse in={open}>
              <Alert
                size="small"
                severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                Please! Fill up All the 5 Questions Answer.
              </Alert>
            </Collapse>
          </div>
          <Scrollbars style={{ maxWidth: "70vw", maxHeight: "80vh" }}>
            <div className='my-3'>
              {displaySingleQuestion}
              <div className="mt-5 flex justify-center items-center">
                <Button sx={{
                  bgcolor: "#4D5B9E", "&:hover": {
                    bgcolor: "#4D5B9E",
                  }
                }} variant="contained" size="small" onClick={onHandleClick}>Check Answer</Button>
              </div>
            </div>
          </Scrollbars>
        </div>)
      }
      {/* Page Two End  */}
      {quizPage === "answer" && unique.length === 5 && <QuizAnswer questionsList={questionsList} setQuizPage={setQuizPage}
        fetchQuiz={fetchQuiz} />
      }

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

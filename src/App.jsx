import { Button } from "@mui/material";
import ImgBottom from "./images/bottom.png"
import ImgTop from "./images/top.png"
import HomePage from "./components/HomePage";
import QuizPage from "./components/QuizPage";

function App() {
  return (
    <div className="h-[100vh] w-[100vw]">

      {/* Page One Start  */}
      {/* <HomePage />  */}
      {/* Page One End  */}
      {/* Page Two Start  */}
      <QuizPage />
      {/* Page Two End  */}

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

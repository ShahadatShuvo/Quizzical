import { Button } from "@mui/material";

function App() {
  return (
    <div className="bg-primary-light h-[100vh] w-[100vw] flex justify-center items-center" >
      <div className="text-center leading-10">
        <h1 className="text-4xl font-bold text-primary">Quizzical</h1>
        <p className="text-primary font-bold">Check Your General Knowledge.</p>
        <Button sx={{
          bgcolor: "#4D5B9E", "&:hover": {
          bgcolor: "#4D5B9E",
        }}} variant="contained" size="small">Start Quiz</Button>
     </div>
    </div>
  );
}

export default App;

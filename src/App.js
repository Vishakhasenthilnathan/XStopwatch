import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [isRunning,setIsRunning] = useState(false);
    const startOrStop = isRunning ? "Stop" : "Start";
    const [intervalId,setIntervalId] = useState(null);
    const [seconds,setSeconds] = useState(0);
    const handleReset = () => {
        setIsRunning(false);
        setSeconds(0);
        clearInterval(intervalId);

    };
    const handleStartOrStop = () => {
        if(isRunning){
            clearInterval(intervalId);
        }
        else{
            const id = setInterval(()=>{
                setSeconds((seconds)=>seconds+1);
            },1000);
            setIntervalId(id);
        }
        setIsRunning(!isRunning);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time/60);
        const seconds = time%60;
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };
  return (
    <div className="App">
     <h1>Stopwatch</h1>
        <p>Time: {formatTime(seconds)}</p>
        <button onClick={handleStartOrStop}>{startOrStop}</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;

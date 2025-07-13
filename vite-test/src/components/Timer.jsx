import { useState } from "react";

function Timer() {
  const [time, startTimer] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const timerButton=()=>{
    setDisabled(true);
    const buttonState=setInterval(()=>{
        startTimer((time)=>{
        if(time>=10){
            clearInterval(buttonState);
            setDisabled(false);
            return 0;
        }
        return time+1;
        });
    }, 1000);
  };

  return (
    <div>
      <button onClick={timerButton} disabled={disabled}>타이머 시작</button>
      <h1>Time: {time}seconds</h1>
      <h2>남은 시간 : {10-time}</h2>
    </div>
  );
}

export default Timer;

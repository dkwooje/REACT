import { useState, useRef } from "react";
import ResultModal from "./ResultModal";


export default function TimerChallenge({title, targetTime, onReset}){
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime *1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if(timeRemaining <= 0){
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset(){
        setTimeRemaining(targetTime*1000);
    }


    function handleStart(){
       timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
        }, 10);
    }

    function handleStop(){
        dialog.current.open();
        clearInterval(timer.current);
    }

    return(
        <>
         <ResultModal ref={dialog} targetTime={targetTime} remainingTime= {timeRemaining} onReset = {handleReset}  />
        <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">{targetTime} 초</p>
        <p>
            <button onClick={timerIsActive ? handleStop :handleStart}>
                {timerIsActive ? '정지' : '시작'}
            </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
            {timerIsActive ?  '타이머 동작중...' : '타이머 비활성화 되었습니다.' }
        </p>
    </section>
    </>
    );
}
import { useState, useRef } from "react";



export default function TimerChallenge({title, targetTime}){
    const timer = useRef();
    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);



    function handleStart(){
       timer.current = setTimeout(()=>{
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    function handleStop(){
            clearTimeout(timer.current);
    }

    return <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>패배</p>}
        <p className="challenge-time">
            {targetTime} 초
        </p>
        <p>
            <button onClick={timerStarted ? handleStop :handleStart}>
                {timerStarted ? '정지' : '시작'}
            </button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
            {timerStarted ?  '타이머 동작중...' : '타이머 비활성화 되었습니다.' }
        </p>
    </section>
}
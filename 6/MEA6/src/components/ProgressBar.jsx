import { useState, useEffect } from "react";
export default function ProgressBar({timer}) {
    const [remainingTime, setRemainingTime] = useState(timer);
    useEffect(()=>{
        const interval = setInterval(() => {
           console.log('인터벌실행');
           setRemainingTime(prevTime=>prevTime-10);
         }, 10);
            return ()=>{
                console.log('인터벌삭제');
                clearInterval(interval);
              };
            }, []);
    return <progress value= {remainingTime} max={timer}/>;
}
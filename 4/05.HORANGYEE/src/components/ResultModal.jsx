import {forwardRef, useImperativeHandle,useRef} from 'react';
import {createPortal} from 'react-dom'; 
  const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset}, ref) {

    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime/1000).toFixed(2);
    const score =Math.round((1 - remainingTime / (targetTime * 1000)) *100)

    useImperativeHandle(ref, ()=>{
        return {
            open(){
                dialog.current.showModal();
            }
        }
    });

    return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>           
        {userLost && <h2>당신은 졌습니다.</h2>}
        {!userLost && <h2> 점수는...{score}정도?</h2>}                 
        <p>     
            목표 시간은 <strong>{targetTime} 초였으며,</strong>
        </p>              
        <p>
            당신이 멈춘 타이머에는 <strong>{formattedRemainingTime}초가 남았습니다.</strong>
        </p>              
        <form method="dialog" onSubmit={onReset}>              
            <button>닫기</button>   
        </form> 
    </dialog>
    ,document.getElementById('modal'));
})

export default ResultModal;
import {forwardRef} from 'react';
  const ResultModal = forwardRef(function ResultModal({ result, targetTime}, ref) {
    return (
    <dialog ref={ref} className="result-modal" >           
        <h2>당신은 {result}습니다.</h2>                 
        <p>     
            목표 시간은 <strong>{targetTime} 초였으며,</strong>
        </p>              
        <p>
            당신이 멈춘 타이머에는 <strong>???초가 남았습니다.</strong>
        </p>              
        <form method="dialog">              
            <button>닫기</button>   
        </form> 
    </dialog>
    );
})

export default ResultModal;
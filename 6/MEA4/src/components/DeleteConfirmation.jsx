import { useEffect } from "react";
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(()=>{
    console.log("타이머가 세팅되었습니다");
    const timer = setTimeout(()=>{
      onConfirm();  
    },3000);
    return ()=>{
        console.log("타이머를 삭제 합니다 ");
        clearTimeout(timer);  //클린업 함수
    };
  },[]); //[]안에 함수의 주소는 절대 권장 X, ex: [onConfirm, onCancel] ,왜냐하면 랜더링 할 때 마다 주소값이 바껴 매칭이 꼬일 수 있기 때문(무한루프)

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
    </div>
  );
}


import { useState, useRef } from "react";


export default function Player() {
  const playerName = useRef();

  const [enteredPalyerName, setEnteredPlayerName] = useState(null);
function handleClick(){
 //setEnteredPlayerName(playerName.current.value);
 playerName.current.value = '';
}
  return (
    <section id="player">
      <h2>{playerName.current ?? '익명'}환영합니다.</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
//state: UI에 반영되어야 하는 변수값에 사용되어야 한다. => UI에 영향을 주지 않는 변수값에는 사용하지 않는 것이 추천
//refs: 값이 변경되더라도 컴포넌트를 재실행하지 않기때문에 렌더링이 다시 되지 않고, DOM요소에 직접적으로 접근해서 사용할 수 있기 때문에 요소에 있는
//value값과 같은 특징 값을 가져오거나 브라우져가 가지고 있는 API등에 접근할 때 유용

/*
import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef(); // input 참조
  const [enteredPlayerName, setEnteredPlayerName] = useState(null); // 상태로 이름 저장

  function handleClick() {
    // 입력된 이름을 상태로 설정하고, 입력 필드를 비움
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>{enteredPlayerName ?? '익명'} 환영합니다.</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
*/


import { useState, useRef } from "react";


export default function Player() {
  const playerName = useRef();

  const [enteredPalyerName, setEnteredPlayerName] = useState(null);
function handleClick(){
 setEnteredPlayerName(playerName.current.value);
 playerName.current.value = '';
}
  return (
    <section id="player">
      <h2>{enteredPalyerName ?? '익명'}환영합니다.</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}


import { useState, useRef } from "react";


export default function Player() {
  const playerName = useRef();

  const [enteredPalyerName, setEnteredPlayerName] = useState(null);6
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

/*

export default function Player(){
  
  const [enteredPlayerName,setEnteredPlayerName] = useState(null);

  function handleInputChange(e){
    setEnteredPlayerName(e.target.value);
  }


  return(
      <section id="player">
        <h2>{enteredPlayerName ?? '익명'}환영합니다.</h2>
        <p>
        <input type="text" 
        onChange={handleInputChange} 
        value={enteredPlayerName} />
        </p>
      </section>
  )
}
  */

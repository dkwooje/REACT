import Player from "./assets/components/Player";
import GameBoard from "./assets/components/GameBoard";
import { useState } from "react";
function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player" >
        <Player initialName="player 1" symbol="X" isActive={activePlayer === 'X'} />
        <Player initialName="player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSqure={handleSelectSquare} activePlayerSymbol ={activePlayer}/>
      </div>
      로그
    </main>
  );
}

export default App

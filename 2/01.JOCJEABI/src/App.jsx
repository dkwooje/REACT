import Player from "./assets/components/Player";
function App() {

  return (
    <main>
      <div id="game-container">
        <ol id="players">
        <Player initialName="player 1" symbol="X" />
        <Player initialName="player 2" symbol="O" />
        </ol>
        게임보드
      </div>
      로그
    </main>
  );
}

export default App

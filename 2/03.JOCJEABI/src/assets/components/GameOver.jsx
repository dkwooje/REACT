export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>승자는 {winner}입니다!</p>}
      {!winner && <p>비겼습니다.</p>}
      <p>
        <button onClick={onRestart}>재대결</button>
      </p>
    </div>
  );
}
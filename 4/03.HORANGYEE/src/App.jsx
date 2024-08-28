import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="쉬움" targetTime={1} />
        <TimerChallenge title="보통" targetTime={5} />
        <TimerChallenge title="어려움" targetTime={10} />
        <TimerChallenge title="전문가" targetTime={20} />
      </div>
    </>
  );
}

export default App;

import Player from './components/Player/Player.jsx';
import TimerChallenge from "./components/TimerChallenge/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
          <TimerChallenge title="Easy" targetTime={1}></TimerChallenge>
          <TimerChallenge title="Not Easy" targetTime={2}></TimerChallenge>
          <TimerChallenge title="Getting Harder" targetTime={10}></TimerChallenge>
          <TimerChallenge title="Pros Only" targetTime={15}></TimerChallenge>
      </div>
    </>
  );
}

export default App;

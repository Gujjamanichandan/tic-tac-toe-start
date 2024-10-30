import Player from "./components/Player";

function App() {
  return (
    <div id="game-container">
      <ol id="players">
        <Player name="player1" symbol="X" />
        <Player name="player2" symbol="O" />
      </ol>
      Game Board
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Board from "./components/GameBoard";
import Game from "./components/GamePlay";

function App() {
  return (
    <div className="App">
      <h1>Connect 4</h1>

      <Board />
    </div>
  );
}

export default App;

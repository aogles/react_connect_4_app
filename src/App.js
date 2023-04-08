import logo from "./logo.svg";
import "./App.css";
import Board from "./components/GameBoard";

function App() {
  return (
    <div className="App">
      <h1>Connect 4</h1>

      <Board />
    </div>
  );
}

export default App;

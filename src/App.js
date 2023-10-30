import logo from "./logo.svg";
import "./App.css";
import Board from "./components/GameBoard";
import Game from "./components/GamePlay";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function App() {
  return (
    <div className="App">
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
      <p>Let's Play...</p>
      <h1>Connect 4!</h1>

      <Board />
    </div>
  );
}

export default App;

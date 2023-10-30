import logo from "./logo.svg";
import "./App.css";
import Board from "./components/GameBoard";
import Game from "./components/GamePlay";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="App">
      <>
        <Button variant="warning" onClick={handleShow}>
          Developer Information
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>How I built this project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            🎮🏆 Overcoming Developer Challenges in Connect 4 🎮🏆
            <p>
              1. Creating the game board: I was able to do this by creating 6
              rows and 7 columns and then i used css to design the individual
              cells. I also used "useState" to track the game board and made
              each cell clickable using "handleClick". Once a cell is clicked
              the board updates and places the currentPlayer emoji in the cell
              based on the index of that specific cell. after each play I also
              call the function to check for a winner.
            </p>
            <image> Place image of code</image>
            <p>
              2. Keeping track of each player's turn: I was able to do this by
              keeping track of each player with "useState". the Game begins with
              player 1 as the default player. When a player clicks on a cell,
              this then triggers a function that changes the player to the next
              player. EX: setCurrentPlayer(currentPlayer === PLAYER_ONE ?
              PLAYER_TWO : PLAYER_ONE);
            </p>
            <p>
              3. Diagonal wins are detected by iterating through the game board
              using nested loops for both left-to-right and right-to-left
              diagonals. For each diagonal starting point (represented by row
              and col), the code checks if four consecutive cells in the
              diagonal contain the current player's discs, triggering a win
              alert and logging the winner if found. This method covers all
              possible diagonal win scenarios in the Connect 4 game
            </p>
            <image>place image of code</image>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      <p>Grab a friend and lets play!</p>
      <h1>Connect 4</h1>

      <Board />
    </div>
  );
}

export default App;

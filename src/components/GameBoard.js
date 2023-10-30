import { useState } from "react";
import Button from "react-bootstrap/Button";
import Game from "./GamePlay";

const Board = () => {
  const ROWS = 6;
  const COLUMNS = 7;
  const PLAYER_ONE = "😈";
  const PLAYER_TWO = "😼";

  const [clearBoard, setClearBoard] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_ONE);

  const createBoard = () => {
    const board = [];
    for (let row = 0; row < ROWS; row++) {
      board[row] = Array(COLUMNS).fill(null);
    }
    return board;
  };
  const [board, setBoard] = useState(() => createBoard());

  const handleClick = (columnIndex, rowIndex) => {
    console.log(`Clicked column ${columnIndex}`);
    console.log(`Clicked row ${rowIndex}`);
    // Switch to the other player
    setCurrentPlayer(currentPlayer === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE);

    // Find the lowest empty cell in the clicked column

    let newRowIndex = -1;
    for (let i = ROWS - 1; i >= 0; i--) {
      if (board[i][columnIndex] === null) {
        newRowIndex = i;
        break;
      }
    }

    if (newRowIndex === -1) {
      // Column is full, do nothing
      return;
    }
    // If the column is already full, do nothing

    // Update the game board to reflect the player's move
    const newBoard = [...board];
    newBoard[newRowIndex][columnIndex] = currentPlayer;
    setBoard(newBoard);

    // Check for a winner
    checkForWinner(newBoard, currentPlayer);
  };

  const checkForWinner = (board, player) => {
    // Check rows for a win
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col <= COLUMNS - 4; col++) {
        if (
          board[row][col] === player &&
          board[row][col + 1] === player &&
          board[row][col + 2] === player &&
          board[row][col + 3] === player
        ) {
          alert(currentPlayer + "has won");
          console.log(currentPlayer, "has won!");
        }
      }
    }

    //check columns for a winner
    for (let col = 0; col < COLUMNS; col++) {
      for (let row = 0; row <= ROWS - 4; row++) {
        if (
          board[row][col] === player &&
          board[row + 1][col] === player &&
          board[row + 2][col] === player &&
          board[row + 3][col] === player
        ) {
          alert(currentPlayer + "has won");
          console.log(currentPlayer, "has won!");
        }
      }
    }
    // Check diagonals for a win
    for (let row = 0; row <= ROWS - 4; row++) {
      for (let col = 0; col <= COLUMNS - 4; col++) {
        if (
          board[row][col] === player &&
          board[row + 1][col + 1] === player &&
          board[row + 2][col + 2] === player &&
          board[row + 3][col + 3] === player
        ) {
          alert(currentPlayer + "has won");
          console.log(currentPlayer, "has won!");
        }
        if (
          board[row][col + 3] === player &&
          board[row + 1][col + 2] === player &&
          board[row + 2][col + 1] === player &&
          board[row + 3][col] === player
        ) {
          alert(currentPlayer + "has won");
          console.log(currentPlayer, "has won!");
        }
      }
    }
  };

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, columnIndex) => (
            <div
              className={`cell ${
                rowIndex && columnIndex
                  ? currentPlayer === PLAYER_ONE
                  : currentPlayer === PLAYER_TWO
                  ? "player-2"
                  : ""
              }`}
              key={`${rowIndex}-${columnIndex}`}
              onClick={() => handleClick(columnIndex, rowIndex)}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
      <button className="newGameButton" onClick={() => setBoard(createBoard())}>
        {" "}
        New Game{" "}
      </button>
    </div>
  );
};

export default Board;

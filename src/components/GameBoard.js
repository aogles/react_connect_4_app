import { useState } from "react";

const Board = () => {
  const ROWS = 6;
  const COLUMNS = 7;
  const PLAYER_ONE = "Amber";
  const PLAYER_TWO = "Brianna";

  const [clearBoard, setClearBoard] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_ONE);

  function newBoard() {
    const clearedBoard = [];
    for (let row = 0; row < ROWS; row++) {
      clearedBoard[row] = Array(COLUMNS).fill(null);
    }
    // setClearBoard;
  }

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

    // Switch to the other player
    setCurrentPlayer(currentPlayer === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE);

    // Exit the loop
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
                    ? "player-one"
                    : "player-two"
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
      <button onClick={createBoard}> New Game </button>
    </div>
  );
};

export default Board;

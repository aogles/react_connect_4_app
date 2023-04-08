import { useState } from "react";

const Board = () => {
  const ROWS = 6;
  const COLUMNS = 7;

  const [clearBoard, setClearBoard] = useState(null);

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

  const handleClick = (column) => {
    console.log(`Clicked column ${column}`);
  };

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, columnIndex) => (
            <div className="cell" key={columnIndex}>
              {cell}
            </div>
          ))}
        </div>
      ))}
      <button onClick={clearBoard}> New Game </button>
    </div>
  );
};

export default Board;

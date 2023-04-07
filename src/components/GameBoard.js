import { useState } from "react";

const Board = () => {
  const ROWS = 6;
  const COLUMNS = 7;

  const createBoard = () => {
    const board = [];
    for (let row = 0; row < ROWS; row++) {
      board[row] = Array(COLUMNS).fill(null);
    }
    return board;
  };

  const [board, setBoard] = useState(() => createBoard());

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
    </div>
  );
};

export default Board;

import React from "react";
import BoardSquare from "./BoardSquare";
import Square from "../pieces/Square";

interface Props {
  onClick: (squares: Square) => void;
  size: number;
  squares: Square[][];
}
const Board = ({ squares, onClick, size }: Props) => {
  const board = [];

  const getSquareShade = (styleName: string): string =>
    styleName === "dark-square" ? "light-square" : "dark-square";

  const renderSquare = (
    row: number,
    col: number,
    squareShade: string,
    square: Square
  ) => {
    return (
      <BoardSquare
        key={row + "" + col}
        square={square}
        shade={squareShade}
        onClick={onClick}
      />
    );
  };

  let rowSquareShade = "light-square";

  for (let row = 0; row < size; row++) {
    let squareShade = rowSquareShade;
    const squareRows = [];

    for (let col = 0; col < size; col++) {
      squareRows.push(renderSquare(row, col, squareShade, squares[row][col]));
      squareShade = getSquareShade(squareShade);
    }
    board.push(
      <div className="board-row" key={row}>
        {squareRows}
      </div>
    );
    rowSquareShade = getSquareShade(rowSquareShade);
  }

  return <div>{board}</div>;
};

export default Board;

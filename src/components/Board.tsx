import React from "react";
import Square from "./Square";
import Piece from "../pieces/Piece";
interface Props {
  pieces: Piece[];
  onClick: (idx: number) => void;
}
const Board = ({ pieces, onClick }: Props) => {
  const board = [];

  const isEven = (i: number): boolean => i % 2 == 0;

  const renderSquare = (i: number, squareShade: string) => (
    <Square
      key={i}
      style={pieces[i] ? pieces[i].style : {}}
      shade={squareShade}
      onClick={() => onClick(i)}
    />
  );

  for (let i = 0; i < 8; i++) {
    const squareRows = [];
    for (let j = 0; j < 8; j++) {
      const squareShade =
        (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))
          ? "light-square"
          : "dark-square";
      squareRows.push(renderSquare(i * 8 + j, squareShade));
    }
    board.push(
      <div className="board-row" key={i}>
        {squareRows}
      </div>
    );
  }

  return <div>{board}</div>;
};

export default Board;

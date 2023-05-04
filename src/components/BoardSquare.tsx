import Square from "../pieces/Square";

interface Props {
  shade: string;
  square: Square;
  onClick: (square: Square) => void;
}

const BoardSquare = ({ square, shade, onClick }: Props) => (
  <button
    className={`square ${shade}`}
    onClick={() => onClick(square)}
    style={square.piece != null ? square.piece.style : {}}
  ></button>
);

export default BoardSquare;

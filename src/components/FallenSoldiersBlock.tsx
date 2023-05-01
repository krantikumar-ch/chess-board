import Piece from "../pieces/Piece";
import Square from "./Square";

interface Props {
  whiteFallenSoldiers: Piece[];
  blackFallenSoldiers: Piece[];
}
const FallenSoldiersBlock = ({
  whiteFallenSoldiers,
  blackFallenSoldiers,
}: Props) => {
  const renderFallenBlockSoldiers = (fallenSoldiers: Piece[]) => {
    return fallenSoldiers.map((piece: Piece, idx: number) =>
      renderSquare(piece, idx)
    );
  };
  const renderSquare = (piece: Piece, idx: number) => (
    <Square key={idx} shade="" style={piece.style} />
  );
  return (
    <>
      <div className="board-row">
        {renderFallenBlockSoldiers(whiteFallenSoldiers)}
      </div>
      <div className="board-row">
        {renderFallenBlockSoldiers(blackFallenSoldiers)}
      </div>
    </>
  );
};

export default FallenSoldiersBlock;

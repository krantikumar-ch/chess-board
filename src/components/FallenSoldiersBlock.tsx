import Piece from "../pieces/Piece";
import Square from "../pieces/Square";
import BoardSquare from "./BoardSquare";

interface Props {
  whiteFallenSoldiers: Square[];
  blackFallenSoldiers: Square[];
}
const FallenSoldiersBlock = ({
  whiteFallenSoldiers,
  blackFallenSoldiers,
}: Props) => {
  const renderFallenBlockSoldiers = (fallenSoldiers: Square[]) => {
    return fallenSoldiers.map((square: Square, idx: number) =>
      renderSquare(square, idx)
    );
  };
  const renderSquare = (square: Square, idx: number) => (
    <BoardSquare key={idx} shade="" square={square} onClick={() => {}} />
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

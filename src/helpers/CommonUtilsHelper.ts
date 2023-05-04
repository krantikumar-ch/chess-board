import Square from "../pieces/Square";

const isKnightKingPossibleMove = (
  srcSquare: Square,
  destSquare: Square,
  possibleMoves: number[][]
): boolean => {
  const { srcRow, srcCol, destRow, destCol } = extractRows(
    srcSquare,
    destSquare
  );

  for (let i = 0; i < possibleMoves.length; i++) {
    const [row, col] = possibleMoves[i];
    if (srcRow + row === destRow && srcCol + col === destCol) {
      return true;
    }
  }
  return false;
};

export const extractRows = (srcSquare: Square, destSquare: Square): any => {
  const srcRow = srcSquare.rowIdx;
  const srcCol = srcSquare.colIdx;
  const destRow = destSquare.rowIdx;
  const destCol = destSquare.colIdx;
  return { srcRow, srcCol, destRow, destCol };
};

export const checkRookBishopPath = (
  dimensions: any,
  squares: Square[][],
  increments: number[]
): boolean => {
  const { srcRow, srcCol, destRow, destCol } = dimensions;
  const [rowIncrement, colIncrement] = increments;
  let row = srcRow + rowIncrement;
  let col = srcCol + colIncrement;
  while (!(row === destRow && col === destCol)) {
    if (squares[row][col].piece.player != -1) {
      return false;
    }
    row = row + rowIncrement;
    col = col + colIncrement;
  }
  return true;
};

export default isKnightKingPossibleMove;

import ChessPieces from "../helpers/ChessPieceNames";
import BlackRook from "./../assets/black rook.svg";
import WhiteRook from "./../assets/white rook.svg";
import Piece from "./Piece";
import Square from "./Square";

export default class Rook extends Piece {
  constructor(player: number) {
    super(ChessPieces.ROOK, player, player == 1 ? WhiteRook : BlackRook);
  }

  isMovePossible(
    srcSquare: Square,
    destSquare: Square,
    squares: Square[][]
  ): boolean {
    const pieceDimensions = this.extractRows(srcSquare, destSquare);
    return (
      this.validMovePosition(pieceDimensions) &&
      this.checkPieceExists(pieceDimensions, squares)
    );
  }

  private validMovePosition(pieceDimensions: any): boolean {
    const { srcRow, srcCol, destRow, destCol } = pieceDimensions;
    return (
      (srcRow === destRow && srcCol !== destCol) ||
      (srcRow !== destRow && srcCol === destCol)
    );
  }

  private checkPieceExists(pieceDimensions: any, squares: Square[][]): boolean {
    const { srcRow, srcCol, destRow, destCol } = pieceDimensions;
    const [rowIncrement, colIncrement] = this.getIncrements(
      srcRow,
      srcCol,
      destRow,
      destCol
    );
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
  }

  private getIncrements(
    srcRow: number,
    srcCol: number,
    destRow: number,
    destCol: number
  ): number[] {
    if (srcRow === destRow) {
      return [0, srcCol > destCol ? -1 : 1];
    }
    return [srcRow > destRow ? -1 : 1, 0];
  }
}

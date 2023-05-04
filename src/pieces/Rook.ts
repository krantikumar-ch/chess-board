import ChessPieces from "../helpers/ChessPieceNames";
import { checkRookBishopPath, extractRows } from "../helpers/CommonUtilsHelper";
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
    const pieceDimensions = extractRows(srcSquare, destSquare);
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
    const increments = this.getIncrements(
      srcRow,
      srcCol,
      destRow,
      destCol
    );
   return checkRookBishopPath(pieceDimensions, squares, increments);
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

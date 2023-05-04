import WhiteBishop from "./../assets/white bishop.svg";
import BlackBishop from "./../assets/black bishop.svg";
import Piece from "./Piece";
import ChessPieces from "../helpers/ChessPieceNames";
import Square from "./Square";
import { checkRookBishopPath, extractRows } from "../helpers/CommonUtilsHelper";

export default class Bishop extends Piece {
  constructor(player: number) {
    super(ChessPieces.BISHOP, player, player == 1 ? WhiteBishop : BlackBishop);
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
      (srcRow > destRow && srcCol > destCol) ||
      (srcRow < destRow && srcCol < destCol) ||
      (srcRow < destRow && srcCol > destCol) ||
      (srcRow > destRow && srcCol < destCol)
    );
  }

  private checkPieceExists(pieceDimensions: any, squares: Square[][]): boolean {
    const { srcRow, srcCol, destRow, destCol } = pieceDimensions;
    const increments = this.getIncrements(srcRow, srcCol, destRow, destCol);
    return checkRookBishopPath(pieceDimensions, squares, increments);
  }

  private getIncrements(
    srcRow: number,
    srcCol: number,
    destRow: number,
    destCol: number
  ): number[] {
    const rowIncrement = srcRow > destRow ? -1 : 1;
    const colIncrement = srcCol > destCol ? -1 : 1;
    return [rowIncrement, colIncrement];
  }
}

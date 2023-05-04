import WhitePawn from "./../assets/white pawn.svg";
import BlackPawn from "./../assets/black pawn.svg";
import Piece from "./Piece";
import ChessPieces from "../helpers/ChessPieceNames";
import Square from "./Square";

export default class Pawn extends Piece {
  initialRow: number;

  constructor(player: number, initialRow: number) {
    super(ChessPieces.PAWN, player, player == 1 ? WhitePawn : BlackPawn);
    this.initialRow = initialRow;
  }

  isMovePossible(
    srcSquare: Square,
    destSquare: Square,
    squares: Square[][]
  ): boolean {
    return this.validate(srcSquare, destSquare, squares);
  }

  private validate(
    srcSquare: Square,
    destSquare: Square,
    squares: Square[][]
  ): boolean {
    const { srcRow, srcCol, destRow, destCol } = this.extractRows(
      srcSquare,
      destSquare
    );
    const incrementNumber = this.getIncrementNumber();

    // pawn should not go back
    const isForwardMove = this.IsForwardMove(srcRow, destRow);

    // pawn should be same column and can move 1 or 2(first time) steps
    const validMove = this.isValidMove(srcRow, srcCol, destRow, destCol);

    // if pawn can move one step diagnoal if destination has oponent
    const opponentMove = this.isOpponentAtEnd(
      destSquare,
      srcRow,
      destRow,
      srcCol,
      destCol,
      incrementNumber
    );

    if (isForwardMove && (validMove || opponentMove)) {
      if (!opponentMove) {
        let row = srcRow + incrementNumber;

        while (this.isValid(row, destRow)) {
          if (squares[row][srcCol].piece.player != -1) {
            return false;
          }
          row = row + incrementNumber;
        }
      }
      return true;
    }

    return false;
  }

  private isValid(row: number, destRow: number): boolean {
    return this.player == 1 ? row >= destRow : row <= destRow;
  }

  private getIncrementNumber(): number {
    return this.player == 1 ? -1 : 1;
  }
  private IsForwardMove(srcRow: number, destRow: number): boolean {
    return this.player == 1 ? srcRow > destRow : srcRow < destRow;
  }

  private isOpponentAtEnd(
    destSquare: Square,
    srcRow: number,
    destRow: number,
    srcCol: number,
    destCol: number,
    increment: number
  ): boolean {
    return (
      this.hasOpponent(destSquare) &&
      srcRow + increment === destRow &&
      (srcCol + 1 === destCol || srcCol - 1 === destCol)
    );
  }

  private hasOpponent(square: Square): boolean {
    const opponent = this.player == 1 ? 2 : 1;
    return square.piece.player === opponent;
  }

  private getMovesCount(rowIdx: number): number {
    return rowIdx === this.initialRow ? 2 : 1;
  }

  private isValidMove(
    srcRow: number,
    srcCol: number,
    destRow: number,
    destCol: number
  ): boolean {
    const moves = this.getMovesCount(srcRow);
    return srcCol === destCol && Math.abs(srcRow - destRow) <= moves;
  }
}

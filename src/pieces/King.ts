import WhiteKing from "./../assets/white king.svg";
import BlackKing from "./../assets/black king.svg";
import Piece from "./Piece";
import ChessPieces from "../helpers/ChessPieceNames";
import Square from "./Square";

export default class King extends Piece {
  possibleMoves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, 1],
    [-1, -1],
    [1, -1],
    [1, 1],
  ];

  constructor(player: number) {
    super(ChessPieces.KING, player, player == 1 ? WhiteKing : BlackKing);
  }

  isMovePossible(
    srcSquare: Square,
    destSquare: Square,
    squares: Square[][]
  ): boolean {
    const { srcRow, srcCol, destRow, destCol } = this.extractRows(
      srcSquare,
      destSquare
    );

    for (let i = 0; i < this.possibleMoves.length; i++) {
      const [row, col] = this.possibleMoves[i];
      if (srcRow + row === destRow && srcCol + col === destCol) {
        return true;
      }
    }
    return false;
  }
}

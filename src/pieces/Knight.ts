import WhiteKnight from "./../assets/white knight.svg";
import BlackKnight from "./../assets/black knight.svg";
import Piece from "./Piece";
import Square from "./Square";
import ChessPieces from "../helpers/ChessPieceNames";

export default class Knight extends Piece {
  possibleMoves = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [2, 1],
    [2, -1],
    [1, 2],
    [1, -2],
  ];

  constructor(player: number) {
    super(ChessPieces.KNIGHT, player, player == 1 ? WhiteKnight : BlackKnight);
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

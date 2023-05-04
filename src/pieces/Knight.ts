import WhiteKnight from "./../assets/white knight.svg";
import BlackKnight from "./../assets/black knight.svg";
import Piece from "./Piece";
import Square from "./Square";
import ChessPieces from "../helpers/ChessPieceNames";
import isKnightKingPossibleMove from "../helpers/CommonUtilsHelper";

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
    return isKnightKingPossibleMove(srcSquare, destSquare, this.possibleMoves);
  }
}

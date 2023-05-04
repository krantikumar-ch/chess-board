import WhiteKing from "./../assets/white king.svg";
import BlackKing from "./../assets/black king.svg";
import Piece from "./Piece";
import ChessPieces from "../helpers/ChessPieceNames";
import Square from "./Square";
import isKnightKingPossibleMove from "../helpers/CommonUtilsHelper";

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
    return isKnightKingPossibleMove(srcSquare, destSquare, this.possibleMoves);
  }
}

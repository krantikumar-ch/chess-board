import WhiteQueen from "./../assets/white queen.svg";
import BlackQueen from "./../assets/black queen.svg";
import Piece from "./Piece";
import Square from "./Square";
import ChessPieces from "../helpers/ChessPieceNames";
import Bishop from "./Bishop";
import Rook from "./Rook";

export default class Queen extends Piece {
  bishop: Bishop;
  rook: Rook;
  
  constructor(player: number) {
    super(ChessPieces.QUEEN, player, player == 1 ? WhiteQueen : BlackQueen);
    this.bishop = new Bishop(player);
    this.rook = new Rook(player);
  }

  isMovePossible(
    srcSquare: Square,
    destSquare: Square,
    squares: Square[][]
  ): boolean {
    return (
      this.bishop.isMovePossible(srcSquare, destSquare, squares) ||
      this.rook.isMovePossible(srcSquare, destSquare, squares)
    );
  }
}
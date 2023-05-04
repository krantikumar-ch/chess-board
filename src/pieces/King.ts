import WhiteKing from "./../assets/white king.svg";
import BlackKing from "./../assets/black king.svg";
import Piece from "./Piece";
import ChessPieces from "../helpers/ChessPieceNames";
import Square from "./Square";

export default class King extends Piece{
   
    constructor(player: number){
        super(ChessPieces.KING, player, player == 1 ? WhiteKing : BlackKing);
    }

    isMovePossible(srcSquare: Square, destSquare: Square, squares: Square[][]): boolean {
        throw new Error("Method not implemented.");
    }

}
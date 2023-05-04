import WhiteQueen from "./../assets/white queen.svg";
import BlackQueen from "./../assets/black queen.svg";
import Piece from "./Piece";
import Square from "./Square";
import ChessPieces from "../helpers/ChessPieceNames";

export default class Queen extends Piece{
    constructor(player:number){
        super(ChessPieces.QUEEN, player, player == 1 ? WhiteQueen : BlackQueen);
    }

    isMovePossible(srcSquare: Square, destSquare: Square, squares: Square[][]): boolean {
        throw new Error("Method not implemented.");
    }
    
    
}
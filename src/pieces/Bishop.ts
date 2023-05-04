import WhiteBishop from "./../assets/white bishop.svg";
import BlackBishop from "./../assets/black bishop.svg";
import Piece from "./Piece";
import ChessPieces from "../helpers/ChessPieceNames";
import Square from "./Square";

export default class Bishop extends Piece{
    
    constructor(player:number){
        super(ChessPieces.BISHOP, player, player == 1 ? WhiteBishop : BlackBishop);
    }
    
    isMovePossible(srcSquare: Square, destSquare: Square, squares: Square[][]): boolean {
        throw new Error("Method not implemented.");
    }
    
    
}
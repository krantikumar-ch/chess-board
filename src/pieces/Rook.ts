import ChessPieces from "../helpers/ChessPieceNames";
import BlackRook from "./../assets/black rook.svg";
import WhiteRook from "./../assets/white rook.svg";
import Piece from "./Piece";
import Square from "./Square";


export default class Rook extends Piece{

    constructor(player:number){
        super(ChessPieces.ROOK, player, player == 1 ? WhiteRook : BlackRook);
    }

    isMovePossible(srcSquare: Square, destSquare: Square, squares: Square[][]): boolean {
        throw new Error("Method not implemented.");
    }
}
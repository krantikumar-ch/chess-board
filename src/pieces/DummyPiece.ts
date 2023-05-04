import ChessPieces from "../helpers/ChessPieceNames";
import Piece from "./Piece";
import Square from "./Square";

export default class DummyPiece extends Piece{
    constructor(){
        super(ChessPieces.DUMMY,-1, '');
    }
    isMovePossible(srcSquare: Square, destSquare: Square, squares: Square[][]): boolean {
        return true;
    }
    
}
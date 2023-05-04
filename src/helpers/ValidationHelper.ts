import Square from "../pieces/Square";
import ChessPieces from "./ChessPieceNames";


export default function validateMove(srcSquare:Square|null, selectedSquare:Square, player:number, setStatus:any) {
    return validatePiece(srcSquare, selectedSquare, setStatus) && validatePlayer(srcSquare, selectedSquare, player, setStatus);
}

const validatePiece = (srcSquare:Square|null, selectedSquare:Square, setStatus:any): boolean => {
    if ( srcSquare == null && selectedSquare.piece.name=== ChessPieces.DUMMY) {
      console.log(srcSquare, selectedSquare)
      setStatus("Wrong selection. Choose valid source and destination again.");
      return false;
    }
    return true;
  };

  const validatePlayer = (srcSquare:Square|null, square: Square, player:number, setStatus:any): boolean => {
    if(srcSquare == null && square.piece.name !== ChessPieces.DUMMY && square.piece.player != player){
        setStatus(`Wrong selection. Choose player ${player} pieces.`);
        return false;
    }
    return true;
  };
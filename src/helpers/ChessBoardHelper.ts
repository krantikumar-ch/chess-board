import Bishop from "../pieces/Bishop";
import DummyPiece from "../pieces/DummyPiece";
import King from "../pieces/King";
import Knight from "../pieces/Knight";
import Pawn from "../pieces/Pawn";
import Piece from "../pieces/Piece";
import Queen from "../pieces/Queen";
import Rook from "../pieces/Rook";
import Square from "../pieces/Square";

export default function initializeChessBoard(size: number): Square[][]{
    let squares:Square[][] = [];
    let rows = size;
    let columns = size;
    
    for(let i=0; i<rows; i++){
        let square:Square[] = [];
        for(let j=0; j<columns; j++){
            let obj = new Square(i, j, new DummyPiece());
            square.push(obj);
        }
        squares.push(square);
    }

    const whiteFirstRow:Square[] = [];
    const blackFirstRow:Square[] = [];
    const lastRow = size - 1;
    let colIdx = 0;
    whiteFirstRow.push(new Square(lastRow, colIdx++, new Rook(1)));
    whiteFirstRow.push(new Square(lastRow, colIdx++,new Knight(1)));
    whiteFirstRow.push(new Square(lastRow, colIdx++,new Bishop(1)));
    whiteFirstRow.push(new Square(lastRow, colIdx++,new Queen(1)));
    whiteFirstRow.push(new Square(lastRow, colIdx++,new King(1)));
    whiteFirstRow.push(new Square(lastRow, colIdx++,new Bishop(1)));
    whiteFirstRow.push(new Square(lastRow, colIdx++,new Knight(1)));
    whiteFirstRow.push(new Square(lastRow, colIdx++,new Rook(1)));
   
    const firstRow = 0;
    colIdx = 0;

    blackFirstRow.push(new Square(firstRow, colIdx++, new Rook(2)));
    blackFirstRow.push(new Square(firstRow, colIdx++, new Knight(2)));
    blackFirstRow.push(new Square(firstRow, colIdx++, new Bishop(2)));
    blackFirstRow.push(new Square(firstRow, colIdx++, new Queen(2)));
    blackFirstRow.push(new Square(firstRow, colIdx++, new King(2)));
    blackFirstRow.push(new Square(firstRow, colIdx++, new Bishop(2)));
    blackFirstRow.push(new Square(firstRow, colIdx++, new Knight(2)));
    blackFirstRow.push(new Square(firstRow, colIdx++, new Rook(2)));

    squares[rows-2] = initializePawns(rows-2, columns, 1);
    squares[1] = initializePawns(1, columns, 2);

    squares[rows-1] = whiteFirstRow;
    squares[0] = blackFirstRow;

    return squares;
}

const initializePawns = (rowIdx:number, colSize:number, player:number):Square[] => {
    const pawnSquares:Square[] = [];
    for(let i=0; i<colSize;i++){
        pawnSquares.push(new Square(rowIdx, i, new Pawn(player, rowIdx)));
    }
    return pawnSquares;
}


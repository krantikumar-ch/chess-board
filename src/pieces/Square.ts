import Piece from "./Piece";

export default class Square {
  rowIdx: number;
  colIdx: number;
  piece: Piece;

  constructor(rowIdx: number, colIdx: number, piece: Piece) {
    this.rowIdx = rowIdx;
    this.colIdx = colIdx;
    this.piece = piece;
  }

  highlightBackGround = (): void => {
    this.piece.highlightBackground();
  };

  clearBackGround = (): void => {
    this.piece.clearBackground();
  };
}

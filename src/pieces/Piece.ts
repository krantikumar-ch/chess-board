import Square from "./Square";

export default abstract class Piece {
  player: number;
  style: Style;
  name: string;

  constructor(name: string, player: number, iconUrl: string) {
    this.name = name;
    this.player = player;
    this.style = {
      backgroundColor: "",
      backgroundImage: "url('" + iconUrl + "')",
    };
  }

  protected abstract isMovePossible(
    srcSquare: Square,
    destSquare: Square,
    squares: Square[][]
  ): boolean;

  validateMove(
    srcSquare: Square,
    destSquare: Square,
    squares: Square[][]
  ): boolean {
    return (
      this.isMovePossible(srcSquare, destSquare, squares) &&
      !this.isSamePlayerAtEnd(destSquare)
    );
  }

  private isSamePlayerAtEnd(destSquare: Square): boolean {
    return destSquare.piece.player === this.player;
  }

  highlightBackground(): void {
    this.style = { ...this.style, backgroundColor: "RGB(111,143,114)" };
  }

  clearBackground(): void {
    this.style = { ...this.style, backgroundColor: "" };
  }
}

interface Style {
  backgroundColor: string;
  backgroundImage: string;
}

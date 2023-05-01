import WhiteKing from "./../assets/white king.svg";
import BlackKing from "./../assets/black king.svg";
import Piece from "./Piece";

export default class King extends Piece{
   
    constructor(player: number){
        super(player, player == 1 ? WhiteKing : BlackKing);
    }

    isMovePossible(src:number, dest:number, isDestEnemyOccupied: boolean):boolean{
        return (src - 9 === dest || 
            src - 8 === dest || 
            src - 7 === dest || 
            src + 1 === dest || 
            src + 9 === dest || 
            src + 8 === dest || 
            src + 7 === dest || 
            src - 1 === dest);
    }

    /**
   * always returns empty array because of one step
   * @return {[]}
   */
    getSrcToDestPath(src: number, dest: number): number[] {
        let path: number[] = [];
        return path;
    }

}
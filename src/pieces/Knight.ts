import WhiteKnight from "./../assets/white knight.svg";
import BlackKnight from "./../assets/black knight.svg";
import Piece from "./Piece";

export default class Knight extends Piece{
    constructor(player:number){
        super(player, player == 1 ? WhiteKnight : BlackKnight);
    }
    isMovePossible(src: number, dest: number, isDestEnemyOccupied: boolean): boolean {
        return (src - 17 === dest || 
            src - 10 === dest || 
            src + 6 === dest || 
            src + 15 === dest || 
            src - 15 === dest || 
            src - 6 === dest || 
            src + 10 === dest || 
            src + 17 === dest);
    }

    /**
   * always returns empty array because of jumping
   * @return {[]}
   */
    getSrcToDestPath(src: number, dest: number): number[] {
        return [];
    }
    
}
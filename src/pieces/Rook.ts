import BlackRook from "./../assets/black rook.svg";
import WhiteRook from "./../assets/white rook.svg";
import Piece from "./Piece";


export default class Rook extends Piece{

    constructor(player:number){
        super(player, player == 1 ? WhiteRook : BlackRook);
    }

    isMovePossible(src: number, dest: number, isDestEnemyOccupied: boolean): boolean {
        let mod = src % 8;
        let diff = 8 - mod;
        return (Math.abs(src - dest) % 8 === 0 || (dest >= (src - mod) && dest < (src + diff)));
    }

    /**
   * get path between src and dest (src and dest exclusive)
   * @param  {num} src  
   * @param  {num} dest 
   * @return {[array]}      
   */

    getSrcToDestPath(src: number, dest: number): number[] {
        let path = [], pathStart, pathEnd, incrementBy;
        if(src > dest){
            pathStart = dest;
            pathEnd = src;
        }
        else{
            pathStart = src;
            pathEnd = dest;
        }
        if(Math.abs(src - dest) % 8 === 0){
            incrementBy = 8;
            pathStart += 8;
        }
        else{
            incrementBy = 1;
            pathStart += 1;
        }

        for(let i = pathStart; i < pathEnd; i+=incrementBy){
            path.push(i);
        }
        return path;
    }
    
}
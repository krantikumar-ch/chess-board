import WhiteBishop from "./../assets/white bishop.svg";
import BlackBishop from "./../assets/black bishop.svg";
import Piece from "./Piece";

export default class Bishop extends Piece{
    constructor(player:number){
        super(player, player == 1 ? WhiteBishop : BlackBishop);
    }
    isMovePossible(src: number, dest: number, isDestEnemyOccupied: boolean): boolean {
        return (Math.abs(src - dest) % 9 === 0 || Math.abs(src - dest) % 7 === 0);
    }
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
        if(Math.abs(src - dest) % 9 === 0){
            incrementBy = 9;
            pathStart += 9;
        }
        else{
            incrementBy = 7;
            pathStart += 7;
        }

        for(let i = pathStart; i < pathEnd; i+=incrementBy){
            path.push(i);
        }
        return path;
    }
    
}
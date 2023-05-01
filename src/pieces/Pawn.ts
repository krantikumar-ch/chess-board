import WhitePawn from "./../assets/white pawn.svg";
import BlackPawn from "./../assets/black pawn.svg";
import Piece from "./Piece";

export default class Pawn extends Piece{
    initialPositions: { 1: number[]; 2: number[]; };
    
    constructor(player:number){
        super(player, player == 1 ? WhitePawn : BlackPawn);
        this.initialPositions ={
            1: [8,9,10,11,12,13,14,15],
            2: [48,49,50,51,52,53,54,55]
        }
    }
    isMovePossible(src: number, dest: number, isDestEnemyOccupied: boolean): boolean {
        if(this.player == 1){
            if((dest === src - 8 && !isDestEnemyOccupied) || (dest === src - 16 && this.initialPositions[1].indexOf(src) !== -1)){
                return true;
              }
              else if(isDestEnemyOccupied && (dest === src - 9 || dest === src - 7)){
                return true;
              }
        }
        else{
            if((dest === src + 8 && !isDestEnemyOccupied) || (dest === src + 16 && this.initialPositions[2].indexOf(src) !== -1)){
                return true;
                }
                else if(isDestEnemyOccupied && (dest === src + 9 || dest === src + 7)){
                return true;
                }
        }
        return false;
    }
    getSrcToDestPath(src: number, dest: number): number[] {
        if(dest === src - 16){
            return [src - 8];
          }
          else if(dest === src + 16){
            return [src + 8];
          }
          return [];
    }
    
}
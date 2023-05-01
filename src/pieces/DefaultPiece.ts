import Piece from "./Piece";

export default class DefaultPeice extends Piece{
    constructor(){
        super(-1, '');
    }
    isMovePossible(src: number, dest: number, isDestEnemyOccupied: boolean): boolean {
        throw new Error("Method not implemented.");
    }
    getSrcToDestPath(src: number, dest: number): number[] {
        throw new Error("Method not implemented.");
    }
    
}
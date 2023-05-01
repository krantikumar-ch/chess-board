export default abstract class Piece{
    player: number;
    style:Style;

    constructor(player:number, iconUrl:string){
        this.player = player;
        this.style = {
            backgroundColor:'',
            backgroundImage:"url('"+iconUrl+"')"
        }
    }

    abstract isMovePossible(src:number, dest:number, isDestEnemyOccupied: boolean):boolean;
    abstract getSrcToDestPath(src:number, dest:number): number[];
}

interface Style{
    backgroundColor: string,
    backgroundImage: string
}
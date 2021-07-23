
export interface SongListItem{
    cover:string;
    songname:string;
    author:string;
    length:string;
    song:string;

}
export interface State{
    songList:Array<SongListItem>;
    nowIndex:number;
    pauseorstartstatus:boolean;
    currentTime:number;
    playStatusArray:Array<string>;
    nowPlayStatusIndex:number;
    isMoving:number;

}

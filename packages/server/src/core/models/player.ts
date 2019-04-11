import { User } from "./user";
import { noop } from "lodash";

export class Player extends User {
    private _isPlaying: boolean;
    
    _playingCb: (isPlaying: boolean) => void = noop;

    get isPlaying(): boolean {
        return this._isPlaying;
    }

    constructor(id?: string) {
        super(id);
        this._isPlaying = false;
    }

    onPlaying(playingCb: (isPlaying: boolean) => void): void {
        this._playingCb = playingCb.bind(this);
        this.on('playing', this._playingCb);
    }

    public removePlayingListener(): void {
        super.removeListener('active', this._playingCb);
        this._playingCb = noop;
    }

    setPlayingStatus(isPlaying: boolean): void {
        if(this._isPlaying !== isPlaying) {
            this._isPlaying = isPlaying;
            this.emit('playing', isPlaying );
        }
    }
}
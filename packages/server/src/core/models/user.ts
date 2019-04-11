import { EventEmitter } from "events";
import { generateUUID } from "../util/random";
import { noop } from "lodash";

export class User extends EventEmitter {
    private _id: string;
    private _isActive: boolean = false;
    public joinTime: number = -1;
    
     _createCb: (user: User) => void    = noop;
     _activateCb: (user: User) => void  = noop;

    get id(): string {
        return this._id;
    }

    get isActive(): boolean {
        return this._isActive;
    }

    set username(name: string) {
        this._username = name;
    }
    get username(): string {
        return this._username;
    }
    private _username: string = '';

    constructor(
        _userId?: string
    ) {
        super();
        this._id = _userId || generateUUID();
    }

    onCreate(createCb: (user: User) => void): void {
       this._createCb = createCb.bind.bind(this);
       this.on('create', this._createCb);
    }

    onActivate(activateCb: (user: User) => void): void {
        this._activateCb = activateCb.bind(this, this);
        this.on('activate', this._activateCb);
    }

    public activate(): void {
        this._isActive = true;
        this.emit('activate', { isActive: this._isActive });
    }

    public deactivate(): void {
        this._isActive = false;
        this.emit('activate', { isActive: this._isActive });
    }

    public removeActiveListener(): void {
        super.removeListener('active', this._activateCb);
        this._activateCb = noop;
    }
}
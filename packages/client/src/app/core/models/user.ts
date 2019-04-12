
export class User {
    private _id: string;
    private _username: string;

    get id(): string { return this._id; }
    get username(): string { return this._username; }

    constructor(id: string = '', username: string) {
        this._id = id;
        this._username = username;
    }
}
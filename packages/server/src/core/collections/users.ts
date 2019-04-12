import { User } from "../models/user";

export class Users<T extends User> {
    private _users: Map<string, T>;

    get size(): number {
        return this._users.size;
    }

    constructor() {
        this._users = new Map<string, T>();
    }

    hasUser(userId: string): boolean {
        return this._users.has(userId);
    }

    addUser(userId: string, user: T) {
        this._users.set(userId, user);
    }

    getUser(userId: string): T | undefined{
        if(this.hasUser(userId)) {
            return this._users.get(userId);
        }
        return undefined;
    }

    getAllUsers(): T[] {
        const users = Array.from(this._users.values()).map(user => user.toJSON());
        return users;
    }

    removeUser(userId: string): T | undefined {
        let user = undefined;
        if(this.hasUser(userId)) {
            user = this.getUser(userId);
            this._users.delete(userId);
        }
        return user;
    }

}
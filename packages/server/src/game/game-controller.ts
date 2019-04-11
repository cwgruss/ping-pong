import { User } from "../core/models/user";
import { Server, Socket } from "socket.io";
import { UserEvent } from "./events";

export interface GameControllerSchema {
    timeoutInterval: number;
}

const defaultOpts: GameControllerSchema = {
    timeoutInterval: 30
};

export class GameEngine {
    // private _connectedPlayers: Users<User>;
    public options: GameControllerSchema;

    constructor(private io: Server, options: GameControllerSchema) {
        this.options = Object.assign(defaultOpts, options);
        this.io.on('connection', this.onPlayerConnected.bind(this));
    }


    start(): void {
        console.info(`========= game engine start ========`);
        // users.forEach((usr: User) => {
        //    usr.onActivate(() => {
        //        this._connectedPlayers.addUser(usr.id, usr);
        //        console.log(`${usr.username} has come online`);
        //    });
        // });
        // users.forEach((usr: User) => usr.activate());
        // console.log(`${this._connectedPlayers.size} have joined the game`);
    }

    public connectUser(user: User): void {
        // this._connectedPlayers.addUser(user.id, user);
        user.activate();
    }

    onPlayerConnected(socket: Socket): void {
        // this.resetIdleTimeout(socket);
        // const playerEvent = new UserEvent(socket.id, newUser.id, newUser.joinTime);
        // socket.emit('join', { username: newUser.username, ...playerEvent, ...newUser});

        // socket.on('disconnect', this.onPlayerDisconnect.bind(this, socket, newUser));

        // this._connectedPlayers.addUser(newUser.id, newUser);
        // console.log(`size: ${this._connectedPlayers.size}`);
    }
    
    onPlayerDisconnect(socket: Socket, user: User): void {
        const playerEvent = new UserEvent(socket.id, user.id, user.joinTime, (new Date().getTime()));
        console.log(playerEvent);
        console.log(`${user.id} has disconnected`);
        // this._connectedPlayers.removeUser(user.id);   
        // console.log(`size: ${this._connectedPlayers.size}`);
    }

    onPlayerTimeout(socket: Socket): void {
        console.log(`Disconnecting ${socket.id}`);
        
        socket.disconnect();
    }

    resetIdleTimeout(socket: Socket): void {
        if(socket.idleTimeout) {
            clearTimeout(socket.idleTimeout);
        }
        socket.idleTimeout = setTimeout(() => {
            this.onPlayerTimeout(socket);
        }, 15 * 1000);
    }
    
}
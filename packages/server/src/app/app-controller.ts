import { Server, Socket } from 'socket.io';
import { Application } from 'express';
import { noop } from 'lodash';
import UsersController from './users/users.controller';


export interface ServerEngineConfig {
    
}

export class AppController {
    private _onConnectCb: (...args: any) => void = noop;
    private _controllers = [
        new UsersController(),
    ];

    constructor(
        public app: Application,
        public io: Server, 
        public options: any) {
    }

    start(): void {
        console.log(`Starting server`);
        // this.gameEngine.start();
        this._controllers.forEach((controller) => this.app.use('/', controller.router));
    }

     _removeConnectListener(socket: Socket): void {
        socket.off('join', this._onConnectCb);
    }
}
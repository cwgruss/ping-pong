import { Socket } from 'socket.io';

declare module "socket.io" {
    export interface Socket {
        idleTimeout: NodeJS.Timeout;
    }
}
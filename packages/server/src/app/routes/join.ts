import { Request, Response, Application } from "express";
import { Server } from "socket.io";
import { User } from "../../core/models/user";

export function createUser(route: string) {
    return (app: Application, io: Server, partials: any) => {
        app.use(route, (req: Request, res: Response) => {
            const newUser = new User('Carter');
            const { id, username } = newUser;
            const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
            res.send(`${id} has joined as ${username} on ip address ${ip}`);
        });
    }
}

// function onConnect(io: Server, listener: (socket: Socket) => void): void {
//     io.on('connection', listener);
// }

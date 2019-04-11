import { Request, Response, Router } from "express";
import { Users } from "../../core/collections/users";
import { User } from "../../core/models/user";
import { createUser } from "./users";
import { Controller } from "../../app/controller/controller";

class UsersController extends Controller {
    private _connectedUsers: Users<User>;

    constructor() {
        super('/users', Router());        
        this._connectedUsers = new Users<User>();
    }

    initializeRoutes(): void {
        this.router.post(this.path, this._createAUser.bind(this));
        this.router.get(`${this.path}`, this._getAllUsers.bind(this));
        this.router.get(`${this.path}/:id`, this._getUserByUserId.bind(this));
    }

    private _createAUser(request: Request, response: Response): void {
        const body = request.body;
        const { username } = body;
        const user = createUser(username);
        this._connectedUsers.addUser(user.id, user);
        response.send(`${user.id} has joined as ${user.username}`);
    }

    private _getUserByUserId(request: Request, response: Response): void {
        const params = request.params;
        const { id } = params;
        if(this._connectedUsers.hasUser(id)) {
            const user = this._connectedUsers.getUser(id);
            response.send(user);
        }
    }

    private _getAllUsers(request: Request, response: Response): void {
        const users = this._connectedUsers.getAllUsers();
        response.send(users);
    }
}
export default UsersController;
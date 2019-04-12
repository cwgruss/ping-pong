import { User } from "../../core/models/user";

export function createUser(username: string): User { 
    // Save the connected user
    const newUser = new User({ username });
    newUser.username = username;
    newUser.joinTime = (new Date()).getTime();
    return newUser;
}
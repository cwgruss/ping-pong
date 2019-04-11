import { Users } from "./users";
import { User } from "../models/user";


describe('User collection', () => {
    it('should start with a size of 0 users', () => {
        const users = new Users();
        expect(users).toBeDefined();
        expect(users.size).toBe(0);
    });

    it('should be able to add new users', () => {
        const users = new Users();
        const newUser = new User('John');
        const userId = newUser.id;
        users.addUser(userId, newUser);
        expect(users).toBeDefined();
        expect(users.getUser(userId)).toBe(newUser);
        expect(users.size).toBe(1);
    });

    it('should be able to remove existing users', () => {
        const users = new Users();
        const newUser = new User('John');
        const userId = newUser.id;
        users.addUser(userId, newUser);
        users.removeUser(userId);
        expect(users).toBeDefined();
        expect(users.getUser(userId)).toBe(undefined);
        expect(users.size).toBe(0);
    });
});
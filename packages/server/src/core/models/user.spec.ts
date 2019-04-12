import { User } from "./user";
import { noop } from "lodash";

describe('User Class', () => {
    it('should be able to create a new user', () => {
        const user = new User({ userId: '123456'});
        expect(user).toBeDefined();
        expect(user.id).toBe('123456');
    });

    it('should be able to create a new user with a uuid', () => {
        const user = new User({});
        expect(user).toBeDefined();
        expect(user.id).toBeDefined();        
    });

    it('should allow a user to be activated', () => {
        const user = new User({});
        expect(user).toBeDefined();
        user.activate();
        expect(user.isActive).toBe(true);        
    });

    it('should allow removal of event listener on activation', () => {
        const user = new User({username: 'John'});
        user.onActivate((usr: User) => `Activation callback for ${usr.username}`);
        user.removeActiveListener();
        user.activate();
        expect(user).toBeDefined();
        expect(user._activateCb).toBe(noop);
        expect(user.isActive).toBe(true);        
    });

    it('should react to activation', () => {
        const user = new User({ username: '123456'});
        user.onActivate((person: User) => {
            expect(person).toBeDefined();
            expect(person.isActive).toBe(true); 
        });
        user.activate();     
    });

    it('should react to deactivation', () => {
        const user = new User({ username: '123456'});
        user.onActivate((person: User) => {
            expect(person).toBeDefined();
            expect(person.isActive).toBe(false); 
        });

        user.deactivate();     
    });
});
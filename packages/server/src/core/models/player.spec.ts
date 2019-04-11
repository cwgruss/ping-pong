import { Player } from "./player";
import { noop } from "lodash";

describe('Player class', () => {
    it('should be able to create a new player', () => {
        const player = new Player();
        expect(player).toBeDefined();
        expect(player.id).toBeDefined();
        expect(player.isPlaying).toBeFalsy();
    });

    it('should be able to have a status of playing', () => {
        const player = new Player();
        player.onPlaying((status) => {
            expect(status).toBe(true);
        });
        player.setPlayingStatus(true);
        expect(player.isPlaying).toBe(true);
    });

    it('should be able to remove an event listener for playing', () => {
        const player = new Player();
        player.onPlaying((status) => {
            expect(status).toBe(true);
        });
        player.setPlayingStatus(true);
        player.removePlayingListener();
        expect(player.isPlaying).toBe(true);
        expect(player._playingCb).toBe(noop);
    });
});
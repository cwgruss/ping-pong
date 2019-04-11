 
export class UserEvent {
    constructor(
        public socketId: string, 
        public playerId: string, 
        public joinTime: number, 
        public disconnectTime: number = 0) { }
}
import { createUser } from "./routes/join";
import { Application } from "express";
import { Server } from "socket.io";

export const router = (app: Application, io: Server, partials: any) => {
    createUser('/join')(app, io, partials);
};
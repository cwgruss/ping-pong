// lib/app.ts
import  express from "express";
import { AppController } from "./app/app-controller";
import SocketIO from "socket.io";
import { createServer, Server } from "http";
import { router } from "./app/routes";
import bodyParser = require("body-parser");

export class PingPong {
  // Create a new express application instance
  private _app: express.Application;
  private _server: Server;
  private _io: SocketIO.Server;

  constructor() {
    this._app = express();
    this._app.use(bodyParser.json()); // Parse JSON data
    this._server = createServer(this._app).listen(8081);
    this._io = SocketIO().listen(this._server);
    this._listen();
  }

  private _listen(): void {    

    this._app.listen(3000, () => {
      console.log("Example app listening on port 3000!");
      // const gameController = new GameEngine(this._io, {});
      const serverController = new AppController(this._app, this._io, {});
      serverController.start();
    });

    router(this._app, this._io, {});
  }

  getApplication(): express.Application {
    return this._app;
  }

}

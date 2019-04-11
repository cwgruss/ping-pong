import { Router } from "express";

export abstract class Controller {
    private _path: string;
    private _router: Router;

    get path(): string { return this._path; }
    get router(): Router { return this._router; }

    constructor(path: string, router: Router) {
        this._path = path;
        this._router = router;
        this.initializeRoutes();
    }

    abstract initializeRoutes(): void;
}
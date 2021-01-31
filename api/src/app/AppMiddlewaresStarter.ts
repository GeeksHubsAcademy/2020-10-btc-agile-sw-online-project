import {App} from "./App";
import * as express from "express";
const cors = require('cors');

export class AppMiddlewaresStarter {
    private readonly app: App;

    constructor(app: App) {
        if (app === null|| app === undefined)
            throw new Error("Must provided an App instance");

        this.app = app;
    }

    public startMiddlewares(): void {
        this.app.expressApp.use(cors())
        this.app.expressApp.use(express.json());
        this.app.expressApp.use(express.urlencoded({ extended: true }));
    }
}

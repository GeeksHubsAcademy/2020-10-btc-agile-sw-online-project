import {App} from "./App";
import {Controller} from "../controllers/Controller";

export class AppControllerStarter {
    private readonly app: App;
    private readonly controllers: Array<Controller>;

    constructor(app: App, controllers: Array<Controller>) {
        if (app === null|| app === undefined)
            throw new Error("Must provided an App instance");

        if (controllers === null || controllers === undefined)
            throw new Error("Controller property is required");

        if (controllers.length === 0)
            throw new Error("Must provided at least one controller");

        this.app = app;
        this.controllers = controllers;
    }

    public startControllers(): void {
        this.controllers.forEach((controller: Controller) => this.app.expressApp.use('/', controller.router));
    }
}

/*
    PRINCIPIO SINGLE RESPONSIBILITY
    Está clase solo tiene una responsabilidad, inicializar los controladores de la aplicación.

    PRINCIPIO LISKOV SUBSTITUTION
    El método startControllers inicializa las rutas de la aplicación sin tener en cuenta ninguna implementación,
    solo la abstracción de la clase padre BaseController.
 */

import {App} from "./App";
import {BaseController} from "../controllers/BaseController";

export class AppControllerStarter {
    private readonly app: App;
    private readonly controllers: Array<BaseController>;

    constructor(app: App, controllers: Array<BaseController>) {
        if (app === null|| app === undefined)
            throw new Error("Must provided an App instance");

        if (controllers === null || controllers === undefined)
            throw new Error("BaseController property is required");

        if (controllers.length === 0)
            throw new Error("Must provided at least one controller");

        this.app = app;
        this.controllers = controllers;
    }

    public startControllers(): void {
        this.controllers.forEach((controller: BaseController) => this.app.expressApp.use('/', controller.router));
    }
}

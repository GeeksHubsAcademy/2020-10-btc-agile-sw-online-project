/*
    PRINCIPIO SINGLE RESPONSIBILITY
    Está clase solo tiene una responsabilidad, arrancar la aplicación
 */

import {App} from "./App";

export class AppRunner {
    private readonly app: App;

    constructor(app: App) {
        if (app === null|| app === undefined)
            throw new Error("Must provided an App instance");

        this.app = app;
    }

    public run() {
        this.app.expressApp.listen(this.app.port, () => {
            console.log(`App running on the port ${this.app.port}`);
        });
    }
}

import {App} from "./App";
import * as cors from "cors";

export class AppRunner {
    private readonly app: App;

    constructor(app: App) {
        if (app === null|| app === undefined)
            throw new Error("Must provided an App instance");

        this.app = app;
    }

    public run() {
        // TODO --> Refactor Cors
        this.app.expressApp.use(cors());
        this.app.expressApp.listen(this.app.port, () => {
            console.log(`App running on the port ${this.app.port}`);
        });
    }
}

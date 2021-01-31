import * as express from 'express';

export class App {
    public expressApp: express.Application;
    public port: number;

    constructor(port) {
        if (port === null || port === undefined)
            throw new Error("Port property is required");

        if (port <= 0 || port > 49151 )
            throw new Error("Invalid port provided");

        this.expressApp = express();
        this.port = port;
    }
}

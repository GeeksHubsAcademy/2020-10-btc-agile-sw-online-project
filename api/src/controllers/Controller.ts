import * as express from 'express';

export abstract class Controller {
    public path: string;
    public router: express.Router;

    protected constructor(path: string) {
        if (!path)
            throw new Error("Path property is required");

        this.path = path;
        this.router = express.Router();
    }

    abstract initializeRoutes(): void;
}

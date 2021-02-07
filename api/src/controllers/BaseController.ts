/*
    PRINCIPIO OPEN CLOSE
    BaseController representa un controlador, está abierto a extensión ya que existen controladores con diferentes
    funcionalidades, pero es cerrada a modificación porque afectaría a los controladores que la extienden.
 */

import * as express from 'express';

export abstract class BaseController {
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

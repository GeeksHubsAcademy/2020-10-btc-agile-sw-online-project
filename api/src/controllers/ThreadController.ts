import {Controller} from "./Controller";
import * as express from 'express';
import {ThreadDAO} from "../dao/ThreadDAO";

export class ThreadController extends Controller {

    public threadDAO: ThreadDAO;

    constructor() {
        super('/thread');
        this.threadDAO = new ThreadDAO();
        this.initializeRoutes();
    }

    getAllThreads(request: express.Request, response: express.Response) {
        response.send(this.threadDAO.fetchThreads());
    }

    initializeRoutes(): void {
        this.router.get('/thread', this.getAllThreads);
    }
}

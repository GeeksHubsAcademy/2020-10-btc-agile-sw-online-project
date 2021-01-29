import {Controller} from "./Controller";
import * as express from 'express';
import {ThreadDAO} from "../dao/ThreadDAO";

const route: string = '/thread';

export class ThreadController extends Controller {

    public threadDAO: ThreadDAO;

    constructor() {
        super(route);
        this.threadDAO = new ThreadDAO();
        this.initializeRoutes();
    }

    public getAllThreads = async (request: express.Request, response: express.Response) => {
        response.send(await this.threadDAO.fetchThreads());
    }

    public initializeRoutes(): void {
        this.router.get(`${route}/list`, this.getAllThreads);
    }
}

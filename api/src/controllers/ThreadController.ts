import {BaseController} from "./BaseController";
import * as express from 'express';
import {ThreadDAO} from "../dao/ThreadDAO";
import {ThreadDTO} from "../dto/ThreadDTO";
import {ThreadMapper} from "../mappers/ThreadMapper";

const route: string = '/thread';

export class ThreadController extends BaseController {

    public threadDAO: ThreadDAO;

    constructor() {
        super(route);
        this.threadDAO = new ThreadDAO();
        this.initializeRoutes();
    }

    public fetchThreads = async (request: express.Request, response: express.Response) => {
        response.send(await this.threadDAO.fetchThreads());
    }

    public addThread = async (request: express.Request, response: express.Response) => {
        const newThread: ThreadDTO = await ThreadMapper.fromModel({...request.body});
        response.json(await this.threadDAO.addThread(newThread));
    }

    public deleteThread = async (request: express.Request, response: express.Response) => {
        const {id} = request.body;
        await this.threadDAO.deleteThread(id);
        response.status(200).send();
    }

    public initializeRoutes(): void {
        this.router.get(`${route}/list`, this.fetchThreads);
        this.router.post(route, this.addThread);
        this.router.delete(route, this.deleteThread);
    }
}

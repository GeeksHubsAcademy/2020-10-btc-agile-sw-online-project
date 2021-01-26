import {Controller} from "./Controller";
import {Connection} from "typeorm/connection/Connection";
import {connectToDB} from "../db/CreateConnection";
import {Thread} from "../dto/Thread";
import * as express from 'express';

export class ThreadController extends Controller {

    constructor() {
        super('/thread');
        this.initializeRoutes();
    }

    async getAllThreads(request: express.Request, response: express.Response) {
        const connection: Connection = await connectToDB();
        const threads = await connection
            .createQueryBuilder()
            .select("thread")
            .from(Thread, "thread")
            .getMany();

        response.send(threads);
    }

    initializeRoutes(): void {
        this.router.get('/thread', this.getAllThreads);
    }
}

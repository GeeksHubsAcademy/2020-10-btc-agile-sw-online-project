import {Thread} from "./DTO/Thread";
import {Comment} from "./DTO/Comment";
import * as express from 'express';
const cors = require("cors");
const ThreadRoutes = require("./endpoints/thread/ThreadRoutes");

import {connectToDB} from "./db/CreateConnection";
import {Connection} from "typeorm/connection/Connection";
import {THREAD_BASE} from "./endpoints/thread/url";

const PORT = 9111;
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.use(THREAD_BASE, ThreadRoutes);

app.listen(PORT, async () => {
    console.log(`Server running on => http://localhost:${PORT}`);

    // const connection: Connection = await connectToDB();
    // const threads = await connection
    //     .createQueryBuilder()
    //     .select("thread")
    //     .from(Thread, "thread")
    //     .getMany();
    //
    // console.log(threads);
    //
    // const comments = await connection
    //     .createQueryBuilder()
    //     .select("comment")
    //     .from(Comment, "comment")
    //     .getMany();
    //
    // console.log(comments);
})

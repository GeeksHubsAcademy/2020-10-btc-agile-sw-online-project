import {createConnection} from "typeorm";
import {Thread} from "../DTO/Thread";
import {Comment} from "../DTO/Comment";
import {Connection} from "typeorm/connection/Connection";

export const connectToDB = async (): Promise<Connection> => {
    return await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: "secret",
        database: "forum",
        entities: [Thread, Comment]
    });
};

import {createConnection} from "typeorm";
import {ThreadDTO} from "../dto/ThreadDTO";
import {CommentDTO} from "../dto/CommentDTO";
import {Connection} from "typeorm/connection/Connection";

export class ConnectionManager {
    public static connection: Connection;

    private constructor() {}

    public static async getConnection(): Promise<Connection> {
        if (!this.connection)
            await this.connect();

        return this.connection;
    }

    private static async connect() {
        this.connection = await createConnection({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: "secret",
            database: "forum",
            entities: [ThreadDTO, CommentDTO]
        });
    }
}

import {createConnection} from "typeorm";
import {ThreadDTO} from "../dto/ThreadDTO";
import {CommentDTO} from "../dto/CommentDTO";
import {Connection} from "typeorm/connection/Connection";

export class ConnectionManager {
    private static instance: ConnectionManager;
    private connection: Connection;

    private constructor() {}

    public static getInstance(): ConnectionManager {
        if (!ConnectionManager.instance)
            ConnectionManager.instance = new ConnectionManager();

        return ConnectionManager.instance;
    }

    public getConnection(): Connection {
        return this.connection;
    }

    public async connect() {
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

    public async disconnect(){
        if (!this.connection)
            throw new Error("Connection is not established");

        await this.connection.close();
    }
}

/*
    PRINCIPIO SINGLE RESPONSIBILITY
    La única funcionalidad de ConnectionManager es gestionar la conexión con la base de datos
 */

import {createConnection} from "typeorm";
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
        this.connection = await createConnection('dev');
    }
}

import {ConnectionManager} from "../db/ConnectionManager";
import {Connection} from "typeorm/connection/Connection";

export abstract class BaseDAO {
    public async getConnection(): Promise<Connection> {
        return await ConnectionManager.getConnection();
    }
}

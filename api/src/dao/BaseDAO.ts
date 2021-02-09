/*
    PRINCIPIO OPEN CLOSE
    BaseDAO representa el acceso a la base de datos, cada Dao tendrá sus propias consultas por lo que BaseDAO es
    abierto a extensión y cerrado a modificación debido a que establece la forma de conectarse con la base de datos.
 */

import {ConnectionManager} from "../db/ConnectionManager";
import {Connection} from "typeorm/connection/Connection";

export abstract class BaseDAO {
    public async getConnection(): Promise<Connection> {
        return await ConnectionManager.getConnection();
    }
}

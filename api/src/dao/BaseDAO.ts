import {ConnectionManager} from "../db/ConnectionManager";

export abstract class BaseDAO {
    protected getConnectionManager(): ConnectionManager {
        return ConnectionManager.getInstance();
    }
}

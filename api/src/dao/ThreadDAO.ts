import {BaseDAO} from "./BaseDAO";
import {ThreadDTO} from "../dto/ThreadDTO";

export class ThreadDAO extends BaseDAO {
    constructor() {
        super();
    }

    async fetchThreads(): Promise<Array<ThreadDTO>> {
        await this.getConnectionManager().connect();

        const threads: Array<ThreadDTO> =
            await this.getConnectionManager()
                .getConnection()
                .createQueryBuilder()
                .select("thread")
                .from(ThreadDTO, "thread")
                .getMany();

        // await this.getConnectionManager().disconnect();

        return threads;
    }
}

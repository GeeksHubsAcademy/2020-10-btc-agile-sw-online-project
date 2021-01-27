import {BaseDAO} from "./BaseDAO";
import {ThreadDTO} from "../dto/ThreadDTO";

export class ThreadDAO extends BaseDAO {

    async fetchThreads(): Promise<Array<ThreadDTO>> {
        const connection = await this.getConnection();

        return await connection
                .createQueryBuilder()
                .select("thread")
                .from(ThreadDTO, "thread")
                .getMany();
    }
}

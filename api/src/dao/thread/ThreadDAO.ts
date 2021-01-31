import {BaseDAO} from "../BaseDAO";
import {ThreadDTO} from "../../dto/ThreadDTO";
import {DeleteResult} from "typeorm";

export class ThreadDAO extends BaseDAO {

    public async fetchThreads(): Promise<Array<ThreadDTO>> {
        const connection = await this.getConnection();

        return await connection
                .createQueryBuilder()
                .select("thread")
                .from(ThreadDTO, "thread")
                .getMany();
    }

    public async addThread(newThread: ThreadDTO): Promise<ThreadDTO> {
        const connection = await this.getConnection();

        return await connection
            .getRepository(ThreadDTO)
            .save(newThread);
    }

    public async deleteThread(threadId: number): Promise<DeleteResult> {
        const connection = await this.getConnection();

        return await connection
            .createQueryBuilder()
            .delete()
            .from(ThreadDTO)
            .where(`id = ${threadId}`)
            .execute();
    }
}

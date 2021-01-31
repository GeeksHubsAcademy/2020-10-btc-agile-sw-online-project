import {ConnectionManager} from "../../db/ConnectionManager";
import {ThreadModel} from "../../models/ThreadModel";
import {ThreadDTO} from "../../dto/ThreadDTO";

export class ThreadMapper {
    public static async fromModel(threadModel: ThreadModel): Promise<ThreadDTO> {
        const {
            description,
            title,
            author
        } = threadModel;

        const connection = await ConnectionManager.getConnection();

        return connection
            .getRepository(ThreadDTO)
            .create({
                author,
                date: new Date(),
                description,
                title
            });
    }
}

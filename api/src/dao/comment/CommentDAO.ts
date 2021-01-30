import {BaseDAO} from "../BaseDAO";
import {CommentDTO} from "../../dto/CommentDTO";
import {DeleteResult} from "typeorm";

export class CommentDAO extends BaseDAO {
    public async fetchComments (threadId: number): Promise<Array<CommentDTO>> {
        const connection = await this.getConnection();

        return await connection
            .createQueryBuilder()
            .select("comment")
            .from(CommentDTO, "comment")
            .where(`threadId = ${threadId}`)
            .getMany();
    }

    public async addComment(comment: CommentDTO): Promise<CommentDTO> {
        const connection = await this.getConnection();

        return await connection
            .getRepository(CommentDTO)
            .save(comment);
    }

    public async deleteComment(commentId: number): Promise<DeleteResult> {
        const connection = await this.getConnection();

        return await connection
            .createQueryBuilder()
            .delete()
            .from(CommentDTO)
            .where(`id = ${commentId}`)
            .execute();
    }
}

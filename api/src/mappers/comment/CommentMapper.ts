/*
    PRINCIPIO SINGLE RESPONSIBILITY
    Solo posee una funcionalidad, generar una instance del DTO a partir de la entidad de domino
 */

import {CommentDTO} from "../../dto/CommentDTO";
import {CommentModel} from "../../models/CommentModel";
import {ConnectionManager} from "../../db/ConnectionManager";

export class CommentMapper {
    public static async fromModel(comment: CommentModel): Promise<CommentDTO> {
        const {
            text,
            author,
            threadId
        } = comment;

        const connection = await ConnectionManager.getConnection();

        return connection
            .getRepository(CommentDTO)
            .create({
                text,
                date: new Date(),
                author,
                thread : {
                    id: threadId
                }
            });
    }
}

import {CommentModel} from "../../models/CommentModel";
import {CommentMapper} from "../CommentMapper";
import {CommentDTO} from "../../dto/CommentDTO";

describe('CommentMapper tests', () => {
    it('should return CommentDTO when create from Model', () => {
        const commentModel: CommentModel = {
            text: "Text",
            author: "Elías",
            threadId: 1
        };

        CommentMapper.fromModel(commentModel)
            .then(comment => expect(comment).toBeInstanceOf(CommentDTO))
    })
})

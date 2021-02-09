import {CommentDAO} from "./CommentDAO";
import {CommentDTO} from "../../dto/CommentDTO";
import {CommentMapper} from "../../mappers/comment/CommentMapper";
import {ThreadDAO} from "../thread/ThreadDAO";
import {ThreadDTO} from "../../dto/ThreadDTO";
import {ThreadMapper} from "../../mappers/thread/ThreadMapper";

describe('CommentDAO tests', () => {
    let commentDAO: CommentDAO;
    let threadDAO: ThreadDAO;

    beforeAll(() => {
        commentDAO = new CommentDAO();
        threadDAO = new ThreadDAO();
    });

    it('should return all comments of specific thread in the database', async () => {
        const comments: Array<CommentDTO> = await commentDAO.fetchComments(3);
        expect(comments.length).toBeGreaterThan(0);
    });

    it('should be able to create new comment into thread', async () => {
        const currentComments: Array<CommentDTO> = await commentDAO.fetchComments(3);

        const commentDTO: CommentDTO = await CommentMapper.fromModel({
            text: "This is a testing comment into thread with id 3",
            author: "Author of new testing comment",
            threadId: 3
        });

        commentDAO.addComment(commentDTO)
            .then(() => {
                commentDAO.fetchComments(3)
                    .then(threads => expect(threads).toHaveLength(currentComments.length + 1));
            });
    });

    it('should be able to delete comment from specific thread', async () => {
        const threadDTO: ThreadDTO = await ThreadMapper.fromModel({
            author: "Testing thread",
            description: "Testing thread",
            title: "Testing thread"
        });

        threadDAO.addThread(threadDTO)
            .then(async (newThead) => {
                const commentDTO: CommentDTO = await CommentMapper.fromModel({
                    text: "Testing comment to delete",
                    author: "Author of new testing comment",
                    threadId: newThead.id
                });

                const newComment: CommentDTO = await commentDAO.addComment(commentDTO);

                const threadComments: Array<CommentDTO> = await commentDAO.fetchComments(newThead.id);

                commentDAO.deleteComment(newComment.id)
                    .then(async () => {
                        const threadCommentsAfterDelete: Array<CommentDTO> = await commentDAO.fetchComments(newThead.id);
                        expect(threadComments).toEqual(1);
                        expect(threadCommentsAfterDelete).toEqual(0);
                    })
            });
    });
});

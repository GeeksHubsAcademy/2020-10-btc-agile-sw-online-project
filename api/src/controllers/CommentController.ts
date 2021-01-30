import {BaseController} from "./BaseController";
import {CommentDAO} from "../dao/CommentDAO";
import * as express from "express";
import {CommentMapper} from "../mappers/CommentMapper";
import {CommentDTO} from "../dto/CommentDTO";

const route: string = '/comment';

export class CommentController extends BaseController {

    private commentDAO: CommentDAO;

    constructor() {
        super(route);
        this.commentDAO = new CommentDAO();
        this.initializeRoutes();
    }

    public fetchComments = async (request: express.Request, response: express.Response) => {
        const {threadId} = request.body;
        response.send(await this.commentDAO.fetchComments(threadId));
    }

    public addComment = async (request: express.Request, response: express.Response) => {
        const newComment: CommentDTO = await CommentMapper.fromModel({...request.body});
        response.json(await this.commentDAO.addComment(newComment));
    }

    public deleteComment = async (request: express.Request, response: express.Response) => {
        const {id} = request.body;
        await this.commentDAO.deleteComment(id)
        response.status(200).send();
    }

    initializeRoutes(): void {
        this.router.post(`${route}/list`, this.fetchComments);
        this.router.post(route, this.addComment);
        this.router.delete(`${route}/delete`, this.deleteComment);
    }
}

import {FunctionComponent, useEffect} from "react";
import useFetchComments from "../task/UseFetchComments";
import CommentListView from "./CommentListView";
import {FetchCommentsRequest} from "../task/FetchCommentsRequest";
import useDeleteComment from "../task/UseDeleteComment";
import {DeleteCommentRequest} from "../task/DeleteCommentRequest";
import {toast} from "react-toastify";
import useAddComment from "../task/UseAddComment";
import {AddCommentRequest} from "../task/AddCommentRequest";

interface CommentListDataContainerProps {
    id: string;
}

const CommentListDataContainer: FunctionComponent<CommentListDataContainerProps> = (
    {
        id
    }
) => {
    const fetchCommentRequest: FetchCommentsRequest = {
        threadId: id
    }

    const {
        isLoading: fetchCommentsLoading,
        data: comments,
        isError: commentsError
    } = useFetchComments(fetchCommentRequest);

    const {
        mutate: deleteComment,
        isLoading: deleteCommentLoading,
        status: deleteCommentStatus
    } = useDeleteComment();

    const {
        mutate: addComment,
        isLoading: addCommentLoading,
        status: addCommentStatus
    } = useAddComment();

    const handleDeleteComment = (deleteRequest: DeleteCommentRequest): void => deleteComment(deleteRequest);
    const handleAddComment = (addRequest: AddCommentRequest): void => addComment(addRequest);

    const isError = (): boolean => ( commentsError || deleteCommentStatus === 'error' || addCommentStatus === 'error');
    const isLoading = (): boolean => ( fetchCommentsLoading || deleteCommentLoading || addCommentLoading);

    useEffect(() => {
        if (addCommentStatus === 'success') {
            toast.success('Comentario añadido correctamente', {delay: 2500});
        } else if (addCommentStatus === 'error') {
            toast.error('Se ha producido un error añadiendo el comentario', {delay: 2500});
        }
    });

    useEffect(() => {
        if (deleteCommentStatus === 'success') {
            toast.success('Comentario eliminado correctamente', {delay: 2500});
        } else if (deleteCommentStatus === 'error') {
            toast.error('Se ha producido un error eliminando el comentario', {delay: 2500});
        }
    }, [deleteCommentStatus])

    return (
        <CommentListView
            threadId={id}
            comments={comments?.data ?? []}
            handleDeleteComment={handleDeleteComment}
            handleAddComment={handleAddComment}
            loading={isLoading()}
            error={isError()}
        />
    );
};

export default CommentListDataContainer;

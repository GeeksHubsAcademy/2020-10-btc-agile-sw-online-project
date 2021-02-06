import {axiosRequest} from "../../../task/axios";
import {useMutation} from "react-query";
import {DeleteCommentRequest} from "./DeleteCommentRequest";
import {DELETE_COMMENT} from "../../../task/endpoints";

const useDeleteComment = () => {
    return useMutation(async (deleteCommentRequest: DeleteCommentRequest) => {
        axiosRequest.delete(DELETE_COMMENT, {
            data: deleteCommentRequest
        });
    })
}

export default useDeleteComment;

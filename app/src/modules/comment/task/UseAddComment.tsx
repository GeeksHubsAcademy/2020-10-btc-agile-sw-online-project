/*
    PRINCIPIO SINGLE RESPONSIBILITY
    Hook encargado de realizar una petición para añadir un comentario.
 */

import {useMutation} from "react-query";
import {AddCommentRequest} from "./AddCommentRequest";
import {axiosRequest} from "../../../task/axios";
import {ADD_COMMENT} from "../../../task/endpoints";

const useAddComment = () => {
    return useMutation(async (addCommentRequest: AddCommentRequest) => {
        axiosRequest.post(ADD_COMMENT, addCommentRequest)
    });
}

export default useAddComment;

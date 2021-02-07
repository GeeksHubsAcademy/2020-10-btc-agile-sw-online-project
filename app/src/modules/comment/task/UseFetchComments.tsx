/*
    PRINCIPIO SINGLE RESPONSIBILITY
    Hook encargado de realizar una petición para obtener los comentarios de un hilo.
 */

import {useQuery} from "react-query";
import {axiosRequest} from "../../../task/axios";
import {COMMENT_LIST} from "../../../task/endpoints";
import {Comment} from "../Comment";
import {FetchCommentsRequest} from "./FetchCommentsRequest";

const useFetchComments = (fetchCommentsRequest: FetchCommentsRequest) => {
    return useQuery('fetchComments', async () => ( axiosRequest.post<Array<Comment>>(COMMENT_LIST, fetchCommentsRequest) ) )
}

export default useFetchComments;

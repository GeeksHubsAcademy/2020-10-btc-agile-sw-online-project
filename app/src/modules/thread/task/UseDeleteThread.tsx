/*
    PRINCIPIO SINGLE RESPONSIBILITY
    Hook encargado de realizar una petición para borrar un hilo
 */

import {useMutation} from "react-query";
import {axiosRequest} from "../../../task/axios";
import {DELETE_THREAD} from "../../../task/endpoints";
import {DeleteThreadRequest} from "./DeleteThreadRequest";

const useDeleteThread = () => {
    return useMutation(async (threadData: DeleteThreadRequest) => axiosRequest.delete(DELETE_THREAD, {
        data: threadData
    }));
};

export default useDeleteThread;

/*
    PRINCIPIO SINGLE RESPONSIBILITY
    Hook encargado de realizar una petición para añadir un hilo
 */

import {AddThreadRequest} from "./AddThreadRequest";
import {axiosRequest} from "../../../task/axios";
import {ADD_THREAD} from "../../../task/endpoints";
import {useMutation} from "react-query";

const useAddThread = () => {
    return useMutation(async (threadData: AddThreadRequest) => axiosRequest.post(ADD_THREAD, threadData));
};

export default useAddThread;

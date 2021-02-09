/*
    PRINCIPIO SINGLE RESPONSIBILITY
    Hook encargado de realizar una petición para obtener un listado de hilos
 */

import {axiosRequest} from "../../../task/axios";
import {useQuery} from "react-query";
import {THREAD_LIST} from "../../../task/endpoints";
import {Thread} from "../Thread";

const useFetchThreads = () => {
    return useQuery('fetchThreads', async () => ( axiosRequest.get<Array<Thread>>(THREAD_LIST)) );
};

export default useFetchThreads;

import {FetchThreadsResponse} from "./FetchThreadsResponse";
import {axiosRequest} from "../../../task/axios";
import {useQuery} from "react-query";
import {THREAD_LIST} from "../../../task/endpoints";

const useFetchThreads = () => {
    const { status, data, isLoading } = useQuery('fetchThreads', async () => {
        return axiosRequest.get<{}, FetchThreadsResponse>(THREAD_LIST);
    });

    return {
        status,
        data,
        isLoading
    }
};

export default useFetchThreads;

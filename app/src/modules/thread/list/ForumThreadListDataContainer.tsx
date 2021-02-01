import {FunctionComponent, useEffect} from "react";
import ForumThreadListView from "./ForumThreadListView";
import useFetchThreads from "../task/UseFetchThreads";
import useAddThread from "../task/UseAddThread";
import {AddThreadRequest} from "../task/AddThreadRequest";
import {toast} from "react-toastify";
import useDeleteThread from "../task/UseDeleteThread";
import {DeleteThreadRequest} from "../task/DeleteThreadRequest";

const ForumThreadListDataContainer: FunctionComponent = (
    {

    }
) => {
    const {
        isLoading: fetchThreadsLoading,
        data: threads,
        isError: threadsError
    } = useFetchThreads();

    const {
        mutate: addThread,
        isLoading: addThreadLoading,
        status: addThreadStatus
    } = useAddThread();

    const {
        mutate: deleteThread,
        isLoading: deleteThreadLoading,
        status: deleteThreadStatus
    } = useDeleteThread();

    const handleAddThread = (threadData: AddThreadRequest): void => addThread(threadData);
    const handleDeleteThread = (threadData: DeleteThreadRequest): void => deleteThread(threadData);
    const isError = (): boolean => ( threadsError || addThreadStatus === 'error' || deleteThreadStatus === 'error' )

    useEffect(() => {
        if (addThreadStatus === 'success') {
            toast.success('Hilo creado correctamente', {delay: 2500});
        } else if (addThreadStatus === 'error') {
            toast.error('Se ha producido un error creando el hilo', {delay: 2500});
        }
    }, [addThreadStatus]);

    useEffect(() => {
        if (deleteThreadStatus === 'success') {
            toast.success('Hilo eliminado correctamente', {delay: 2500});
        } else if (deleteThreadStatus === 'error') {
            toast.error('Se ha producido un error eliminando el hilo', {delay: 2500});
        }
    }, [deleteThreadStatus])

    return (
        <ForumThreadListView
            threads={threads?.data ?? []}
            loading={fetchThreadsLoading || addThreadLoading || deleteThreadLoading}
            handleAddThread={handleAddThread}
            handleDeleteThread={handleDeleteThread}
            error={isError()}
        />
    );
};

export default ForumThreadListDataContainer;

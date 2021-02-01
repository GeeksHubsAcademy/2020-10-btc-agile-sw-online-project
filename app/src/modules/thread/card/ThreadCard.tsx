import {FunctionComponent, useState} from "react";
import "./thread-card.scss";
import {useHistory} from "react-router";
import {RouteGenerator} from "../../../routing/RouteGenerator";
import {ROUTE_THREAD_DETAIL} from "../../../routing/Routes";
import {Thread} from "../Thread";
import COButton from "../../../components/button/COButton";
import {DeleteThreadRequest} from "../task/DeleteThreadRequest";
import ConfirmActionModal from "../../../components/modal/ConfirmActionModal";

interface ThreadCardProps {
    thread: Thread;
    handleDeleteThread: (threadData: DeleteThreadRequest) => void;
}

const ThreadCard: FunctionComponent<ThreadCardProps> = (
    {
        thread,
        handleDeleteThread
    }
) => {
    const history = useHistory();

    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const handleOpenDeleteModal = (): void => setShowDeleteModal(true);
    const handleCloseDeleteModal = (): void => setShowDeleteModal(false);

    const handleOnThreadClick = (id: string): void => {
        const routeGenerator: RouteGenerator = new RouteGenerator();
        const route: string = routeGenerator.generate(ROUTE_THREAD_DETAIL, {id});
        history.push(route);
    }

    return (
        <>
            <div className={"thread-card-container"}>
                <img src={"bonfire.png"}/>

                <div className={"thread__info"}>
                    <div className={"thread-info__title"}>
                        <h5>{thread.title}</h5>
                        <div className="thread-info-title__actions">
                            <COButton
                                text={"Ir al hilo"}
                                onClick={() => handleOnThreadClick(thread.id.toString())}
                            />
                            <COButton
                                text={"Borrar"}
                                variant={"danger"}
                                onClick={() => handleOpenDeleteModal()}
                            />
                        </div>
                    </div>
                    <span>Creado por: {thread.author}</span>
                    <p className={"description"}>
                        {thread.description}
                    </p>
                </div>
            </div>
            <ConfirmActionModal
                text={"¿Estás seguro de que quieres eliminar el hilo?"}
                onConfirm={() => {
                    handleDeleteThread({threadId: thread.id});
                    handleCloseDeleteModal();
                }}
                onClose={handleCloseDeleteModal}
                show={showDeleteModal}
            />
        </>
    );
};

export default ThreadCard;

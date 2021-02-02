import {FunctionComponent, useState} from "react";
import {Col, Row} from "react-bootstrap";
import "./forum-thread-list-view.scss";
import ThreadCard from "../card/ThreadCard";
import LoadingView from "../../../components/loading/LoadingView";
import {Thread} from "../Thread";
import COButton from "../../../components/button/COButton";
import AddThreadFormModal from "../form/AddThreadFormModal";
import {AddThreadRequest} from "../task/AddThreadRequest";
import {DeleteThreadRequest} from "../task/DeleteThreadRequest";

interface ForumThreadListViewProps {
    threads: Thread[];
    handleAddThread: (threadData: AddThreadRequest) => void;
    handleDeleteThread: (threadData: DeleteThreadRequest) => void;
    loading: boolean;
    error: boolean;
}

const ForumThreadListView: FunctionComponent<ForumThreadListViewProps> = (
    {
        threads,
        handleAddThread,
        handleDeleteThread,
        loading,
        error
    }
) => {
    const [isOpenAddModal, setIsOpenAddModal] = useState<boolean>(false);
    const handleOpenAddModal = (): void => setIsOpenAddModal(true);
    const handleCloseAddModal = (): void => setIsOpenAddModal(false);

    if (error)
        return <h3>Se ha producido un error</h3>;

    if (loading)
        return <LoadingView loading={loading}/>;

    return (
        <>
            <div className={"forum-thread-list-view-container"}>
                <Row>
                    <Col>
                        <div className={"forum-thread-list__header"}>
                            <h3>Hilos</h3>
                            <COButton
                                dataCy={"add-thread-button"}
                                text={"Añadir hilo"}
                                className={"btn btn-primary"}
                                onClick={() => handleOpenAddModal()}
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            {
                                threads.map((thread, index) => (
                                    <ThreadCard
                                        thread={thread}
                                        handleDeleteThread={handleDeleteThread}
                                        key={index}
                                    />
                                ))
                            }
                        </div>
                    </Col>
                </Row>
            </div>
            <AddThreadFormModal
                onSubmit={handleAddThread}
                onClose={() => handleCloseAddModal()}
                show={isOpenAddModal}
            />
        </>
    );
};

export default ForumThreadListView;

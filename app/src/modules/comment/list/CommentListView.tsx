import {FunctionComponent, useState} from "react";
import "./comment-list-view.scss";
import {Comment} from "../Comment";
import LoadingView from "../../../components/loading/LoadingView";
import {Col, Row} from "react-bootstrap";
import CommentCard from "../card/CommentCard";
import COButton from "../../../components/button/COButton";
import {useHistory} from "react-router";
import {DeleteCommentRequest} from "../task/DeleteCommentRequest";
import {AddCommentRequest} from "../task/AddCommentRequest";
import AddCommentFormModal from "../form/AddCommentFormModal";

interface CommentListViewProps {
    threadId: string;
    comments: Array<Comment>;
    handleDeleteComment: (deleteCommentRequest: DeleteCommentRequest) => void;
    handleAddComment: (addCommentRequest: AddCommentRequest) => void;
    loading: boolean;
    error: boolean;
}

const CommentListView: FunctionComponent<CommentListViewProps> = (
    {
        threadId,
        comments,
        handleAddComment,
        handleDeleteComment,
        loading,
        error
    }
) => {
    const history = useHistory();
    const handleGoBack = (): void => history.goBack();

    const [isOpenAddModal, setIsOpenAddModal] = useState<boolean>(false);
    const handleOpenAddModal = (): void => setIsOpenAddModal(true);
    const handleCloseAddModal = (): void => setIsOpenAddModal(false);

    if (error)
        return <h3>Se ha producido un error</h3>;

    if (loading)
        return <LoadingView loading={loading}/>;

    return (
        <>
            <div className={"list-view-container"}>
                <Row>
                    <Col>
                        <div className={"list-view__header"}>
                            <h3>Comentarios</h3>
                            <div className={"comment-list__actions"}>
                                <COButton
                                    text={"Comentar"}
                                    dataCy={"add-comment-button"}
                                    className={"btn btn-primary"}
                                    onClick={handleOpenAddModal}
                                />
                                <COButton
                                    dataCy={"go-back-comment-button"}
                                    text={"Volver"}
                                    className={"btn btn-secondary"}
                                    onClick={() => handleGoBack()}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            {
                                comments.map(comment => (
                                    <CommentCard
                                        key={comment.id}
                                        comment={comment}
                                        handleDeleteComment={handleDeleteComment}
                                    />
                                ))
                            }
                        </div>
                    </Col>
                </Row>
            </div>
            <AddCommentFormModal
                onSubmit={handleAddComment}
                threadId={threadId}
                onClose={() => handleCloseAddModal()}
                show={isOpenAddModal}
            />
        </>
    );
};

export default CommentListView;

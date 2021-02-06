import {FunctionComponent, useState} from "react";
import "./comment-card.scss";
import {Comment} from "../Comment";
import COButton from "../../../components/button/COButton";
import {DeleteCommentRequest} from "../task/DeleteCommentRequest";
import ConfirmActionModal from "../../../components/modal/ConfirmActionModal";
import {DateFormatter} from "../../../utils/date/DateFormatter";

interface CommentCardProps {
    comment: Comment;
    handleDeleteComment: (deleteCommentRequest: DeleteCommentRequest) => void;
}

const CommentCard: FunctionComponent<CommentCardProps> = (
    {
        comment,
        handleDeleteComment
    }
) => {
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const handleOpenDeleteModal = (): void => setShowDeleteModal(true);
    const handleCloseDeleteModal = (): void => setShowDeleteModal(false);

    const date = DateFormatter.toDDMMYYYY(new Date(comment.date));

    return (
        <>
            <div className={"comment-card-container"}>
                <img src={"/soul.png"}/>
                <div className={"comment__content"}>
                    <div className={"comment__header"}>
                        <div style={{display: 'flex', flexFlow: 'row nowrap'}}>
                            <h5>{comment.author}</h5>
                            <span>{date}</span>
                        </div>

                        <COButton
                            dataCy={`delete-comment-button-${comment.id}`}
                            text={"Borrar"}
                            className={"btn btn-danger"}
                            onClick={handleOpenDeleteModal}
                        />
                    </div>
                    <div className={"comment__body"}>
                        <p>{comment.text}</p>
                    </div>
                </div>
            </div>
            <ConfirmActionModal
                text={"¿Estás seguro de que quieres eliminar el comentario?"}
                onConfirm={() => {
                    handleDeleteComment({id: comment.id});
                    handleCloseDeleteModal();
                }}
                onClose={handleCloseDeleteModal}
                show={showDeleteModal}
            />
        </>
    );
};

export default CommentCard;

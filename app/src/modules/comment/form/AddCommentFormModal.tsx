import {FunctionComponent, useState} from "react";
import {AddCommentRequest} from "../task/AddCommentRequest";
import {Modal} from "react-bootstrap";
import InputForm from "../../../components/form/input/InputForm";
import COButton from "../../../components/button/COButton";

interface AddCommentFormModalProps {
    threadId: string;
    onClose: () => void;
    show: boolean;
    onSubmit: (commentData: AddCommentRequest) => void;
}

const AddCommentFormModal: FunctionComponent<AddCommentFormModalProps> = (
    {
        threadId,
        show,
        onClose,
        onSubmit
    }
) => {
    const [author, setAuthor] = useState<string>('');
    const [text, setText] = useState<string>('');

    const handleOnSubmit = () => {
        onSubmit({
            author,
            text,
            threadId
        });
        onClose();
    }

    return (
        <Modal
            show={show}
            onHide={onClose}
            animation={true}
        >
            <Modal.Header>
                <h5 className="modal-title">Nuevo comentario</h5>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <InputForm
                        dataCy={"add-comment-input-text"}
                        label={"Texto"}
                        value={text}
                        onChangeValue={value => setText(value)}
                        placeholder={"Introduzca aquí su comentario"}
                    />

                    <InputForm
                        dataCy={"add-comment-input-author"}
                        label={"Autor"}
                        value={author}
                        onChangeValue={value => setAuthor(value)}
                        placeholder={"Alberto"}
                    />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <COButton
                    dataCy={"add-comment-form-button"}
                    onClick={() => handleOnSubmit()}
                    text={"Crear"}
                    className={"btn btn-primary"}
                />
                <COButton
                    onClick={() => onClose()}
                    className={"btn btn-danger"}
                    text={"Cancelar"}
                />
            </Modal.Footer>
        </Modal>
    );
};

export default AddCommentFormModal;

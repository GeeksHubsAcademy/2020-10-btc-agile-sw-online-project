import {FunctionComponent, useState} from "react";
import {Modal} from "react-bootstrap";
import COButton from "../../../components/button/COButton";
import {AddThreadRequest} from "../task/AddThreadRequest";
import InputForm from "../../../components/form/input/InputForm";
import TextArea from "../../../components/form/textarea/TextArea";

interface AddThreadFormModalProps {
    onClose: () => void;
    show: boolean;
    onSubmit: (threadData: AddThreadRequest) => void;

}

const AddThreadFormModal: FunctionComponent<AddThreadFormModalProps> = (
    {
        show,
        onClose,
        onSubmit
    }
) => {

    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleOnSubmit = () => {
        onSubmit({
            title,
            author,
            description
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
                <h5 className="modal-title">Nuevo hilo</h5>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <InputForm
                        dataCy={"add-thread-input-title"}
                        label={"Título"}
                        value={title}
                        onChangeValue={value => setTitle(value)}
                        placeholder={"Mejores zonas para el pvp"}
                    />

                    <InputForm
                        dataCy={"add-thread-input-author"}
                        label={"Autor"}
                        value={author}
                        onChangeValue={value => setAuthor(value)}
                        placeholder={"Alberto"}
                    />

                    <TextArea
                        dataCy={"add-thread-input-description"}
                        label={"Descripción"}
                        value={description}
                        onChangeValue={value => setDescription(value)}
                        placeholder={"Alberto"}
                    />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <COButton
                    dataCy={"add-thread-form-button"}
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

export default AddThreadFormModal;

import {FunctionComponent} from "react";
import {ModalProps} from "./ModalProps";
import {Modal} from "react-bootstrap";
import COButton from "../button/COButton";

interface ConfirmActionModalProps extends ModalProps {
    text: string;
}

const ConfirmActionModal: FunctionComponent<ConfirmActionModalProps> = (
    {
        text,
        onClose,
        onConfirm,
        show
    }
) => {
    return (
        <Modal
            show={show}
            onHide={onClose}
            animation={true}
        >
            <Modal.Header>
                <h5 className="modal-title">{text}</h5>
            </Modal.Header>
            <Modal.Footer>
                <COButton
                    dataCy={"confirm-modal-accept-button"}
                    onClick={() => onConfirm()}
                    className={"btn btn-primary"}
                    text={"Aceptar"}
                />
                <COButton
                    dataCy={"confirm-modal-cancel-button"}
                    onClick={() => onClose()}
                    className={"btn btn-secondary"}
                    text={"Cancelar"}
                />
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmActionModal;

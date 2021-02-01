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
                    onClick={() => onConfirm()}
                    text={"Aceptar"}
                />
                <COButton
                    onClick={() => onClose()}
                    variant={"secondary"}
                    text={"Cancelar"}
                />
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmActionModal;

import {FC, MouseEvent, useContext} from "react";
import styles from './Modal.module.scss'
import cn from "classnames";
import ModalHeader from "./ModalHeader/ModalHeader";
import ModalContent from "./ModalContent/ModalContent";
import ModalActions from "./ModalActions/ModalActions";
import {enumButton} from "../../enum/enumButton";
import {Button} from "../index";
import ContextModal from "../../tools/ContextStore";
import {useContextStore} from "../../hooks/useContextStore";

export interface ModalProps {
    style?: string;
    content: string;
    titleHeader: string;
    closeButton: boolean;
    onClose: () => void
    onSubmit?: () => void
    onCancel?: () => void
}


const Modal: FC<ModalProps> = ({

                                   style,
                                   content,
                                   titleHeader,
                                   closeButton,
                                   onClose,
                                   onSubmit,
                                   onCancel
                               }) => {
    const handleClose = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <div className={styles.wrapper} onClick={handleClose}>
            <div className={cn(styles.modal, !!style && styles[style])}>
                <ModalHeader closeButton={closeButton} onClick={onClose}>
                    <h2>{titleHeader}</h2>
                </ModalHeader>
                <ModalContent>
                    <p>{content}</p>
                </ModalContent>
                <ModalActions style={!!style ? style : ''}>
                    <Button style={enumButton.SUBMIT} onClick={onSubmit}>Ok</Button>
                    {closeButton ? <></> :
                        <Button onClick={onCancel} style={enumButton.CLOSE}>Cancel</Button>}
                </ModalActions>
            </div>
        </div>
    );
};

export default Modal;

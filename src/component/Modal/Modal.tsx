import {FC, MouseEvent} from "react";
import {ModalProps} from "./Modal.utils";
import styles from './Modal.module.scss'
import cn from "classnames";
import ModalHeader from "./ModalHeader/ModalHeader";
import ModalContent from "./ModalContent/ModalContent";
import ModalActions from "./ModalActions/ModalActions";
import Button from "../../UI/Button/Button";
import {enumButton} from "../../enum/enumButton";

const Modal: FC<ModalProps> = ({

                                   style,
                                   onClick,
                                   content,
                                   titleHeader,
                                   closeButton
                               }) => {
    const handleClose = (e: MouseEvent<HTMLDivElement>): void => {
        if (e.target === e.currentTarget) {
            onClick()
        }
    }

    return (
        <div className={styles.wrapper} onClick={handleClose}>
            <div className={cn(styles.modal, !!style && styles[style])}>
                <ModalHeader closeButton={closeButton} onClick={onClick}>
                    <h2>{titleHeader}</h2>
                </ModalHeader>
                <ModalContent>
                    <p>{content}</p>
                </ModalContent>
                <ModalActions style={!!style ? style : ''}>
                    <Button style={enumButton.submit}><p>Ok</p></Button>
                    {closeButton ? <></> :
                        <Button onClick={onClick} style={enumButton.close}><p>Cancel</p></Button>}
                </ModalActions>
            </div>
        </div>
    );
};

export default Modal;

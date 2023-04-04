import { FC } from "react";
import ModalHeader from "./ModalHeader/ModalHeader";
import ModalContent from "./ModalContent/ModalContent";
import ModalActions from "./ModalActions/ModalActions";
import { Button } from "../index";
import styles from "./Modal.module.scss";

export interface ModalProps {
  style?: string;
  content: string;
  titleHeader: string;
  closeButton: boolean;
  onClose: () => void;
  onSubmit?: () => void;
}

const Modal: FC<ModalProps> = ({
  style,
  content,
  titleHeader,
  closeButton,
  onClose,
  onSubmit,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.modal}>
        <ModalHeader closeButton={closeButton} onClick={onClose}>
          <h2>{titleHeader}</h2>
        </ModalHeader>
        <ModalContent>
          <p>{content}</p>
        </ModalContent>
        <ModalActions style={!!style ? style : ""}>
          <Button type={"primary"} onClick={onSubmit}>
            Ok
          </Button>
          {!closeButton && (
            <Button type={"primary"} danger={true} onClick={onClose}>
              Cancel
            </Button>
          )}
        </ModalActions>
      </div>
    </div>
  );
};

export default Modal;

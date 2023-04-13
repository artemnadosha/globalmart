import { FC } from "react";
import { useModalReducer } from "../../hooks";
import { ModalActions, ModalContent, ModalHeader } from "./UI";
import { Button } from "../index";
import s from "./Modal.module.scss";

export interface ModalProps {
  style?: string;
  content: string;
  titleHeader: string;
  closeButton: boolean;
}

const Modal: FC<ModalProps> = ({
  style,
  content,
  titleHeader,
  closeButton,
}) => {
  const { toggleIsActiveModal, changeResponseModal } = useModalReducer();
  const handleModalClose = () => {
    toggleIsActiveModal(null);
  };

  const handleSubmitModal = () => {
    changeResponseModal();
  };

  return (
    <div className={s.wrapper}>
      <div className={s.overlay} onClick={handleModalClose}></div>
      <div className={s.modal}>
        <ModalHeader closeButton={closeButton} onClick={handleModalClose}>
          <h2>{titleHeader}</h2>
        </ModalHeader>
        <ModalContent>
          <p>{content}</p>
        </ModalContent>
        <ModalActions style={!!style ? style : ""}>
          <Button type={"primary"} onClick={handleSubmitModal}>
            Ok
          </Button>
          {!closeButton && (
            <Button type={"primary"} danger={true} onClick={handleModalClose}>
              Cancel
            </Button>
          )}
        </ModalActions>
      </div>
    </div>
  );
};

export default Modal;

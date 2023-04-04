import { FC } from "react";
import { Modal } from "../../UI";

interface PurchaseConfirmationModalProps {
  onClose: () => void;
  onSubmit?: () => void;
}

const PurchaseConfirmationModal: FC<PurchaseConfirmationModalProps> = ({
  onClose,
  onSubmit,
}) => {
  return (
    <Modal
      content="Are you sure you want to make a purchase?"
      titleHeader="Are you sure?"
      closeButton={false}
      onClose={onClose}
      onSubmit={onSubmit}
    />
  );
};

export default PurchaseConfirmationModal;

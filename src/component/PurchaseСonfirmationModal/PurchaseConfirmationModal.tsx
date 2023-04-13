import { FC } from "react";
import { Modal } from "../../UI";

// interface PurchaseConfirmationModalProps {
//   onClose: () => void;
//   onSubmit?: () => void;
// }

const PurchaseConfirmationModal: FC = () => {
  return (
    <Modal
      content="Are you sure you want to make a purchase?"
      titleHeader="Are you sure?"
      closeButton={false}
    />
  );
};

export default PurchaseConfirmationModal;

import { FC } from "react";
import { Modal } from "../../UI";

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

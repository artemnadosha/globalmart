import {FC} from "react";
import {Modal} from "../../UI";
import {enumStyle} from "../../enum/enumStyle";

interface PurchaseConfirmationModal {
    onClose: () => void
    onSubmit?: () => void
    onCancel?: () => void
}

const PurchaseConfirmationModal: FC<PurchaseConfirmationModal> = ({onClose, onSubmit, onCancel}) => {
    return <Modal content='Are you sure you want to make a purchase?' titleHeader='Are you sure?'
                  closeButton={false} style={enumStyle.DARK} onClose={onClose} onSubmit={onSubmit} onCancel={onCancel}/>
};

export default PurchaseConfirmationModal;

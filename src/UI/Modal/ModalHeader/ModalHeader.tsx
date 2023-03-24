import {FC, PropsWithChildren} from "react";
import cn from "classnames";
import styles from './ModalHeader.module.scss'
import {CloseButtonIcon} from "../../index";

interface ModalHeaderProps extends PropsWithChildren {
    closeButton: boolean;
    style?: string;
    onClick: () => void;
}

const ModalHeader: FC<ModalHeaderProps> = ({children, closeButton, style, onClick}) => {
    return (
        <div className={cn(styles.wrapper, !!style && style)}>
            {children}
            {closeButton ? <CloseButtonIcon onClick={onClick}/> : ''}
        </div>
    );
};

export default ModalHeader;
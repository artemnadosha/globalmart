import {FC} from "react";
import {ModalContentProps} from "./ModalContent.utils";
import cn from "classnames";
import styles from './ModalContent.module.scss'
const ModalContent:FC<ModalContentProps> = ({children, style}) => {
    return (
        <div className={cn(styles.wrapper, !!style && style)}>
            {children}
        </div>
    );
};

export default ModalContent;
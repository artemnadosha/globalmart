import {FC} from "react";
import {ModalActionsProps} from "./ModalActions.utils";
import cn from "classnames";
import styles from './ModalActions.module.scss'

const ModalActions:FC<ModalActionsProps> = ({children,style}) => {
    return (
        <div className={cn(styles.wrapper,!!style && styles[style])}>
            {children}
        </div>
    );
};

export default ModalActions;
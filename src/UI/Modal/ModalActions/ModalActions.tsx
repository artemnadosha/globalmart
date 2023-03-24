import {FC, PropsWithChildren} from "react";
import cn from "classnames";
import styles from './ModalActions.module.scss'

interface ModalActionsProps extends PropsWithChildren {
    style?: string;
}

const ModalActions: FC<ModalActionsProps> = ({children, style}) => {
    return (
        <div className={cn(styles.wrapper, !!style && styles[style])}>
            {children}
        </div>
    );
};

export default ModalActions;
import {FC, PropsWithChildren} from "react";
import cn from "classnames";
import styles from './ModalContent.module.scss'

interface ModalContentProps extends PropsWithChildren {
    style?: string;
}

const ModalContent: FC<ModalContentProps> = ({children, style}) => {
    return (
        <div className={cn(styles.wrapper, !!style && style)}>
            {children}
        </div>
    );
};

export default ModalContent;
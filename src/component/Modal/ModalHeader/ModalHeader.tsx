import { FC } from "react";
import {ModalHeaderProps} from "./ModalHeader.utils";
import cn from "classnames";
import styles from './ModalHeader.module.scss'
import CloseButtonIcon from "../../../UI/CloseButtonIcon/CloseButtonIcon";
const ModalHeader:FC<ModalHeaderProps> = ({children,closeButton,style, onClick}) => {
    return (
        <div className={cn(styles.wrapper, !!style && style)}>
            {children}
            {closeButton ? <CloseButtonIcon onClick={onClick}/> : ''}
        </div>
    );
};

export default ModalHeader;
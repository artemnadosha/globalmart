import {FC} from "react";
import styles from "./CloseButtonIcon.module.scss";

interface CloseButtonProps {
    onClick?: () => void;
}

const CloseButtonIcon: FC<CloseButtonProps> = ({onClick}) => {
    return (
        <div onClick={onClick} className={styles.closeContainer}>
            <div className={styles.leftRight}></div>
            <div className={styles.rightLeft}></div>
            <label className={styles.close}>close</label>
        </div>)
};

export default CloseButtonIcon;

import {FC} from "react";
import {ButtonProps} from "./Button.utils";
import styles from './Button.module.scss'
import cn from "classnames";

const Button: FC<ButtonProps> = ({style, onClick, children}) => {
    return (
        <button
            onClick={onClick}
            className={cn(styles.button, !!style && styles[style])}
        >
            {children}
        </button>
    );
};

export default Button;

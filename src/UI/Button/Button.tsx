import { FC, PropsWithChildren } from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';
import { enumButton } from '../../enum/enumButton';

interface ButtonProps extends PropsWithChildren {
    style?: enumButton;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ style, onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className={cn(styles.button, !!style && styles[style])}
        >
            <p>{children}</p>
        </button>

    );
};

export default Button;

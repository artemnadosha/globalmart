import {FC} from "react";
import cn from "classnames";
import {ShoppingCartOutlined} from "@ant-design/icons";
import styles from './IconCart.module.scss'

interface IconBasketProps {
    onClick?: () => void
    activeIcon?: boolean
}

const IconCart: FC<IconBasketProps> = ({activeIcon, onClick}) => {

    return (
        <div className={cn(styles.basket, activeIcon && styles.active)} onClick={onClick}>
            <ShoppingCartOutlined style={{fontSize: '2rem'}}/>
            <p>Cart</p>
        </div>
    );
};

export default IconCart;
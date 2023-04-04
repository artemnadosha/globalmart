import {FC} from "react";
import styles from './IconFavorite.module.scss'
import cn from "classnames";
import {LikeOutlined} from "@ant-design/icons";

interface IconHeartProps {
    onClick?: () => void
    activeIcon?: boolean
}

const IconFavorite: FC<IconHeartProps> = ({activeIcon, onClick}) => {

    return (
        <div className={cn(styles.heart, activeIcon && styles.active)} onClick={onClick}>
            <LikeOutlined style={{fontSize: '2rem'}}/>
            <p>Favorite</p>
        </div>
    );
};

export default IconFavorite;
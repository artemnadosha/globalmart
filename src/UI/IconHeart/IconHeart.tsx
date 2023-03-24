import {FC} from "react";
import styles from './IconHeart.module.scss'
import cn from "classnames";
import CountActions from "../CountActions/CountActions";

interface IconHeartProps {
    withText?: boolean
    countLiked?: number
    onClick?: () => void
    activeIcon?: boolean
}

const IconHeart: FC<IconHeartProps> = ({withText, countLiked, onClick, activeIcon}) => {
    const handleClick = () => {
        !!onClick && onClick()
    }


    return (
        <div className={cn(styles.heart, activeIcon && styles.active)} onClick={handleClick}>
            <svg width="30" height="26" viewBox="0 0 22 18" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M12.3502 17.1302C11.5902 17.8202 10.4202 17.8202 9.66015 17.1202L9.55015 17.0202C4.30015 12.2702 0.870153 9.16017 1.00015 5.28017C1.06015 3.58017 1.93015 1.95017 3.34015 0.990166C5.98015 -0.809834 9.24015 0.0301659 11.0002 2.09017C12.7602 0.0301659 16.0202 -0.819834 18.6602 0.990166C20.0702 1.95017 20.9402 3.58017 21.0002 5.28017C21.1402 9.16017 17.7002 12.2702 12.4502 17.0402L12.3502 17.1302Z"
                      fill="currentColor"/>
            </svg>
            {withText && <p>Liked</p>}
            {!!withText && countLiked &&
				<div className={styles.countPosition}><CountActions count={countLiked}/></div>}
        </div>
    );
};

export default IconHeart;
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';
import styles from './IconStar.module.scss'
import {FC} from "react";

export interface IconStarProps {
    rating: number;
}

const IconStar: FC<IconStarProps> = ({rating}) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (rating >= i + 1) {
            stars.push(<FontAwesomeIcon className={styles.star} icon={faStar} key={i}/>);
        } else if (rating >= i + 0.5) {
            stars.push(<FontAwesomeIcon icon={faStarHalfAlt} key={i}/>);
        } else {
            stars.push(<FontAwesomeIcon icon={faStar} key={i} style={{opacity: 0.3}}/>);
        }
    }

    return <div className={styles.star}>{stars}</div>;
}


export default IconStar;
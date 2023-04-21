import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import s from "./IconStar.module.scss";

export interface IconStarProps {
  rating: number;
}

const IconStar: FC<IconStarProps> = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating >= i + 1) {
      stars.push(<FontAwesomeIcon className={s.star} icon={faStar} key={i} />);
    } else if (rating >= i + 0.5) {
      stars.push(<FontAwesomeIcon icon={faStarHalfAlt} key={i} />);
    } else {
      stars.push(
        <FontAwesomeIcon icon={faStar} key={i} style={{ opacity: 0.3 }} />
      );
    }
  }

  return <div className={s.star}>{stars}</div>;
};

export default IconStar;

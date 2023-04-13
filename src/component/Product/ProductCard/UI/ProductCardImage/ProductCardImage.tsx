import { FC } from "react";
import s from "./ProductCardImage.module.scss";
import { IconStar, Image } from "../../../../../UI";

interface ProductCardImageProps {
  title: string;
  thumbnail: string;
  rating: number;
}

const ProductCardImage: FC<ProductCardImageProps> = ({
  title,
  thumbnail,
  rating,
}) => {
  return (
    <div className={s.imageWrapper}>
      <Image alt={title} src={thumbnail} />
      <div className={s.star}>
        <IconStar rating={rating} />
      </div>
    </div>
  );
};

export default ProductCardImage;

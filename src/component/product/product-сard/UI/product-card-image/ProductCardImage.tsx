import { FC } from "react";
import s from "./ProductCardImage.module.scss";
import { IconStar, Image } from "../../../../../UI";

interface ProductCardImageProps {
  title: string;
  thumbnail: string;
  rating: number;
  maxWidth?: string;
}

const ProductCardImage: FC<ProductCardImageProps> = ({
  title,
  thumbnail,
  rating,
  maxWidth,
}) => {
  return (
    <div className={s.imageWrapper} style={{ maxWidth }}>
      <Image alt={title} src={thumbnail} />
      <div className={s.star}>
        <IconStar rating={rating} />
      </div>
    </div>
  );
};

export default ProductCardImage;

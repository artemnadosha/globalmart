import { FC } from "react";
import s from "./ImageCarousel.module.scss";

interface ImageCarouselProps {
  src: string;
  alt: string;
}

const ImageCarousel: FC<ImageCarouselProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className={s.wrapper} />;
};

export default ImageCarousel;

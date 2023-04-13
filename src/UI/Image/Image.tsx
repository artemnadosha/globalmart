import { FC } from "react";
import { Image as ImageAnt } from "antd";

interface ImageProps {
  src: string;
  alt: string;
}

const Image: FC<ImageProps> = ({ src, alt }) => {
  return (
    <ImageAnt
      width="100%"
      height="100%"
      style={{ objectFit: "cover" }}
      src={src}
      alt={alt}
    />
  );
};

export default Image;

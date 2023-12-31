import { TypeProduct } from "../../../types/TypeProduct";
import { FC, MouseEvent, useState } from "react";
import styles from "./ProductPage.module.scss";
import { Button, IconStar, Image } from "../../../UI";
import cn from "classnames";
import { useCartReducer } from "../../../hooks";

interface ProductInfoProps {
  product: TypeProduct;
}

const ProductInfo: FC<ProductInfoProps> = ({ product }) => {
  const {
    rating,
    brand,
    title,
    thumbnail,
    stock,
    images,
    category,
    description,
  } = product;
  const [headerImage, setHeaderImage] = useState<string>(thumbnail);
  const { cartItems, addProductCart } = useCartReducer();
  const changeHeaderImage = (e: MouseEvent<HTMLImageElement>) => {
    setHeaderImage(e.currentTarget.src);
  };

  const handlerAddProductBasket = () => {
    if (!cartItems?.find((item) => item.id === product.id)) {
      addProductCart(product);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperImages}>
        <div className={styles.wrapperHeaderImage}>
          <Image src={headerImage} alt={title} />
        </div>
        <div className={styles.wrapperSubImages}>
          {images.map((item) => (
            <div key={item} className={styles.wrapperSubImage}>
              <img
                onClick={changeHeaderImage}
                src={item}
                alt={title}
                className={styles.subImage}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.wrapperInfo}>
        <div>
          <div className={styles.wrapperRoute}>
            <p className={cn(styles.route, "verySmall")}>{category}</p> /
            <p className={cn(styles.route, "verySmall")}>{brand}</p>
          </div>
          {!!stock ? (
            <p style={{ color: "green" }}>&#10003;In stock</p>
          ) : (
            <p style={{ color: "red" }}>&#10060;Not available</p>
          )}
          <h2>{title}</h2>
          <div className={styles.wrapperStar}>
            <IconStar rating={rating} />
            {rating}
          </div>
          <div className={styles.wrapperButton}>
            <Button type={"primary"}>Buy Now</Button>
            <Button
              type={"primary"}
              ghost={true}
              onClick={handlerAddProductBasket}
            >
              Add to cart
            </Button>
          </div>
        </div>
        <div className={styles.wrapperDescription}>
          <h4>Description</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

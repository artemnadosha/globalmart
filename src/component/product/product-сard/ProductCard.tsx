import { FC, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TypeProduct } from "../../../types/TypeProduct";
import { Card } from "antd";
import {
  ShoppingCartOutlined,
  ArrowRightOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import {
  handleFindProduct,
  calculatePriceWithoutDiscount,
} from "../../../utils";
import {
  useCartReducer,
  useFavoriteReducer,
  useModalReducer,
} from "../../../hooks";
import { ProductCardImage, ProductMeta } from "./UI";
import s from "./ProductCard.module.scss";

export interface ProductCardProps {
  product: TypeProduct;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { id, price, discountPercentage, rating, brand, title, thumbnail } =
    product;

  const [isInCart, setIsInCart] = useState<boolean>(false);
  const [isInFavorite, setIsInFavorite] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { favoriteItems, addProductFavorite, removeProductFavorite } =
    useFavoriteReducer();
  const { cartItems, addProductCart, removeProductCart } = useCartReducer();
  const { response, productId, toggleIsActiveModal, resetModalValue } =
    useModalReducer();

  useEffect(() => {
    setIsInCart(handleFindProduct({ product: cartItems, id }));
    setIsInFavorite(handleFindProduct({ product: favoriteItems, id }));
  }, [cartItems, favoriteItems, id]);

  const handlerOpenModal = () => toggleIsActiveModal(id);

  const handleSubmitCart = useCallback(() => {
    if (id === productId) {
      addProductCart(product);
      resetModalValue();
    }
  }, [productId, product, id, resetModalValue, addProductCart]);

  useEffect(() => {
    response && handleSubmitCart();
  }, [response, handleSubmitCart]);

  const handleSubmitFavorite = () => addProductFavorite(product);

  const handleRemoveCartItem = () => removeProductCart(id);

  const handleRemoveFavoriteItem = () => removeProductFavorite(id);

  const handleOpenProduct = () => navigate(`${location.pathname}/${id}`);

  return (
    <Card
      className={s.cardWrapper}
      // style={{ width: 230 }}
      cover={
        <ProductCardImage title={title} thumbnail={thumbnail} rating={rating} />
      }
      actions={[
        <LikeOutlined
          onClick={
            isInFavorite ? handleRemoveFavoriteItem : handleSubmitFavorite
          }
          style={isInFavorite ? { color: "red" } : {}}
        />,
        <ShoppingCartOutlined
          onClick={isInCart ? handleRemoveCartItem : handlerOpenModal}
          style={isInCart ? { color: "#1677ff" } : {}}
        />,
        <ArrowRightOutlined onClick={handleOpenProduct} />,
      ]}
    >
      <ProductMeta
        title={title}
        brand={brand}
        price={price}
        priceWithoutDiscount={calculatePriceWithoutDiscount(
          price,
          discountPercentage
        )}
      />
    </Card>
  );
};

export default ProductCard;

import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContextStore } from "../../../../hooks/useContextStore";
import { TypeProduct } from "../../../../types/TypeProduct";
import cn from "classnames";
import PurchaseConfirmationModal from "../../../PurchaseСonfirmationModal/PurchaseConfirmationModal";
import { Card } from "antd";
import {
  ShoppingCartOutlined,
  ArrowRightOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import { IconStar } from "../../../../UI";
import {
  correctionName,
  handleFilterItem,
  handleFindProduct,
  priceWithoutDiscount,
} from "../../../../utils";
import styles from "./ProductCard.module.scss";

export interface ProductCardProps {
  product: TypeProduct;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { id, price, discountPercentage, rating, brand, title, thumbnail } =
    product;
  const { cartItem, favoriteItem, setCartItem, setFavoriteItem } =
    useContextStore();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [activeIconCart, setActiveIconCart] = useState<boolean>(false);
  const [activeIconFavorite, setActiveIconFavorite] = useState<boolean>(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const naturalPrice = Math.ceil(
    priceWithoutDiscount(price, discountPercentage)
  );

  useEffect(() => {
    if (cartItem) {
      setActiveIconCart(handleFindProduct({ product: cartItem, id }));
    }

    if (favoriteItem) {
      setActiveIconFavorite(handleFindProduct({ product: favoriteItem, id }));
    }
  }, [cartItem, favoriteItem, id]);

  const handlerOpenModal = () => {
    setOpenModal(true);
  };
  const handlerCloseModal = () => {
    setOpenModal(false);
  };

  const handlerSubmitBasket = () => {
    handlerCloseModal();
    if (setCartItem) {
      setCartItem((prevState) => [...prevState, product]);
    }
  };

  const handlerRemoveBasketItem = () => {
    if (setCartItem) {
      setCartItem((prevState) => handleFilterItem({ state: prevState, id }));
    }
  };

  const handlerSubmitLiked = () => {
    if (setFavoriteItem) {
      setFavoriteItem((prevState) => [...prevState, product]);
    }
  };

  const handlerRemoveLikedItem = () => {
    if (setFavoriteItem) {
      setFavoriteItem((prevState) =>
        handleFilterItem({ state: prevState, id })
      );
    }
  };

  const handleOpenProduct = () => {
    navigate(`${pathname}/${id}`);
  };

  return (
    <Card
      style={{ width: 230 }}
      cover={
        <div className={styles.imageWrapper}>
          <img className={styles.image} alt={title} src={thumbnail} />
          <div className={styles.star}>
            <IconStar rating={rating} />
          </div>
        </div>
      }
      actions={[
        <LikeOutlined
          onClick={
            activeIconFavorite ? handlerRemoveLikedItem : handlerSubmitLiked
          }
          style={activeIconFavorite ? { color: "red" } : {}}
        />,
        <ShoppingCartOutlined
          onClick={activeIconCart ? handlerRemoveBasketItem : handlerOpenModal}
          style={activeIconCart ? { color: "#1677ff" } : {}}
        />,
        <ArrowRightOutlined onClick={handleOpenProduct} />,
      ]}
    >
      <Meta
        title={correctionName(title)}
        description={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            {brand}
            <div className={styles.priceWrapper}>
              <p className={cn(styles.discount, "verySmall")}>
                ${naturalPrice}
              </p>
              <p>${price}</p>
            </div>
          </div>
        }
      />
      {openModal && (
        <PurchaseConfirmationModal
          onClose={handlerCloseModal}
          onSubmit={handlerSubmitBasket}
        />
      )}
    </Card>
  );
};

export default ProductCard;

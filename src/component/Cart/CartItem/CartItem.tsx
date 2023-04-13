import { Avatar, List, Select } from "antd";
import { FC, useState } from "react";
import { TypeProduct } from "../../../types/TypeProduct";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/const";
import styles from "./CartItem.module.scss";
import { Button } from "../../../UI";
import { correctionName } from "../../../utils";

interface CartItemProps {
  product: TypeProduct;
  removeFromCart: (number: number) => void;
  handleSetCartItemQuantity: (id: number, quantity: number) => void;
}

const CartItem: FC<CartItemProps> = ({
  product,
  removeFromCart,
  handleSetCartItemQuantity,
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const handleChange = (value: number) => {
    setQuantity(value);
    handleSetCartItemQuantity(product.id, value);
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <List.Item className={styles.listItem}>
      <List.Item.Meta
        style={{ alignItems: "center" }}
        avatar={
          <Avatar
            src={product.thumbnail}
            alt={product.title}
            size={100}
            shape={"square"}
          />
        }
        title={
          <Link to={`/${ROUTES.PRODUCTS}/${product.category}/${product.id}`}>
            {product.title}
          </Link>
        }
        description={correctionName(product.category) + " " + product.brand}
      />
      <div className={styles.price}>
        <h4>${product.price * quantity}</h4>
        <Select
          defaultValue={1}
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: 1, label: "Qty: 1" },
            { value: 2, label: "Qty: 2" },
            { value: 3, label: "Qty: 3" },
            { value: 4, label: "Qty: 4" },
          ]}
        />
      </div>
      <Button type="primary" danger={true} ghost={true} onClick={handleRemove}>
        Remove
      </Button>
    </List.Item>
  );
};

export default CartItem;

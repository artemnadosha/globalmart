import { FC } from "react";
import { Button, Form } from "../../../UI";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../utils/const";
import { FormTitle } from "../../form-actions";

interface CartCheckoutProps {
  price: number;
  discount: number;
}

const CartCheckout: FC<CartCheckoutProps> = ({ price = 0, discount = 0 }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${ROUTES.CHECKOUT}`);
  };

  return (
    <Form onFinish={handleClick} name="go-to-checkout">
      <FormTitle title="Proceed to purchase" />
      <div style={{ marginBottom: 10 }}>
        <div>
          <p>Subtotal: {price}</p>
          <p>Discount: {discount}</p>
        </div>
        <h3>Total: {price - discount}</h3>
      </div>
      <Button type="primary" htmlType="submit">
        Checkout
      </Button>
    </Form>
  );
};

export default CartCheckout;

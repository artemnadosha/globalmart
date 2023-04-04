import {FC} from 'react';
import {Button} from "../../../UI";

interface CartCheckoutProps {
    price: number
    discount: number
}

const CartCheckout: FC<CartCheckoutProps> = ({price = 0, discount = 0}) => {
    return (
        <div>
            <div>
                <p>Subtotal: {price}</p>
                <p>Discount: {discount}</p>
            </div>
            <h3>Total: {price - discount}</h3>
            <Button type='primary'>Checkout</Button>
        </div>
    );
};

export default CartCheckout;
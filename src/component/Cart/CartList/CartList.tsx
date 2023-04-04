import {FC, useEffect, useState} from 'react';
import {CartCheckout, CartItem} from "../index";
import {List} from "antd";
import {useContextStore} from "../../../hooks/useContextStore";
import {discountAmount} from "../../../utils/discountAmount";
import {priceWithoutDiscount} from "../../../utils/priceWithoutDiscount";

export type cartItemQuantityType = {
    id: number,
    quantity: number,
    price: number,
    discountPercentage: number

}
const CartList: FC = () => {
    const {cartItem, setCartItem} = useContextStore()
    const [cartItemQuantity, setCartItemQuantity] = useState<cartItemQuantityType[]>([]);
    const [priceWithoutDiscountAll, setPriceWithoutDiscountAll] = useState(0);
    const [valueDiscountPercentageAll, setValueDiscountPercentageAll] = useState(0);
    const removeFromCart = (id: number) => {
        if (setCartItem) {
            setCartItem(prevState => prevState.filter(item => item.id !== id))
        }
    }

    const handleSetCartItemQuantity = ({id, quantity, price, discountPercentage}: cartItemQuantityType) => {
        setCartItemQuantity(prevState => [...prevState.filter(item => item.id !== id), {
            id,
            quantity,
            price,
            discountPercentage
        }])
    }

    useEffect(() => {
        if (cartItem) {
            setCartItemQuantity(cartItem?.map(item => ({
                id: item.id,
                quantity: 1,
                price: item.price,
                discountPercentage: item.discountPercentage
            })))

        }
    }, [cartItem]);

    useEffect(() => {
        if (!!cartItemQuantity.length) {
            setValueDiscountPercentageAll(testFunc(cartItemQuantity))
            setPriceWithoutDiscountAll(sumPrice(cartItemQuantity))
        }
    }, [cartItemQuantity]);

    const testFunc = (quantity: cartItemQuantityType[]) => {
        const test = quantity.map(item => discountAmount(item.price, item.discountPercentage, item.quantity))
        return Math.ceil(test.reduce((acc, cur) => acc + cur, 0))
    }

    const sumPrice = (quantity: cartItemQuantityType[]) => {
        const test = quantity.map(item => priceWithoutDiscount(item.price, item.discountPercentage, item.quantity))
        return Math.ceil(test.reduce((acc, cur) => acc + cur, 0))
    }

    return (
        <div style={{
            width: '100%',
            padding: '20px',
            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <List
                itemLayout="horizontal"
                style={{width: '50%'}}
            >
                {!!cartItem && cartItem.map(product => < CartItem key={product.id} product={product}
                                                                  removeFromCart={removeFromCart}
                                                                  handleSetCartItemQuantity={handleSetCartItemQuantity}/>)}
            </List>
            <div style={{width: '30%'}}><CartCheckout price={priceWithoutDiscountAll}
                                                      discount={valueDiscountPercentageAll}/></div>
        </div>
    );
};

export default CartList;
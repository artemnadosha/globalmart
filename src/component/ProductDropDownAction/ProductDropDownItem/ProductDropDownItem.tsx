import {TypeProduct} from "../../../types/TypeProduct";
import {FC} from "react";
import {priceWithoutDiscount} from "../../../tools/priceWithoutDiscount";
import styles from './ProductDropDownItem.module.scss'
import {Button} from "../../../UI";
import {enumButton} from "../../../enum/enumButton";
import {useContextStore} from "../../../hooks/useContextStore";

interface ProductDropDownItemProps {
    product: TypeProduct
    itemId: string
}

const ProductDropDownItem: FC<ProductDropDownItemProps> = ({product, itemId}) => {
    const {id, price, thumbnail, title,} = product
    const {setBasketItem, setLikedItem} = useContextStore()
    const handlerRemove = () => {
        if (itemId === 'basket') {
            if (setBasketItem) {
                setBasketItem(prevState => prevState.filter(item => item.id !== id))
            }
        } else {
            if (setLikedItem) {
                setLikedItem(prevState => prevState.filter(item => item.id !== id))
            }
        }

    }

    return (
        <div className={styles.wrapper}>
            <img src={thumbnail} alt={title} className={styles.img}/>
            <div className={styles.infoWrapper}>
                <div className={styles.info}>
                    <p>Name:</p>
                    <p>{title}</p>
                </div>
                <div className={styles.info}>
                    <p>Price:</p>
                    <p>${price}</p>
                </div>
            </div>
            <div className={styles.button}>
                <Button onClick={handlerRemove} style={enumButton.CLOSE}>Remove</Button>
            </div>
        </div>
    );
};

export default ProductDropDownItem;
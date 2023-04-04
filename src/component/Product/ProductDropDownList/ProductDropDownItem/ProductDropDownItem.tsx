import {TypeProduct} from "../../../../types/TypeProduct";
import {FC} from "react";
import styles from './ProductDropDownItem.module.scss'
import {Button} from "../../../../UI";
import {useContextStore} from "../../../../hooks/useContextStore";

interface ProductDropDownItemProps {
    product: TypeProduct
    itemId: string
}

const ProductDropDownItem: FC<ProductDropDownItemProps> = ({product, itemId}) => {
    const {id, price, thumbnail, title,} = product
    const {setCartItem, setFavoriteItem} = useContextStore()
    const handlerRemove = () => {
        if (itemId === 'cart') {
            if (setCartItem) {
                setCartItem(prevState => prevState.filter(item => item.id !== id))
            }
        } else {
            if (setFavoriteItem) {
                setFavoriteItem(prevState => prevState.filter(item => item.id !== id))
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
                <Button onClick={handlerRemove} type={"default"} danger={true}>Remove</Button>
            </div>
        </div>
    );
};

export default ProductDropDownItem;
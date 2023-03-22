import {FC} from "react";
import {ProductCardProps} from "./ProductCard.utils";
import {priceWithoutDiscount} from "../../tools/priceWithoutDiscount";
import IconStar from "../../UI/IconStar/IconStar";
import styles from './ProductCard.module.scss'
import IconBasket from "../../UI/IconBasket/IconBasket";
import IconHeart from "../../UI/IconHeart/IconHeart";

const ProductCard: FC<ProductCardProps> = ({product}) => {
    const {
        id,
        category,
        images,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        title,
        thumbnail,
        description
    } = product

    const naturalPrice = Math.ceil(priceWithoutDiscount(price, discountPercentage))
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.imageWrapper}><img className={styles.image} src={thumbnail} alt={title}/></div>
            <div className={styles.info}>
                <div className={styles.priceWrapper}>
                    <div><p>${price}</p></div>
                    <div className={styles.discount}><p className='verySmall'>${naturalPrice}</p></div>
                    <div className={styles.action}>
                        <IconHeart/>
                        <IconBasket/>
                    </div>
                </div>
                <IconStar rating={rating}/>
                <div><p>{title}</p></div>
                <div className={styles.brand}><p className='small'>{brand}</p></div>
            </div>

        </div>
    );
};

export default ProductCard;
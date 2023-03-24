import {FC, useEffect, useState} from "react";
import {priceWithoutDiscount} from "../../../tools/priceWithoutDiscount";
import styles from './ProductCard.module.scss'
import {TypeProduct} from "../../../types/TypeProduct";
import {Button, IconBasket, IconHeart, IconStar} from "../../../UI";
import {useContextStore} from "../../../hooks/useContextStore";
import PurchaseConfirmationModal from "../../PurchaseСonfirmationModal/PurchaseConfirmationModal";
import {Link} from "react-router-dom";
import {enumButton} from "../../../enum/enumButton";

export interface ProductCardProps {
    product: TypeProduct;
}


const ProductCard: FC<ProductCardProps> = ({product}) => {
    const {
        id,
        price,
        discountPercentage,
        rating,
        brand,
        title,
        thumbnail,
    } = product

    const {basketItem, setBasketItem, likedItem, setLikedItem} = useContextStore()
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [activeIconBasket, setActiveIconBasket] = useState<boolean>(false);
    const [activeIconLiked, setActiveIconLiked] = useState<boolean>(false);

    const naturalPrice = Math.ceil(priceWithoutDiscount(price, discountPercentage))

    useEffect(() => {
        basketItem?.forEach(item => {
            if (item.id === product.id) {
                setActiveIconBasket(true)
            }
        })

        const basket = basketItem?.find(item => item.id === product.id)
        !basket && setActiveIconBasket(false)
        const liked = likedItem?.find(item => item.id === product.id)
        !liked && setActiveIconLiked(false)

        likedItem?.forEach(item => {
            if (item.id === product.id) {
                setActiveIconLiked(true)
            }
        })

    }, [basketItem, likedItem])

    const handlerOpenModal = () => {
        setOpenModal(true)
    }
    const handlerCloseModal = () => {
        setOpenModal(false)
    }

    const handlerCancel = () => {
        handlerCloseModal()
    }

    const handlerSubmitBasket = () => {
        handlerCloseModal()
        if (setBasketItem) {
            setBasketItem(prevState => [...prevState, product])
        }
    }

    const handlerRemoveBasketItem = () => {
        if (setBasketItem) {
            setBasketItem(prevState => prevState.filter(item => item.id !== id))
        }
    }

    const handlerSubmitLiked = () => {
        if (setLikedItem) {
            setLikedItem(prevState => [...prevState, product])
        }
    }

    const handlerRemoveLikedItem = () => {
        if (setLikedItem) {
            setLikedItem(prevState => prevState.filter(item => item.id !== id))
        }
    }


    return (
        <div className={styles.cardWrapper}>
            <div className={styles.imageWrapper}><img className={styles.image} src={thumbnail} alt={title}/></div>
            <div className={styles.info}>
                <div className={styles.priceWrapper}>
                    <div><p>${price}</p></div>
                    <div className={styles.discount}><p className='verySmall'>${naturalPrice}</p></div>
                    <div className={styles.action}>
                        <IconHeart onClick={activeIconLiked ? handlerRemoveLikedItem : handlerSubmitLiked}
                                   activeIcon={activeIconLiked}/>
                        <IconBasket onClick={activeIconBasket ? handlerRemoveBasketItem : handlerOpenModal}
                                    activeIcon={activeIconBasket}/>
                    </div>
                </div>
                <IconStar rating={rating}/>
                <div><p>{title}</p></div>
                <div className={styles.brand}><p className='small'>{brand}</p></div>
            </div>
            {openModal &&
				<PurchaseConfirmationModal onClose={handlerCloseModal} onCancel={handlerCancel}
										   onSubmit={handlerSubmitBasket}/>}
            <Link to={`${id}`} className={styles.link}>Detailed information</Link>
        </div>
    );
};

export default ProductCard;
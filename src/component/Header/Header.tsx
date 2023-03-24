import {FC, PointerEvent, useState} from "react";
import styles from './Header.module.scss'
import {IconBasket, IconHeart} from "../../UI";
import {useContextStore} from "../../hooks/useContextStore";
import ProductDropDownList from "../ProductDropDownAction/ProductDropDownList/ProductDropDownList";
import {Link} from "react-router-dom";
import {routes} from "../../utils/const";

const Header: FC = () => {
    const {basketItem, likedItem} = useContextStore()
    const [dropdownBasket, setDropdownBasket] = useState<boolean>(false);
    const [dropdownLiked, setDropdownLiked] = useState<boolean>(false);

    const onPointerEnter = (e: PointerEvent<HTMLDivElement>) => {
        if (e.currentTarget.id === 'basket') {
            setDropdownBasket(true)
        } else {
            setDropdownLiked(true)
        }

    }

    const onPointerLeave = (e: PointerEvent<HTMLDivElement>) => {
        if (e.currentTarget.id === 'basket') {
            setDropdownBasket(false)
        } else {
            setDropdownLiked(false)
        }
    }


    return (
        <div className={styles.wrapper}>
            <Link to={routes.HOME}>HOME</Link>
            <div>SEARCH</div>
            <div className={styles.wrapperActions}>
                <div className={styles.basket} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave}
                     id='liked'>
                    <IconHeart withText={true}/>
                    {!!likedItem?.length && dropdownLiked &&
						<ProductDropDownList products={likedItem} itemId='liked'/>}
                </div>
                <div className={styles.basket} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave}
                     id='basket'>
                    <IconBasket withText={true}/>
                    {!!basketItem?.length && dropdownBasket &&
						<ProductDropDownList products={basketItem} itemId='basket' textButton="Go to cart"/>}
                </div>
            </div>

        </div>
    );
};

export default Header;
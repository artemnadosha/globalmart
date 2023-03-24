import {TypeProduct} from "../../../types/TypeProduct";
import {FC} from "react";
import ProductDropDownItem from "../ProductDropDownItem/ProductDropDownItem";
import styles from './ProductDropDownList.module.scss'
import {Button} from "../../../UI";
import {enumButton} from "../../../enum/enumButton";

interface ProductDropDownListProps {
    products: TypeProduct[]
    textButton?: string
    itemId: string
}

const ProductDropDownList: FC<ProductDropDownListProps> = ({products, textButton, itemId}) => {
    return (
        <div className={styles.wrapper}>
            {products.map(product => <ProductDropDownItem key={product.id} product={product} itemId={itemId}/>)}
            {!!textButton && <div className={styles.buttonWrapper}>
				<Button style={enumButton.SECONDARY} onClick={() => {
                }}>{textButton}</Button>
			</div>}
        </div>
    );
};

export default ProductDropDownList;
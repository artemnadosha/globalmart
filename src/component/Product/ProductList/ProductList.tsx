import {TypeProduct} from "../../../types/TypeProduct";
import {FC} from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from './ProductList.module.scss'

interface ProductListProps {
    products: TypeProduct[]

}

const ProductList: FC<ProductListProps> = ({products,}) => {


    return (
        <div className={styles.wrapper}>
            {!!products.length && products.map(product => <ProductCard key={product.id}
                                                                       product={product}/>)}
        </div>
    );
};

export default ProductList;
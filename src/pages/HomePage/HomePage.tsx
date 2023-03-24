import ProductList from "../../component/Product/ProductList/ProductList";
import {useContextStore} from "../../hooks/useContextStore";


const HomePage = () => {
    const {products} = useContextStore()
    
    return (
        <>
            {!!products && <ProductList products={products}/>}
        </>
    );
};

export default HomePage;

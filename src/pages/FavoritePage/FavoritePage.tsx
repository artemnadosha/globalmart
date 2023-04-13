import { FC } from "react";
import { ProductList } from "../../component/Product";
import { useFavoriteReducer } from "../../hooks";
import { Content } from "../../UI";

const FavoritePage: FC = () => {
  const { favoriteItems } = useFavoriteReducer();
  return (
    <Content>
      <ProductList
        products={favoriteItems}
        totalProduct={favoriteItems.length}
      />
    </Content>
  );
};

export default FavoritePage;

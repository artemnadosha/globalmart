import { FC, useState } from "react";
import { ProductList } from "../../component/product";
import { useFavoriteReducer } from "../../hooks";
import { Content } from "../../UI";

const FavoritePage: FC = () => {
  const { favoriteItems } = useFavoriteReducer();
  const [favoriteSlice, setFavoriteSlice] = useState(
    favoriteItems.slice(0, 12)
  );

  const handleChangePage = (page: number) => {
    const skip = 12 * page;
    const slice = 12 * (page - 1);
    setFavoriteSlice(favoriteItems.slice(slice, skip));
  };
  return (
    <Content>
      <ProductList
        products={favoriteSlice}
        totalProduct={favoriteItems.length}
        onClick={handleChangePage}
      />
    </Content>
  );
};

export default FavoritePage;

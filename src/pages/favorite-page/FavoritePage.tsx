import { FC, useState } from "react";
import { ProductList } from "../../component/product";
import { useFavoriteReducer } from "../../hooks";

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
    <ProductList
      filter={false}
      products={favoriteSlice}
      totalProduct={favoriteItems.length}
      onClick={handleChangePage}
    />
  );
};

export default FavoritePage;

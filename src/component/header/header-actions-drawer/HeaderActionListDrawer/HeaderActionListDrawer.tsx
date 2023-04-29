import { FC } from "react";
import { TypeProduct } from "../../../../types/TypeProduct";
import { Avatar, List, Space } from "antd";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../utils/const";
import { correctionName } from "../../../../utils";
import { Button, Image } from "../../../../UI";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useCartReducer, useFavoriteReducer } from "../../../../hooks";

interface HeaderActionListDrawerProps {
  products: TypeProduct[];
  handleCloseDrawer: () => void;
  listId: string;
}

const HeaderActionListDrawer: FC<HeaderActionListDrawerProps> = ({
  products,
  handleCloseDrawer,
  listId,
}) => {
  const { removeProductCart } = useCartReducer();
  const { removeProductFavorite } = useFavoriteReducer();
  const handlerRemove = (id: number) => {
    if (listId === "cart") {
      removeProductCart(id);
    } else {
      removeProductFavorite(id);
    }
  };
  return (
    <List
      itemLayout="horizontal"
      dataSource={products}
      renderItem={(item, index) => (
        <List.Item>
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div style={{ width: 80, height: 80 }}>
              <Image src={item.thumbnail} alt={item.title} />
            </div>
            <Space direction="vertical" style={{ flex: 1 }}>
              <Link
                onClick={handleCloseDrawer}
                to={`/${ROUTES.PRODUCTS}/${item.category}/${item.id}`}
              >
                {correctionName(item.title)}
              </Link>
              <div>{correctionName(item.brand)}</div>
            </Space>
            <div>
              <Button
                type="link"
                danger={true}
                onClick={() => handlerRemove(item.id)}
              >
                <CloseCircleOutlined style={{ fontSize: "2rem" }} />
              </Button>
            </div>
          </div>
        </List.Item>
      )}
    />
  );
};

export default HeaderActionListDrawer;

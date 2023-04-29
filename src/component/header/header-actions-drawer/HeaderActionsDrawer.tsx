import { Badge, Drawer } from "antd";
import { FC, ReactElement, useState } from "react";
import { Button, IconFavorite } from "../../../UI";
import { TypeProduct } from "../../../types/TypeProduct";
import HeaderActionListDrawer from "./HeaderActionListDrawer/HeaderActionListDrawer";
import { correctionName } from "../../../utils";
import { useNavigate } from "react-router-dom";

interface HeaderActionsDrawerProps {
  products: TypeProduct[];
  listId: string;
  textButton: string;
  colorBadge: "blue" | "red";
  icon: ReactElement;
}

const HeaderActionsDrawer: FC<HeaderActionsDrawerProps> = ({
  products,
  listId,
  textButton,
  colorBadge,
  icon,
}) => {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleGoTo = () => {
    handleCloseDrawer();
    navigate(listId);
  };
  return (
    <>
      <Badge count={products.length} color={colorBadge}>
        <div onClick={handleOpenDrawer}>{icon}</div>
      </Badge>
      <Drawer
        title={`My ${correctionName(listId)}`}
        placement="right"
        onClose={handleCloseDrawer}
        open={openDrawer}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "95%",
            overflow: "auto",
          }}
        >
          <HeaderActionListDrawer
            products={products}
            handleCloseDrawer={handleCloseDrawer}
            listId={listId}
          />
        </div>
        <Button type="primary" onClick={handleGoTo}>
          {textButton}
        </Button>
      </Drawer>
    </>
  );
};

export default HeaderActionsDrawer;

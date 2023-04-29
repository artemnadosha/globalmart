import { FC, useMemo } from "react";
import { Col, Menu } from "antd";
import s from "./Navbar.module.scss";
import { GetItemNavbar } from "./GetItemNavbar";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../utils/const";

interface NavbarProps {
  productCategories: string[];
}

const Navbar: FC<NavbarProps> = ({ productCategories }) => {
  const navigate = useNavigate();
  const params = useParams<{ categories: string }>();
  const selectedKeys = useMemo(() => {
    return [!!params.categories ? params.categories : ""];
  }, [params.categories]);
  const handleMenuClick = (event: { key: string }) => {
    navigate(`${ROUTES.PRODUCTS}/${event.key}?page=1`);
  };
  return (
    <div className={s.wrapper}>
      <Col span={20} offset={2}>
        <Menu
          onClick={handleMenuClick}
          selectedKeys={selectedKeys}
          mode="horizontal"
          items={GetItemNavbar(productCategories)}
        />
      </Col>
    </div>
  );
};

export default Navbar;

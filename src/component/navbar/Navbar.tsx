import { FC, useMemo } from "react";
import { Col, Menu } from "antd";
import s from "./Navbar.module.scss";
import { GetItemNavbar } from "./GetItemNavbar";
import { useNavigate, useParams } from "react-router-dom";

interface NavbarProps {
  productCategories: string[];
}

const Navbar: FC<NavbarProps> = ({ productCategories }) => {
  const navigate = useNavigate();
  const params = useParams<{ categories: string }>();

  const selectedKeys = useMemo(() => {
    return [!!params.categories ? params.categories : ""];
  }, [params.categories]);

  const handleMenuClick = (event: {
    key: string | undefined;
    keyPath: string[];
  }) => {
    navigate(
      `${event.keyPath.length > 1 ? event.keyPath[1] : event.key}/${
        event.keyPath.length > 1 ? event.key : ""
      }?page=1`
    );
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

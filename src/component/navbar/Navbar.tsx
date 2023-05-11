import { FC, memo, useCallback, useMemo } from "react";
import { Col, Menu, Skeleton } from "antd";
import s from "./Navbar.module.scss";
import { GetItemNavbar } from "./GetItemNavbar";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../utils/const";

interface NavbarProps {
  productCategories?: string[];
  isLoading: boolean;
}

const Navbar: FC<NavbarProps> = memo(({ productCategories, isLoading }) => {
  const navigate = useNavigate();
  const { categories } = useParams<{ categories: string }>();

  const handleMenuClick = useCallback(
    (event: { key: string }) => {
      navigate(`${ROUTES.PRODUCTS}/${event.key}?page=1`);
    },
    [navigate]
  );

  const categoriesMemo = useMemo(() => categories || "", [categories]);

  const skeleton = useMemo(() => {
    if (isLoading) {
      return (
        <div style={{ display: "flex", gap: 20 }}>
          <Skeleton.Button active block />
          <Skeleton.Button active block />
          <Skeleton.Button active block />
        </div>
      );
    }
  }, [isLoading]);

  return (
    <div className={s.wrapper}>
      <Col span={20} offset={2}>
        {skeleton}
        {productCategories && (
          <Menu
            onClick={handleMenuClick}
            selectedKeys={[categoriesMemo]}
            mode="horizontal"
            items={GetItemNavbar(productCategories)}
          />
        )}
      </Col>
    </div>
  );
});

export default Navbar;

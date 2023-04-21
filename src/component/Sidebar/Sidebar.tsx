import { FC, useMemo } from "react";
import { Layout, Menu } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { getItemSideBar } from "./tools/getItemSideBar";

const { Sider } = Layout;

interface SidebarProps {
  productCategories: string[];
}

const Sidebar: FC<SidebarProps> = ({ productCategories }) => {
  const navigate = useNavigate();
  const params = useParams<{ categories: string }>();

  const selectedKeys = useMemo(() => {
    return [!!params.categories ? params.categories : "all"];
  }, [params.categories]);

  const handleMenuClick = (event: { key: string }) => {
    navigate(`products/${event.key}?page=1`);
  };

  return (
    <Sider width={280} style={{ height: "100%" }}>
      <Menu
        mode="inline"
        theme={"dark"}
        onClick={handleMenuClick}
        selectedKeys={selectedKeys}
        style={{ height: "100%", borderRight: 0 }}
        defaultSelectedKeys={[""]}
        defaultOpenKeys={[""]}
        items={
          !!productCategories ? getItemSideBar(productCategories) : undefined
        }
      />
    </Sider>
  );
};

export default Sidebar;

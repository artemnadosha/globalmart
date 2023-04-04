import { FC, useCallback, useEffect, useMemo, useState } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { SERVICES_GET_REQUEST } from "../../services/request";
import { GetItemSideBar } from "./tools/getItemSideBar";
import { useContextStore } from "../../hooks/useContextStore";
import { useNavigate, useParams } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];
const { Sider } = Layout;

const Sidebar: FC = () => {
  const { setProductCategory } = useContextStore();
  const [categories, setCategories] = useState<string[]>([]);
  const [sidebarTab, setSidebarTab] = useState<MenuItem[] | null>(null);
  const navigate = useNavigate();
  const params = useParams<{ categories: string }>();

  const categoriesMemo = useMemo(() => {
    return categories;
  }, [categories]);

  const handleMenuClick = (event: { key: string }) => {
    navigate(`products/${event.key}`);
  };

  const getCategories = useCallback(async () => {
    const { res, status } = await SERVICES_GET_REQUEST.getCategories();

    if (status === 200) {
      setCategories(res.slice(0, 10));
    }
  }, []);

  useEffect(() => {
    if (!categoriesMemo.length) {
      getCategories();
    } else {
      setSidebarTab(GetItemSideBar(categoriesMemo));
    }
  }, [getCategories, categoriesMemo]);

  useEffect(() => {
    if (setProductCategory && params.categories) {
      setProductCategory(params.categories);
    }
  }, [params.categories, setProductCategory]);

  return (
    <Sider width={250}>
      {!!sidebarTab && (
        <Menu
          mode="inline"
          theme={"dark"}
          onClick={handleMenuClick}
          selectedKeys={[!!params.categories ? params.categories : "all"]}
          style={{ height: "100%", borderRight: 0 }}
          defaultSelectedKeys={[""]}
          defaultOpenKeys={[""]}
          items={GetItemSideBar(categoriesMemo)}
        />
      )}
    </Sider>
  );
};

export default Sidebar;

import { MenuProps } from "antd";
import { Key, ReactNode } from "react";
import { AlignLeftOutlined } from "@ant-design/icons";
import { correctionTag } from "../../utils";

type MenuItem = Required<MenuProps>["items"][number];

interface GetItem {
  label: ReactNode;
  key?: Key | null;
  icon?: ReactNode;
  children?: MenuItem[];
  type?: "group";
}

export function getItem({
  label,
  key,
  icon,
  children,
  type,
}: GetItem): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export const GetItemNavbar = (navbarItems?: string[]): MenuItem[] => {
  const navbarItemsRender = navbarItems?.map((navbarItem) =>
    getItem({ label: correctionTag(navbarItem), key: navbarItem })
  );

  return [
    getItem({
      label: "Products Categories",
      key: "products",
      icon: <AlignLeftOutlined />,
      children: navbarItemsRender && [...navbarItemsRender],
    }),
  ];
};

import { MenuProps } from "antd";
import { Key, ReactNode } from "react";
import { RobotOutlined } from "@ant-design/icons";
import { correctionName } from "../../../utils";

type MenuItem = Required<MenuProps>["items"][number];

export function getItem(
  label: ReactNode,
  key?: Key | null,
  icon?: ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export const getItemSideBar = (sideBarItemsName: string[]): MenuItem[] => {
  const sideBarItems = sideBarItemsName.map((sideBarItem) =>
    getItem(correctionName(sideBarItem), sideBarItem)
  );

  return [
    getItem("Products", "", <RobotOutlined />, [
      getItem("All", "all"),
      ...sideBarItems,
    ]),
  ];
};

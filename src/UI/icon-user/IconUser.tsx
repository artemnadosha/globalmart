import { FC } from "react";
import { UserOutlined } from "@ant-design/icons";
import s from "./IconUser.module.scss";

const IconUser: FC = () => {
  return <UserOutlined style={{ fontSize: "1.4rem" }} className={s.icon} />;
};

export default IconUser;

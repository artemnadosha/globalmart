import { FC, PropsWithChildren } from "react";
import { Layout } from "antd";
import s from "./Content.module.scss";

const { Content: ContentAnt } = Layout;
const Content: FC<PropsWithChildren> = ({ children }) => {
  return <ContentAnt className={s.wrapper}>{children}</ContentAnt>;
};

export default Content;

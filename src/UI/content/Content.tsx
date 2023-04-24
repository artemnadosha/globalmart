import { FC, PropsWithChildren } from "react";
import { Col, Layout, Row } from "antd";
import s from "./Content.module.scss";

const { Content: ContentAnt } = Layout;
const Content: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Row gutter={24} style={{ marginLeft: 0, marginRight: 0, width: "100%" }}>
      <Col span={20} offset={2} style={{ padding: 0 }}>
        <ContentAnt className={s.wrapper}>{children}</ContentAnt>
      </Col>
    </Row>
  );
};

export default Content;

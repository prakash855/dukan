import { theme, Layout, Row, Col, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./Head.css";

import HeaderDown from "../../assets/header-down.svg";
import Notify from "../../assets/notify.svg";
import Help from "../../assets/Help.png";

const { Header } = Layout;

const Head = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header
      style={{
        background: colorBgContainer,
      }}
    >
      <Row justify="space-between">
        <Col
          style={{ display: "flex", gap: "1rem", alignItems: "center" }}
          span={8}
        >
          Payments
          <img
            src={Help}
            style={{ width: "14px", height: "14px" }}
            alt="Help"
          />
          How it works
        </Col>
        <Col span={8} style={{ textAlign: "center" }}>
          <Input
            placeholder="Search features, tutorials, etc."
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col span={8} style={{ textAlign: "right" }}>
          <img src={HeaderDown} alt="HeaderDown" />
          <img className="notify" src={Notify} alt="Notify" />
        </Col>
      </Row>
    </Header>
  );
};

export default Head;

import { Layout, theme, Input } from "antd";
import Cards from "../DashboardCard/Cards";
import { SearchOutlined } from "@ant-design/icons";
const { Content } = Layout;

import Sort from "../../assets/Sort.svg";
import Download from "../../assets/download.svg";

import "./Body.css";
import Table from "../Table";

const Body = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Content
      style={{
        margin: "24px 16px 0",
      }}
    >
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <Cards />
        <div className="table-header-text">Transactions | This Month</div>
        <div className="tabel-action">
          <Input
            style={{ width: "248px" }}
            placeholder="Order ID, phone or name..."
            prefix={<SearchOutlined />}
          />
          <div className="actions">
            <div className="action-icons">
              Sort <img src={Sort} alt="" />
            </div>
            <div className="action-icons">
              <img src={Download} alt="Download" />
            </div>
          </div>
        </div>

        {/* Table */}
        <Table />
      </div>
    </Content>
  );
};

export default Body;

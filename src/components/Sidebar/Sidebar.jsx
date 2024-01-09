import React from "react";

import { Layout, Menu } from "antd";
const { Sider } = Layout;

import Home from "../../assets/home.svg";
import Orders from "../../assets/orders.svg";
import Products from "../../assets/products.svg";
import Delivery from "../../assets/delivery.svg";
import Marketing from "../../assets/marketing.svg";
import Analytics from "../../assets/analytics.svg";
import Payments from "../../assets/payments.svg";
import Tools from "../../assets/tools.svg";
import Discounts from "../../assets/discounts.svg";
import Audience from "../../assets/audience.svg";
import Appearance from "../../assets/appearance.svg";
import Plugins from "../../assets/plugins.svg";
import SidebarUser from "../SidebarUser/SidebarUser";

const sidebarLinks = [
  "Home",
  "Orders",
  "Products",
  "Delivery",
  "Marketing",
  "Analytics",
  "Payments",
  "Tools",
  "Discounts",
  "Audience",
  "Appearance",
  "Plugins",
];

const icons = [
  Home,
  Orders,
  Products,
  Delivery,
  Marketing,
  Analytics,
  Payments,
  Tools,
  Discounts,
  Audience,
  Appearance,
  Plugins,
];

const items = sidebarLinks.map((label, index) => ({
  label: label,
  icon: React.createElement("img", {
    src: icons[index],
    alt: label,
    width: 24,
    height: 24,
  }), // Assuming 24x24 dimensions, adjust as needed
  key: String(index + 1),
}));

const Sidebar = () => {
  return (
    <Sider
      style={{ background: "#1e2640" }}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="demo-logo-vertical" />
      <SidebarUser />
      <Menu
        style={{ background: "#1e2640" }}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["7"]}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;

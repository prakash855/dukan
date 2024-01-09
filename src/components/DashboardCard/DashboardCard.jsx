import { Card } from "antd";
// eslint-disable-next-line react/prop-types
const DashboardCard = ({ title, value }) => {
  return (
    <Card
      style={{
        flex: "1",
        padding: "0",
      }}
    >
      <div className="title">{title}</div>
      <div className="value">{value}</div>
    </Card>
  );
};
export default DashboardCard;

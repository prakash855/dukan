import DashboardCard from "./DashboardCard";
import "./Cards.css";

const content = [
  { title: "Online orders", value: "231" },
  { title: "Amount received", value: "₹23,92,312.19" },
];

const Cards = () => {
  return (
    <div className="cards">
      {content.map((item, key) => (
        <DashboardCard key={key} title={item.title} value={item.value} />
      ))}
    </div>
  );
};

export default Cards;

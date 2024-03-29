import { Table as NativeTable } from "antd";

import { GrPrevious, GrNext } from "react-icons/gr";

const columns = [
  {
    title: "Order ID",
    dataIndex: "orderId",
    width: "20%",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Order date",
    dataIndex: "orderDate",
    sorter: true,
    width: "20%",
  },
  {
    title: "Order amount",
    dataIndex: "orderAmount",
    width: "20%",
    align: "right",
  },
  {
    title: "Transaction fees",
    dataIndex: "transactionFees",
    width: "20%",
    align: "right",
  },
];

// Mock data
const mockData = Array.from({ length: 200 }, (_, index) => ({
  key: index.toString(),
  orderId: `#281209`,
  orderDate: `7 July, 2023`,
  orderAmount: `₹1,278.23`,
  transactionFees: `₹22`,
}));

const Table = () => {
  return (
    <NativeTable
      columns={columns}
      rowKey={(record) => record.key}
      dataSource={mockData}
      pagination={{
        current: 10,
        pageSize: 10,
        showSizeChanger: false,
        prevIcon: (
          <span className="pagination-action">
            <GrPrevious />
            Previous
          </span>
        ),
        nextIcon: (
          <span className="pagination-action">
            Next <GrNext />
          </span>
        ),
      }}
      onChange={() => {}}
    />
  );
};

export default Table;

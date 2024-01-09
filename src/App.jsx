import { Layout } from "antd";
import Body from "./components/Body/Body";
import Head from "./components/Head/Head";
import Sidebar from "./components/Sidebar/Sidebar";

import "./App.css";

const App = () => {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Head />
        <Body />
      </Layout>
    </Layout>
  );
};
export default App;

import { Layout } from "antd";
import Body from "./components/Body/Body";
import Head from "./components/Head/Head";
import Sidebar from "./components/sidebar/Sidebar";
const { Footer } = Layout;

const App = () => {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Head />
        <Body />
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;

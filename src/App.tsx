import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";
import "./App.css";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const { Content } = Layout;

const App: React.FC = () => {
  const routes = (
    <Switch>
      <Route exact path="/" component={Products} />
      <Route path="/category/:category" component={Products} />
    </Switch>
  );

  return (
    <Router>
      <Layout>
        <Navbar />
        <Layout>
          <Sidebar />
          <Content>
            <Cart />
            {routes}
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;

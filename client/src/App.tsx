import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";
import Form from "./components/ProductForm";
import "./App.css";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleItem from "./components/SingleItem";
import React from "react";

const { Content } = Layout;

const App: React.FC = () => {
  const routes = (
    <Switch>
      <Route exact path="/" component={Products} />
      <Route path="/category/:category" component={Products} />
      <Route path="/:category/:title" component={SingleItem}></Route>
    </Switch>
  );

  return (
    <Router>
      <Layout>
        <Navbar />
        <Layout>
          <Sidebar />
          <Content>
            <Form />
            <Cart />
            {routes}
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;

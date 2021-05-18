import { useState } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";
import Form from "./components/ProductForm";
import "./App.css";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleItem from "./components/SingleItem";

const { Content } = Layout;

const App: React.FC = () => {
  const [currentId, setCurrentId] = useState<string | null>(null);
  const routes = (
    <Switch>
      <Route exact path="/" >
        <Products setCurrentId={setCurrentId} currentId={currentId}/>
      </Route>
      <Route path="/category/:category" >
      <Products setCurrentId={setCurrentId} currentId={currentId}/>
      </Route>
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
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
            <Cart />
            {routes}
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;

import React, { Component } from "react";
import Layout from "../hoc/layout/Layout";
import BurgerBuilder from "../containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./Checkout/Checkout";
import Orders from "./Orders/Orders";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  // state = {
  //   show: true,
  // };

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ show: false });
  //   }, 5000);
  // }

  render() {
    return (
      <div>
        {/* <Layout>{this.state.show ? <BurgerBuilder /> : null}</Layout>
         */}
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
          {/* <Checkout /> */}
        </Layout>
      </div>
    );
  }
}

export default App;
import React from "react";
import LoginContainer from "../containers/LoginContainer";
import ProductsContainer from "../containers/ProductsContainer";
import RegisterContainer from "../containers/RegisterContainer";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBarContainer from "../containers/NavBarContainer";
import SingleProductContainer from "../containers/SingleProductContainer";
import AddProductContainer from "../containers/AddProductContainer";
import SingleuserContainer from "../containers/SingleuserContainer";
import EditProductContainer from "../containers/EditProductContainer";
import CartContainer from "../containers/CartContainer";

export default () => (
  <div id="main" className="container-fluid">
    <div>
      <NavBarContainer />
    </div>
    <Switch>
      <Route exact path="/products" component={ProductsContainer} />
      <Route path="/users/register" component={RegisterContainer} />
      <Route path="/users/login" component={LoginContainer} />
      <Route exact path="/products/add" component={AddProductContainer} />
      <Route path="/products/:id/edit" component={EditProductContainer} />
      <Route path="/products/:id" component={SingleProductContainer} />
      <Route path="/users/:id" component={SingleuserContainer} />
      <Route exact path="/cart" component={CartContainer} />

      {/* <Redirect to="/"></Redirect> */}
    </Switch>
  </div>
);

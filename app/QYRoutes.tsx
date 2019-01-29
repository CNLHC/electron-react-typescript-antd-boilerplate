import * as React from 'react';
import { Switch, Route } from 'react-router';
import QYOrderManagement from "./pages/OrderManagement";
import QYProductList from "./pages/ProductList";

export default () => (
    <Switch>
      <Route exact path="/" component={QYOrderManagement} />
      <Route exact path="/test" component={QYProductList} />
    </Switch>
);

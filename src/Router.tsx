import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route exact path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

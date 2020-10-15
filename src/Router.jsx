import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Top, Profile } from "./templates";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" children={Top} />
        <Route exact path="/profile/" children={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Top, Profile, Works } from "./templates";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" children={Top} />
        <Route exact path="/profile/" children={Profile} />
        <Route exact path="/works/" children={Works} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

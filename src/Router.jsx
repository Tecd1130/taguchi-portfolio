import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Top, Profile, Works, WorksDetail } from "./templates";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" children={Top} />
        <Route exact path="/profile/" children={Profile} />
        <Route exact path="/works/" children={Works} />
        <Route exact path="/works/detail/" children={WorksDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

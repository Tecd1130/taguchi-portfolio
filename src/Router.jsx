import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login, Top, Profile, Works, WorksDetail } from "./templates";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login/" component={Login} />
        <Route exact path="/" component={Top} />
        <Route exact path="/profile/" component={Profile} />
        <Route exact path="/works/" component={Works} />
        <Route exact path="/works/detail/" component={WorksDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

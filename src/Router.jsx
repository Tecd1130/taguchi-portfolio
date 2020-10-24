import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Login,
  Top,
  Profile,
  Works,
  WorksDetail,
  WorksEdit,
} from "./templates";
import { auth } from "./firebase/index";

const Router = () => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      let setUrl = "/login/";
      if (!user && window.location.pathname != setUrl) {
        return (window.location.href = "/login/");
      } else {
        return;
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login/" component={Login} />
        <Route exact path="(/)?" component={Top} />
        <Route exact path="/profile/" component={Profile} />
        <Route exact path="/works/" component={Works} />
        <Route exact path="/works/detail/:id" component={WorksDetail} />
        <Route path="/works/edit(/:id)?" component={WorksEdit} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

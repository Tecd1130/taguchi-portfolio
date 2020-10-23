import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Login,
  Top,
  Profile,
  Works,
  WorksDetail,
  WorksEdit,
} from "./templates";
import Auth from "./Auth";

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/login/"
            render={() => <Login isLogin={isLogin} />}
          />
          <Auth isLogin={isLogin}>
            <Switch>
              <Route exact path="/" component={Top} />
              <Route exact path="/profile/" component={Profile} />
              <Route exact path="/works/" component={Works} />
              <Route exact path="/works/:id" component={WorksDetail} />
              <Route path="/works/edit/(:id)?" component={WorksEdit} />
            </Switch>
          </Auth>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;

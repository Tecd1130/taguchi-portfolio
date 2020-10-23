import React from "react";
import { Redirect } from "react-router-dom";

const Auth = (props) => {
  if (!props.isLogin) {
    return <Redirect to="/login/" />;
  } else {
    return props.children;
  }
};
export default Auth;

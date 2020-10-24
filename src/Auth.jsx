import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { auth } from "./firebase/index";

const Auth = (props) => {
  // let isLogin = true;
  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (!user) {
  //       return (isLogin = false);
  //     } else {
  //       return (isLogin = true);
  //     }
  //   });
  // }, [isLogin]);
  // if (!isLogin) {
  //   return <Redirect to="/login/" />;
  // } else {
  //   return props.children;
  // }
};
export default Auth;

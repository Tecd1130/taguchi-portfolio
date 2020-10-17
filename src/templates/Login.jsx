import React, { useState, useCallback } from "react";
import { TextInput, PrimaryButton } from "../components/index";

const Login = () => {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const inputPassword = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  return (
    <div className="login">
      <div className="inner">
        <p className="login-title">ログイン</p>
        <div className="spacer-sm"></div>
        <TextInput
          fullWidth={true}
          label={"メールアドレス"}
          multiline={false}
          required={true}
          rows={1}
          value={email}
          type={"email"}
          onChange={inputEmail}
        />
        <div className="spacer-sm"></div>
        <TextInput
          fullWidth={true}
          label={"パスワード"}
          multiline={false}
          required={true}
          rows={1}
          value={password}
          type={"password"}
          onChange={inputPassword}
        />
        <div className="spacer-md"></div>
        <PrimaryButton />
      </div>
    </div>
  );
};

export default Login;

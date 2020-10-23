import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { TextInput, PrimaryButton } from "../components/index";
import { auth } from "../firebase/index";

const Login = (props) => {
  const history = useHistory();

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

  const signIn = async (email, password) => {
    if (email === "" || password === "") {
      alert("必須項目が未入力です");
      return false;
    } else {
      return await auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          props.setIsLogin(true);
          alert("サインインに成功しました");
          history.push("/");
        })
        .catch((error) => {
          alert("サインインエラー");
        });
    }
  };

  const signOut = () => {
    return auth
      .signOut()
      .then(() => {
        props.setIsLogin(true);
        alert("ログアウトしました");
      })
      .catch((error) => {
        alert("ログアウト時にエラーが発生しました");
      });
  };

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
        <PrimaryButton
          onClick={() => {
            signIn(email, password);
          }}
          label={"ログイン"}
        />
        <div className="spacer-md"></div>
        <PrimaryButton
          onClick={() => {
            signOut();
          }}
          label={"ログアウト"}
        />
      </div>
    </div>
  );
};

export default Login;

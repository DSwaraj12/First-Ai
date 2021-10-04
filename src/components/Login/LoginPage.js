import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import Signup from "./Signup";
import Signin from "./Signin";
import LoginImage from "../../images/LoginImage.png";
import "../../styles/LoginPage.css";

const LoginPage = ({ match }) => {
  const { path } = useRouteMatch();
  return (
    <div className="loginpage">
      <div className="loginpage-image">
        <img src={LoginImage} alt="LoginImage" />
      </div>
      <div className="login-routes">
        <Route path={`${path}/signin`}>
          <Signin />
        </Route>
        <Route path={`${path}/signup`}>
          <Signup />
        </Route>
      </div>
    </div>
  );
};

export default LoginPage;

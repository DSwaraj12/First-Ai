import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginPage from "./components/Login/LoginPage";
import Dashboard from "./components/HomePage/Dashboard";
import Billingdetails from "./components/BillingDetails/Billingdetails";
import CommonHeader from "./components/CommonHeader/CommonHeader";
import SiderBar from "./components/SideBar/SiderBar";
import "./styles/Common.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <CommonHeader/>
        <SiderBar/>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/loginpage" component={LoginPage} />
          <Route path="/billing-details" component={Billingdetails} />
        </Switch>
      </div>
    </BrowserRouter>  
  );
};

export default App;

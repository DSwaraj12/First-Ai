import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginPage from "./components/Login/LoginPage";
import Dashboard from "./components/HomePage/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/loginpage" component={LoginPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

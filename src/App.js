import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Home from "./components/home/Home";
import SignIn from "./components/restaurants/signIn/SignIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop'
import SignUp from "./components/restaurants/signUp/SignUp";
import SignUpAbout from "./components/restaurants/signUpAbout/SignUpAbout";
import SignUpAddress from "./components/restaurants/signUpAddress/SignUpAddress";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signIn" exact component={SignIn} />
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/signUpAbout" exact component={SignUpAbout} />
          <Route path="/signUpAddress" exact component={SignUpAddress} />
          {/* <Route path="" component={NotFound} />
          <Route path="*" component={NotFound} />
          <Route component={NotFound} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

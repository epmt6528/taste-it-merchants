import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Home from "./components/home/Home";
import SignIn from "./components/restaurants/signIn/SignIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signIn" exact component={SignIn} />
          {/* <Route path="" component={NotFound} />
          <Route path="*" component={NotFound} />
          <Route component={NotFound} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

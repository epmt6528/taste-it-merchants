// Libraries
import React from "react"
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from "react-router-dom"

// Components
import Home from "./components/home/Home"
import SignIn from "./components/restaurants/signIn/SignIn"
import ScrollToTop from "./components/ScrollToTop"
import SignUp from "./components/restaurants/signUp/SignUp"
import SignUpAbout from "./components/restaurants/signUpAbout/SignUpAbout"
import SignUpAddress from "./components/restaurants/signUpAddress/SignUpAddress"
import Welcome from "./components/restaurants/welcome/Welcome"
import AuthenticationComp from "./components/AuthenticationComp"
import Navigation from "./components/restaurants/navigation/Navigation"

// Scss
import "./sass/style.scss"

function App() {
  return (
    <BrowserRouter>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signIn" exact component={SignIn} />
            <Route path="/signUp" exact component={SignUp} />
            
            <AuthenticationComp>
              <Route path="/signUpAddress" component={SignUpAddress} />
              <Route path="/signUpAbout" exact component={SignUpAbout} />
              <Route path="/welcome" component={Welcome} />
              <Route path="/restaurant" component={Navigation} />
            </AuthenticationComp>

            {/* <Route path="" component={NotFound} />
            <Route path="*" component={NotFound} />
            <Route component={NotFound} /> */}
          </Switch>
        </div>
      </Router>
    </BrowserRouter>
  )
}

export default App

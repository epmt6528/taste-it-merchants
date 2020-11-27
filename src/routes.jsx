import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Home from "./pages/Home/Home"
import SignIn from "./pages/RestaurantApp/signIn/SignIn"
import SignUp from "./pages/RestaurantApp/signUp/SignUp"
import SignUpAbout from "./pages/RestaurantApp/signUpAbout/SignUpAbout"
import SignUpAddress from "./pages/RestaurantApp/signUpAddress/SignUpAddress"
import Welcome from "./pages/RestaurantApp/welcome/Welcome"
import AuthenticationComp from "./components/AuthenticationComp"
import Navigation from "./pages/RestaurantApp/navigation/Navigation"

function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signIn" exact component={SignIn} />
      <Route path="/signUp" exact component={SignUp} />
      
      <AuthenticationComp>
        <Route path="/signUpAddress" exact component={SignUpAddress} />
        <Route path="/signUpAbout" exact component={SignUpAbout} />
        <Route path="/welcome" exact component={Welcome} />
        <Route path="/restaurant" component={Navigation} />
      </AuthenticationComp>
    </Switch>
  )
}

export default Routes;
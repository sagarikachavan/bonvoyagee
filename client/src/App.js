import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-routes/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Travel from "./components/pages/Travel";
import Antartica from "./components/pages/Antartica";
import Asia from "./components/pages/Asia";
import Europe from "./components/pages/Europe";
import Australia from "./components/pages/Australia";
import NorthAmerica from "./components/pages/NorthAmerica";
import Africa from "./components/pages/Africa";
import SouthAmerica from "./components/pages/SouthAmerica";

import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/travel" component={Travel} />
              <PrivateRoute exact path="/asia" component={Asia} />
              <PrivateRoute exact path="/africa" component={Africa} />
              <PrivateRoute exact path="/antartica" component={Antartica} />
              <PrivateRoute exact path="/northamerica" component={NorthAmerica} />
              <PrivateRoute exact path="/southamerica" component={SouthAmerica} />
              <PrivateRoute exact path="/europe" component={Europe} />
              <PrivateRoute exact path="/australia" component={Australia} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
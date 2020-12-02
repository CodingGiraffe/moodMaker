import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import cookie from 'cookie';
// import Listing from './containers/Listing'
// import Listings from './containers/Listings'
import LoginScreen from './components/LoginScreen';
// import AddListing from './containers/AddListing'
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies['loggedIn'] ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/LoginScreen" />
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      {/* <Route exact path="/" component={Listings} /> */}
      {/* <Route path="/listing/:id" component={Listing}/> */}
      <Route exact path="/" component={LoginScreen} />
      <ProtectedRoute path="/Dashboard" component={Dashboard} />
      <Route exact path="/SignUp" component={SignUp} />
    </Switch>
  );
};

export default Router;

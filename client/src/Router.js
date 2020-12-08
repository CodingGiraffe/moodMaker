import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
// import Listing from './containers/Listing'
// import Listings from './containers/Listings'
import LoginScreen from './components/LoginScreen';
// import AddListing from './containers/AddListing'
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import { connect } from 'react-redux';

const checkAuth = () => {
  const token = localStorage.getItem('token');
  return token;
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

const Router = (props) => {
  console.log('props: ', props);
  return (
    <div>
      {props.loggedIn ? <p>Logged In</p> : <p>Test</p>}
      <Switch>
        {/* <Route exact path="/" component={Listings} /> */}
        {/* <Route path="/listing/:id" component={Listing}/> */}
        <Route exact path="/" component={LoginScreen} />
        <ProtectedRoute path="/Dashboard" component={Dashboard} />
        <Route exact path="/SignUp" component={SignUp} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('state :', state);
  return {
    loggedIn: state.loggedIn,
  };
};
export default connect(mapStateToProps, null)(Router);

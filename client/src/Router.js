import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import LoginScreen from './components/LoginScreen';
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
  return (
    <div>
      <Switch>
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
    loggedIn: state.login,
  };
};
export default connect(mapStateToProps, null)(Router);

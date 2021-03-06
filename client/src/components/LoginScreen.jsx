import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
// import Dashboard from './Dashboard'
import { TextField, Button, Container, Grid, Link } from '@material-ui/core';
// import SignUp from './SignUp';
import { connect } from 'react-redux';
import { login } from '../redux/actions';
import { withRouter } from 'react-router-dom';

class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
  };

  componentDidUpdate(prevProps, prevState) {
    // loading flags, success msg
    if (prevProps.loginLoading && !this.props.loginLoading) {
      if (this.props.msg) {
        // trigger re render with History
        this.props.history.push('/Dashboard');
      }
    }
  }

  // handleInput = ({ target: { name, value } }) => {
  //   const formValue = { ...this.state.formValue, [name]: value };
  //   this.setState({ formValue });
  // };

  handleTextChange = (e) => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  login = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  };

  render() {
    console.log('props', this.props);
    return (
      <div className="App">
        <Container maxWidth="sm">
          <br />

          <Grid
            container
            spacing={2}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <form className="login-form" onSubmit={this.login}>
              <Grid item>
                <TextField
                  required
                  onChange={this.handleTextChange}
                  value={this.state.email}
                  name="email"
                  label="Email"
                  type="text"
                />
              </Grid>
              <Grid item>
                <TextField
                  required
                  onChange={this.handleTextChange}
                  value={this.state.password}
                  name="password"
                  label="Password"
                  type="password"
                />
              </Grid>
              <Grid item>
                <br />
                {/* <Link to="/Dashboard"> */}
                <Button
                  type="submit"
                  className="login-button"
                  variant="contained"
                  fullWidth
                  color="default"
                >
                  {' '}
                  Login
                </Button>
                {/* </Link> */}
              </Grid>
            </form>
          </Grid>
        </Container>
        <div>
          <br />
          <Link>
            <a href="/SignUp">Click Here to Sign Up</a>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginLoading: state.login.loginLoading,
    msg: state.login.msg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => {
      dispatch(login(data));
    },
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
);

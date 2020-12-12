import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
// import Dashboard from './Dashboard'
import { TextField, Button, Container, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { signUp } from '../redux/actions';
import { withRouter } from 'react-router-dom';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };

  // handleInput = ({ target: { name, value } }) => {
  //   const formValue = { ...this.state.formValue, [name]: value };
  //   this.setState({ formValue });
  // };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.signupLoading && !this.props.signupLoading) {
      if (this.props.msg) {
        this.props.history.push('/');
      }
    }
  }

  handleTextChange = (e) => {
    const state = { ...this.state };
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  signup = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    console.log(this.state);
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
            <form className="login-form" onSubmit={this.signup}>
              <Grid item>
                <TextField
                  required
                  onChange={this.handleTextChange}
                  value={this.state.firstName}
                  name="firstName"
                  label="First Name"
                  type="text"
                />
              </Grid>
              <Grid item>
                <TextField
                  required
                  onChange={this.handleTextChange}
                  value={this.state.lastName}
                  name="lastName"
                  label="Last Name"
                  type="text"
                />
              </Grid>
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
                  Sign Up
                </Button>
                {/* </Link> */}
              </Grid>
            </form>
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    signupLoading: state.signup.signupLoading,
    msg: state.signup.msg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (data) => {
      dispatch(signUp(data));
    },
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));

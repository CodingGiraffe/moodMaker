import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import Dashboard from './Dashboard'
import {
  TextField,
  Button,
  Container,
  Grid
} from '@material-ui/core'

  class LoginScreen extends Component {
      state = {
          username: '',
          password: ''
        }

        handleTextChange = (e) => {
            const state = { ...this.state }
            state[e.target.name] = e.target.value
            this.setState(state)
        }

        login = (e) => {
            e.preventDefault()
            document.cookie = "loggedIn=true;max-age=60*1000"
            document.cookie = "Username=" +  this.state.username + ";max-age=60*1000"
            window.location.replace("/")

        }

        render() {
            return (
                <div className="App">
                    <Container maxWidth='sm'>
                    <br/>

        <Grid
          container
          spacing={2}
          direction="column"
          justify="center"
          alignItems="center">
            <form className="login-form" onSubmit={this.login}>
            <Grid item>
              <TextField
                required
                onChange={this.handleTextChange}
                value={this.state.username}
                name="username"
                label="Email"
                type="text" />
            </Grid>
            <Grid item>
              <TextField
                required
                onChange={this.handleTextChange}
                value={this.state.password}
                name="password"
                label="Password"
                type="password" />
            </Grid>
            <Grid item>
            <br/>
            {/* <Link to="/Dashboard"> */}
              <Button
              type="submit"
              className="login-button"
              variant="contained"
              fullWidth
              color="default"> Login
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

export default LoginScreen; 
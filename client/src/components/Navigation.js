import React, { Component } from 'react';
import { AppBar, Toolbar, Container, Typography } from '@material-ui/core';
import cookie from 'cookie';
import { Link } from 'react-router-dom';
// import LoginScreen from './LoginScreen';

const cookies = cookie.parse(document.cookie);

class Navigation extends Component {
  logout = () => {
    console.log(`logging out`);
    document.cookie =
      'loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie =
      'Username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  };

  render() {
    return (
      <Container>
        <AppBar position="relative">
          <Toolbar>
            <Typography
              className="title"
              variant="h6"
              style={{ flexGrow: '1' }}
            >
              MoodMaker
            </Typography>
            <ul className="nav-list">
              {/* <li className="nav-list-item">
                        <Link to="/">Listings</Link>
                    </li>
                    {
                    cookies["loggedIn"] ?  
                    <li className="nav-list-item">
                        <Link to="/addlisting">Add Listing</Link>
                    </li>
                    : null
                    } */}
              <li className="nav-list-item">
                <Link to="/Dashboard">Dashboard </Link>
                {cookies['loggedIn'] ? (
                  <Link
                    onClick={() => {
                      document.cookie = 'loggedIn=';
                      window.location.replace('/');
                    }}
                  >
                    Logout
                  </Link>
                ) : (
                  <Link to="/">Login</Link>
                )}
              </li>
            </ul>
          </Toolbar>
        </AppBar>
        <Container>
          {cookies['loggedIn'] ? <h4>Welcome, {cookies['Username']}</h4> : null}
        </Container>
      </Container>
    );
  }
}

export default Navigation;

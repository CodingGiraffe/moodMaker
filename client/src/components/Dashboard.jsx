import React, { Component } from 'react';
import Moods from './MoodsComponent';
import Happy from './images/Happy.jpg';
import Motivated from './images/Motivated.jpg';
import WorkoutPic from './images/WorkoutPic.webp';
// import NavBar from './NavBar';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
      isOnline: false,
    };
  }

  render() {
    return (
      <div className="container">
        {/* <NavBar /> */}
        {/* <video className="video" autoPlay loop muted>
          <source src={Running} type ="video/mp4"/>
        </video> */}
        <div className="audioCard">
          <Moods />
        </div>
        <ul className="dash-img">
          <li>
            <img src={Happy} alt="" />
          </li>
          <li>
            <img src={Motivated} alt="" />
          </li>
          <li>
            <img src={WorkoutPic} alt="" />
          </li>
        </ul>
      </div>
    );
  }
}

export default Dashboard;

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
        <p>
          Welcome to MoodMaker! <br /> <br />
          Here at MoodMaker we supply all the motivation you need to start a new
          hobby, get back in the gym, learn a new instrument, or change your
          current mood. Simply select from the dropdown options and our curated
          videos will do the rest. Enjoy!
        </p>
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

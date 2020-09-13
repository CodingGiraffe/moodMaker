import React, { Component } from "react";
import AudioCard from "./AudioComponent";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
      isOnline: false,
      profilePic: [],
    };
  }

  handleChange = (e) => {
    this.setState({ notifications: [] });
  };

  handleSwitch = () => {
    this.setState({ isOnline: !this.state.isOnline });
    this.handleNotifications();
  };

  handleNotifications = () => {
    let notification = "You're offline";
    this.setState({
      notifications: [...this.state.notifications, notification],
    });
  };


  render() {
    const { profilePic } = this.state;
    return (
      <div className="container">
        <div className="audioCard">
          <AudioCard />
        </div>
      </div>
    );
  }
}

export default Dashboard;

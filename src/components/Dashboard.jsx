import React, { Component } from "react";
import AudioCard from "./AudioComponent";
import Movinghand from "./video/Movinghand.mp4"


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
      isOnline: false,
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
    return (
      <div className="container">
        <video autoPlay loop muted 
        style= {{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          opcaity: 10
          // zIndex: "-1"
        }}
        >
          <source src={Movinghand} type ="video/mp4"/>
        </video>
        <div className="audioCard">
          <AudioCard />
        </div>
      </div>
    );
  }
}

export default Dashboard;

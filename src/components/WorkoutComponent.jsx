import React from 'react';
import ReactPlayer from "react-player"

function Workout(props) {
    return (
      <div className = "player">
        <ReactPlayer
          url= {props.url}
        />
      </div>
    );
  }
   
  export default Workout;
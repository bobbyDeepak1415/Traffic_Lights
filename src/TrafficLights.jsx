import React, { useState } from "react";
import "./trafficLights.css";

const TrafficLights = () => {

  const [isActive,setIsActive]=useState(false)



  const style = {
    backgroundColor: "gray",
    height: "4rem",
    width: "4rem",
    margin: "auto",
    borderRadius: "50%",
  };


  const lightWorks=()=>{

    



  }


  return (
    <div className="app">
      <div
        className="container_box"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "black",
          height: "30rem",
          width: "10rem",
          margin: "auto",
        }}
      >
        <div className="container" style={style} defaultValue={isActive}></div>
        <div className="container" style={style} defaultValue={isActive}></div>
        <div className="container" style={style} defaultValue={isActive}></div>
      </div>
    </div>
  );
};

export default TrafficLights;

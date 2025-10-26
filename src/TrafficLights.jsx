import React, { useEffect, useState } from "react";
import "./trafficLights.css";

const TrafficLights = () => {
  // const [isActive, setIsActive] = useState(false);
  const isActive = true;
  const lights = ["first", "second", "third"];

  const style = {
    backgroundColor: "gray",
    height: "4rem",
    width: "4rem",
    margin: "auto",
    borderRadius: "50%",
  };

  const lightWorks = (timer) => {
    clearInterval(timer);
    setInterval(() => {}, 2000);
  };

  useEffect(() => {
    lightWorks();
  });

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
        {/* {lights.map((light,index)=>{
          return(
            <div>

              <div className="container" style={style} id="1" defaultValue={isActive}>{light}</div>
            </div>
          )

        })} */}
        <div className="container" style={style} id="1" active={true}></div>
        <div className="container" style={style} id="2" active={true}></div>
        <div className="container" style={style} id="3" active={true}></div>
      </div>
    </div>
  );
};

export default TrafficLights;

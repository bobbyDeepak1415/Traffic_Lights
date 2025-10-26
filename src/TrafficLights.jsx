import React, { useEffect, useState } from "react";
import "./trafficLights.css";

const TrafficLights = () => {
  const [isActive, setIsActive] = useState(0);
  const lights = ["first", "second", "third"];

  const style = {
    // backgroundColor: "gray",
  };

  const getColour = () => {};

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive((prev) => (prev + 1) % lights.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
        {lights.map((light, index) => {
          return (
            <div>
              <div
                className="container"
                style={{
                  backgroundColor: getColour(index),
                  height: "4rem",
                  width: "4rem",
                  margin: "auto",
                  borderRadius: "50%",
                }}
                key={index}
                defaultValue={isActive}
              >
                {light}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrafficLights;

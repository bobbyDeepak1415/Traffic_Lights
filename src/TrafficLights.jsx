import React, { useEffect, useState } from "react";

const TrafficLights = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const lights = ["red", "orange", "green"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % lights.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [activeIndex, lights.length]);

  const getColour = (index) => {
    return activeIndex === index ? lights[index] : "gray";
  };

  return (
    <div className="app">
      <div
        className="container_box"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "black",
          height: "30rem",
          width: "10rem",
          margin: "auto",
        }}
      >
        {lights.map((light, index) => {
          return (
            <div
              className="container"
              style={{
                backgroundColor: getColour(index),
                height: "4rem",
                width: "4rem",
                margin: "2rem",
                borderRadius: "50%",
              }}
              key={index}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default TrafficLights;

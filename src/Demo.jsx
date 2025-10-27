import React, { useState } from "react";

const Demo = () => {
  const lights = ["red", "orange", "green"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const getColour = (index) => {
    return currentIndex === index ? lights[index] : "gray";
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="containers_Box"
        style={{
          display: "flex",
          height: "20rem",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          width: "10rem",
          flexDirection: "column",
        }}
      >
        {lights.map((light, index) => {
          return (
            <div
              key={index}
              style={{
                margin:"auto",
                backgroundColor: getColour(index),
                height: "3rem",
                width: "3rem",
                borderRadius: "50%",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Demo;

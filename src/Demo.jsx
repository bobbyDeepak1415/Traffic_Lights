import React, { useEffect, useState } from "react";

const Demo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const lights = ["red", "orange", "green"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const getColour = (index) => {

    
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        className="containers_Box"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          height: "22rem",
          width: "10rem",
          backgroundColor: "black",
        }}
      >
        {lights.map((light, index) => {
          return (
            <div
              key={index}
              className="container"
              style={{
                backgroundColor: getColour(index),
                height: "5rem",
                width: "5rem",
                borderRadius: "50%",
                margin: "auto",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Demo;

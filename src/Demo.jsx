import React from "react";

const Demo = () => {
  const lights = ["red", "orange", "green"];

  const getColour = (index) => {};

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
        }}
      >
        {lights.map((light, index) => {
          return (
            <div
              key={index}
              style={{
                borderColor: "gray",
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

import React from "react";

const Demo = () => {
  const lights = ["red", "orange", "green"];

  return (
    <div style={{ display: "flex" }}>
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
                backgroundColor: "gray",
                height: "5rem",
                width: "5rem",
                borderRadius: "50%",
                margin:"auto"
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Demo;

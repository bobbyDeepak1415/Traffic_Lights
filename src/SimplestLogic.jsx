// if the array values must keep looping

import React, { useEffect, useRef, useState } from "react";

export default function SimplestLogic() {
  const [currentStatus, setCurrentStatus] = useState("");

  const status = ["active", "offline", "busy", "unKnown"];

  const indexRef = useRef(0);

  useEffect(() => {
    const interValId = setInterval(() => {
      setCurrentStatus(status[indexRef.current]);
      indexRef.current = (indexRef.current + 1) % status.length;
    }, 1000);

    return () => clearInterval(interValId);
  });

  return <p>{currentStatus}</p>;
}

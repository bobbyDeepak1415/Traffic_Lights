import axios from "axios";
import React, { useEffect, useState } from "react";

const Demo = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character",
        );
        const result = response.data.results;
        setUsers(result);
      } catch (e) {
        console.log("failed to fetch", e);
      }
    };

    fetchData();
  });

  return (
    <div>
      <h2>Helllo</h2>
    </div>
  );
};

export default Demo;

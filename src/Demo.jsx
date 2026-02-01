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
        const sorted=[...result].sort((a,b)=>a.name.localeComapre(b.name))
        setUsers(sorted);
      } catch (e) {
        console.log("failed to fetch", e);
      }
    };

    fetchData();
  },[]);

  return (
    <div style={{ height: "100vh", backgroundColor: "slategray" }}>
      <h2>Helllo</h2>
      {users.map((user) => {
        return (
          <li key={user.id}>
            {user.name}
            <span>:--{user.status}</span>
          </li>
        );
      })}
    </div>
  );
};

export default Demo;

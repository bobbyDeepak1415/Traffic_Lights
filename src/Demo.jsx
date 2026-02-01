import axios from "axios";
import React, { useEffect, useState } from "react";

const Demo = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("All");

  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character",
        );
        const result = response.data.results;

        const uniqueStatuses = Array.from(result.map((user) => user.status));

        setStatuses(uniqueStatuses);
        setUsers(result);
      } catch (e) {
        console.log("failed to fetch", e);
      }
    };

    fetchData();
  }, []);

  const filteredUsers =
    filter === "All" ? users : users.filter((user) => user.status === filter);

  return (
    <div style={{ height: "100vh", backgroundColor: "slategray" }}>
      <h2>Helllo</h2>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        {statuses.map((status, index) => {
          return (
            <option key={index} value={status}>
              {status}
            </option>
          );
        })}
      </select>
      {filteredUsers.map((user) => {
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

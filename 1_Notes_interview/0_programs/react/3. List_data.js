import React, { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // Fetch data from the API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;


import React from 'react';
import UserList from './UserList';

const App = () => {
  return (
    <div>
      <h1>My React App</h1>
      <UserList />
    </div>
  );
};

export default App;

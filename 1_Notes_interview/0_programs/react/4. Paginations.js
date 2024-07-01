import React, { useState, useEffect } from "react";

const UserListPagination = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchUsers();
  }, [currentPage]); // Reload data when currentPage changes

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?_page=${currentPage}&_limit=5`,
      );
      const data = await response.json();
      // Extract the total count of items from the "X-Total-Count" header in the response
      const totalCount = Number(response.headers.get("X-Total-Count"));
      setTotalPages(Math.ceil(totalCount / 5)); // Assuming each page has 5 users
      setUsers(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

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
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      <p>
        Page {currentPage} of {totalPages}
      </p>
    </div>
  );
};

export default UserListPagination;


import React from 'react';
import UserListPagination from './UserListPagination';

const App = () => {
  return (
    <div>
      <h1>My React App</h1>
      <UserListPagination />
    </div>
  );
};

export default App;

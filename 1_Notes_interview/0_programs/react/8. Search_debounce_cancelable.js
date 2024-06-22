import React, { useState, useEffect } from "react";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let debounceTimer;

  useEffect(() => {
    // Cleanup function to cancel debounce timer
    return () => {
      clearTimeout(debounceTimer);
    };
  }, []);

  const debounce = (func, delay) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(func, delay);
  };

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    debounce(() => fetchSearchResults(term), 300); // Adjust debounce delay as needed
  };

  const fetchSearchResults = async (term) => {
    setLoading(true);
    try {
      // Simulated API call (replace with actual API endpoint)
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?q=${term}`,
      );
      const data = await response.json();
      setSearchResults(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Optimized Search Example</h2>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {searchResults.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;

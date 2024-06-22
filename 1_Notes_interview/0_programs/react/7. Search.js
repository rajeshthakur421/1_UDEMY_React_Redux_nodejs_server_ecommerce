import React, { useState, useEffect } from "react";

const SearchComponent = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Simulated data fetching on component mount using useEffect
  useEffect(() => {
    // Replace with actual data fetching logic from API or other source
    const fetchData = async () => {
      try {
        // Example API call
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Effect to update search results when searchTerm or items change
  useEffect(() => {
    const results = items.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setSearchResults(results);
  }, [searchTerm, items]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h2>Search Example</h2>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {searchResults.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;

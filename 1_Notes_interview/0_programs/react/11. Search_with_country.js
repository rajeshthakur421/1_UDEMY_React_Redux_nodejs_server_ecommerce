import React, { useState } from "react";

const SearchBar = () => {
  const countries = ["Afghanistan", "Albania", "Algeria", "Andorra"];

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter countries based on input value
    const filteredCountries = countries.filter((country) =>
      country.toLowerCase().includes(value.toLowerCase()),
    );
    setSuggestions(filteredCountries);
  };

  const handleSelectSuggestion = (value) => {
    setSearchTerm(value);
    setSuggestions([]);
  };

  return (
    <div>
      <h2>Search Bar with Autocomplete (Countries)</h2>
      <input
        type="text"
        placeholder="Search countries..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSelectSuggestion(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;

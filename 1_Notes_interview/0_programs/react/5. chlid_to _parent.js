// ParentComponent.js
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [childData, setChildData] = useState("");

  // Function to receive data from child component
  const handleDataFromChild = (data) => {
    setChildData(data);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      {/* Render child component and pass callback function */}
      <ChildComponent onDataUpdate={handleDataFromChild} />
      {/* Display data received from child */}
      {childData && <p>Data from child: {childData}</p>}
    </div>
  );
}

export default ParentComponent;


// ChildComponent.js
import React, { useState } from 'react';

function ChildComponent({ onDataUpdate }) {
  const [inputValue, setInputValue] = useState('');

  // Function to handle input change
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    // Pass data to parent component using callback function
    onDataUpdate(value);
  };

  return (
    <div>
      <h3>Child Component</h3>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
      />
    </div>
  );
}

export default ChildComponent;


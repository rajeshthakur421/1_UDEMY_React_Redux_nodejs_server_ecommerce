import React, { useState } from 'react';

// Define a functional component Timer
const Timer = () => {
  // State management using useState hook
  const [count, setCount] = useState(0); // Initialize state count with value 0

  // Function to increment count
  const increment = () => {
    setCount(count + 1); // Update count state by incrementing by 1
  };

  // Function to decrement count (if count is greater than 0)
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1); // Update count state by decrementing by 1
    }
  };

  // JSX for rendering the component
  return (
    <div>
      <h2>Timer: {count}</h2> {/* Display current value of count */}
      <button onClick={increment}>+1</button> {/* Button to increment count */}
      <button onClick={decrement}>-1</button> {/* Button to decrement count (if count > 0) */}
    </div>
  );
};

export default Timer; // Export Timer component for use in other parts of the application

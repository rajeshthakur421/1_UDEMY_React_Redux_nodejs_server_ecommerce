import React, { useState } from "react";

// Define a functional component TodoList
const TodoList = () => {
  // State management using useState hook
  const [todos, setTodos] = useState([]); // State for storing TODO items
  const [inputValue, setInputValue] = useState(""); // State for input field value

  // Event handler for input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update inputValue state with current input value
  };

  // Event handler for adding a new TODO item
  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      // Ensure input value is not empty or whitespace
      setTodos([...todos, inputValue.trim()]); // Add new TODO to todos state array
      setInputValue(""); // Clear input field after adding TODO
    }
  };

  // Event handler for removing a TODO item by index
  const handleRemoveTodo = (index) => {
    const newTodos = [...todos]; // Create a copy of todos array
    newTodos.splice(index, 1); // Remove TODO item at specified index
    setTodos(newTodos); // Update todos state with new array excluding removed item
  };

  // JSX for rendering the component
  return (
    <div>
      <h2>TODO List</h2>
      {/* Input field for entering new TODO item */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange} // Call handleInputChange on input change
        placeholder="Enter TODO"
      />
      {/* Button to add new TODO item */}
      <button onClick={handleAddTodo}>Add</button>
      {/* List of TODO items */}
      <ul>
        {/* Iterate over todos array and render each TODO item */}
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} {/* Display TODO item text */}
            {/* Button to remove TODO item */}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList; // Export TodoList component for use in other parts of the application

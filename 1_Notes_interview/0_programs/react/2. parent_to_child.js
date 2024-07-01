import React from "react";
import ChildComponent from "./ChildComponent"; // Importing ChildComponent from "./ChildComponent"

// Define a functional component ParentComponent
const ParentComponent = () => {
  const name = "Alice"; // Define a variable 'name' with value "Alice"
  const age = 30; // Define a variable 'age' with value 30

  // JSX for rendering the component
  return (
    <div>
      <h1>Parent Component</h1> {/* Heading for Parent Component */}
      <ChildComponent name={name} age={age} />{" "}
      {/* Rendering ChildComponent with props 'name' and 'age' */}
    </div>
  );
};

export default ParentComponent; // Export ParentComponent for use in other parts of the application


import React from 'react';

// Define a functional component ChildComponent
const ChildComponent = (props) => {
  // JSX for rendering the component
  return (
    <div>
      <h2>Child Component</h2> {/* Heading for Child Component */}
      <p>Name: {props.name}</p> {/* Displaying prop 'name' passed from ParentComponent */}
      <p>Age: {props.age}</p> {/* Displaying prop 'age' passed from ParentComponent */}
    </div>
  );
};

export default ChildComponent; // Export ChildComponent for use in other parts of the application

import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const name = "Alice";
  const age = 30;

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent name={name} age={age} />
    </div>
  );
};

export default ParentComponent;


import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

export default ChildComponent;

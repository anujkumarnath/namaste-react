import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Title component
const Title = () => <h1>Title</h1>;

// Heading component 
// This is component composition: using other components to create a new component
const HeadingComponent = () => (
  <div>
    <Title />
  </div>
);

root.render(<HeadingComponent />);
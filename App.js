import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// React element
const element = <h1>React element</h1>;

// Putting react element inside a component
const Title = () => <div>{element}</div>;

const HeadingComponent = () => (
  <div>
    <Title />
    {Title()}
    <Title></Title>
  </div>
);

// Eliminating the need for extra parent div
const HeadingComponent2 = () => (
  <React.Fragment>
    <Title />
    {Title()}
    <Title></Title>
  </React.Fragment>
);

// It's same as below  
const HeadingComponent3 = () => (
  <>
    <Title />
    {Title()}
    <Title></Title>
  </>
);

// We can also put React component inside react element
const reactElement = <div>{<HeadingComponent3 />}</div>;


root.render(reactElement);
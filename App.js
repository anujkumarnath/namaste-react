// We want to create the following nested HTML structure using react:
// <div id="parent">
//   <div id="child">
//     <h1>I am an h1 tag</h1>
//     <h2>I am an h2 tag</h2>
//   </div>
// </div>


// created the root for react to add children to
const root = ReactDOM.createRoot(document.getElementById("root"));

// creating the react element corresponding to parent div tag 
const parent = React.createElement(
  "div",
  { id: "parent" },
  // creating the react element corresponding to child div tag
  React.createElement(
    "div",
    { id: "child" },
    // specifying an array of children instead of a single child
    [
      // creating the react element corresponding to h1 tag 
      React.createElement("h1", {}, "I am h1 tag"),
      // creating the react element corresponding to h2 tag 
      React.createElement("h2", {}, "I am h2 tag"),
    ]
  )
);
// logging the parent react element to see what's inside
console.log(parent);

// telling react to generate the structure that browser understands and
// to put the html structure to the DOM node specified the root react element (DOM node with id="root")
root.render(parent);
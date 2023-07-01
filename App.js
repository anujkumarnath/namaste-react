// creating the React elemement for h1
const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React!");
// defining the root element(in the HTML DOM) for react to operate on
const root = ReactDOM.createRoot(document.getElementById("root"));
// adding the created HTML element to the root
root.render(heading);

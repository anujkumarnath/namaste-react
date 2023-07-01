// creating the html elemement
const heading = React.createElement("h1", {}, "Hello World from React!");
// defining the root element(in the HTML DOM) for react to operate on
const root = ReactDOM.createRoot(document.getElementById("root"));
// adding the created HTML element to the root
root.render(heading);

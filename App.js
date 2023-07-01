// 1. creating the React element for h1
// 2. passing attributes to the h1 tag
// 3. specifying children of the h1 tag
// 4. 2 and 3 combined - we are passing props to the heading React element:
// props: { id: 'heading', xyz: 'abc', children: 'Hello World from React!' }
const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React!");

console.log(heading); // returns an js object representing the heading react element

// defining the root element(in the HTML DOM) for react to operate on
const root = ReactDOM.createRoot(document.getElementById("root"));

// adding the created HTML element to the root
// it takes the heading object, creates the h1 element that browser understands and put this into
// the root we have specified in line 11
root.render(heading);

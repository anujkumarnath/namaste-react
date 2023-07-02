import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Creating React element using JSX
const heading = <h1 id="heading" className="heading" tabIndex={5}>Namaste React 🚀</h1>;

root.render(heading);
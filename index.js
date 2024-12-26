import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";

// JSX
const heading = <h1 className="">Hi...This is Heading tag</h1>;
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h2", {}, "Lorem ipsum dolor sit amet. - 1"),
    React.createElement("p", {}, "this is para - 1")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h2", {}, "Lorem ipsum dolor sit amet. - 2"),
    React.createElement("p", {}, "this is para - 2")
  ),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

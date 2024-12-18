// const heading = document.createElement("h1");
// heading.innerHTML = "Hi, this is Heading";

// const para = document.createElement("p");
// para.innerHTML = "This is Paragraph";

// const root = document.getElementById("root");
// root.appendChild(para);

// const heading = React.createElement(
//   "h1",
//   { class: "head" },
//   "Hi, this is React element"
// );
// console.log(heading);
// // console.log(heading.props.children);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

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

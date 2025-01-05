import React, { use, useState } from "react";

function StateUse() {
  const [data, setData] = useState("5154545");
  const [show, setShow] = useState(true);

  function ChangeText() {
    setData("React Hook");
  }

  // function handleShow() {
  //   setShow(false);
  // }

  function handleToggle() {
    // setShow(!show);
    setShow((prev) => !prev);
  }

  // const x = 10;
  // if (x > 5) {
  //   console.log("Red");
  // } else {
  //   console.log("Green");
  // }

  // const result = x > 5 ? "Red" : "Blue";
  // console.log(result);

  return (
    <div>
      <button onClick={ChangeText}>Click Me</button>
      <p>{data}</p>
      <button onClick={handleToggle}>SHOW</button>
      <h2 style={{ color: `${show ? "green" : "red"}` }}>
        {show ? "Bokaro" : "Dhanbad"}
      </h2>
    </div>
  );
}

export default StateUse;

import React, { useEffect, useState } from "react";
import User from "./User";
import Student from "./Student";
import Employee from "./Employee";
import NewStudent from "./NewStudent";
import Post from "./Post";
import StateUse from "./StateUse";
import Counter from "./Counter";

function App() {
  const [post, setPost] = useState([]);

  // Normal Function
  // Demo();
  // function Demo() {
  //   console.log(123);
  // }

  //Arrow Function
  // const ArrowFun = () => {
  //   console.log("Arrow Function");
  // };
  // ArrowFun();

  // useEffect(function () {});

  // useEffect(() => {
  //   console.log("useEffect rendered");
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      console.log(result);
      setPost(result);
    };
    fetchData();
  }, []);

  console.log("App Rendered");

  return (
    <div>
      {/* <User data={arrObj} /> */}
      {/* <NewStudent /> */}
      {/* <Post /> */}
      {/* <StateUse /> */}
      <Counter />

      {post.map((post) => (
        <p>{post.name}</p>
      ))}
    </div>
  );
}

// function User() {
//   return <p>Hi... I m a New User</p>;
// }

// function Student() {
//   return <p>I am a Student</p>;
// }

export default App;

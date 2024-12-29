import React from "react";
import User from "./User";
import Student from "./Student";
import Employee from "./Employee";

function App() {
  const userName = "Raza";
  const student = "Aman";
  const chUser = "Saif";

  const employee = {
    name: "Raza",
    city: "Bokaro",
    mobile: "8875847859",
  };

  return (
    <div>
      <h1>Hi...</h1>
      <p>I m para...</p>
      <User user={userName} chUser={chUser} />
      <Student student={student} />
      <Employee data={employee} />
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

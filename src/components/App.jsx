import React, { useState } from "react";

const num = [2, 4, 5, 7];
// const num = "vdsffsdf";
// console.log(typeof num);
// console.log(Array.isArray(num));

const student = [
  {
    id: 1,
    name: "Muhammad Raza",
    studentId: 1234,
  },
  {
    id: 2,
    name: "Muhammad Aman",
    studentId: 5874,
  },
  {
    id: 3,
    name: "Muhammad Saif",
    studentId: 3547,
  },
];

function App() {
  const [fname, setFname] = useState("");

  const handleName = (e) => {
    setFname(e.target.value);
    // console.log(e.target.value);
    // console.log(e);
  };

  const handleShow = () => {
    alert(`My name is ${fname}`);
  };

  return (
    <div className="mb-56 mx-[180px]">
      <h1 className="text-5xl text-orange-800 text-center mt-10 bg-yellow-400 py-5 px-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        molestias amet sequi quae aliquid. Vero eligendi error dolorem? Quis,
        doloremque!
      </h1>
      <button className="t-5 ml-5 px-8 py-6 bg-blue-900 mt-4 text-white hover:text-blue-950 rounded-md hover:bg-cyan-300 transition-all">
        Read more
      </button>
      <div className="m-10 w-64 h-[350px] bg-[#1268d0] rounded-[35px]"></div>
      <br />
      <div className="my-5 grid grid-cols-3 gap-4">
        {student.map((student) => (
          <div
            key={student.id}
            className="border-2 border-pink-500 rounded-md p-5"
          >
            <h2>{student.name}</h2>
            <p>{student.studentId}</p>
          </div>
        ))}
      </div>

      <div className="my-5">
        <form>
          <input
            value={fname}
            onChange={handleName}
            type="text"
            className="px-5 w-[300px] py-4 border-2 border-slate-400"
          />
          <h1 className="mt-5 text-2xl">My name is {fname}</h1>
          <button onClick={handleShow}>Click me</button>
        </form>
      </div>
    </div>
  );
}

export default App;

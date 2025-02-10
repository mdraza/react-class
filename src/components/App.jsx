import React from "react";

function Header() {
  return (
    <div className="shadow-md">
      <div className="flex justify-between mx-[100px] h-[70px] items-center">
        <div className="w-[180px]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW91-cIAIp0c7Bne3kPYS3tAuFjsoqsVviAg&s"
            alt="logo"
          />
        </div>
        <div>
          <ul className="flex gap-5 text-xl items-center cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="mx-[100px] mt-8 flex justify-between">
      <input
        className="px-5 py-3 w-[90%] border-2 border-slate-300 rounded-md"
        type="search"
        placeholder="Search restaurant"
      />
      <button className="px-6 py-3 text-[18px] text-slate-50 rounded-md bg-orange-500 ">
        Search
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

export default App;

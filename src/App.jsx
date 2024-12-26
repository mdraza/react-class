import Student from "./Student";
import User from "./User";

function App() {
  return (
    <div className="main">
      <div className="web">
        <h1>Admin</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          voluptatibus?
        </p>
        <button>Read More</button>
      </div>
      <User name="Muhammad Razaullah" />
      <Student />
    </div>
  );
}

export default App;

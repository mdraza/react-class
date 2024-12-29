import ChildUser from "./ChildUser";

function User({ user, chUser }) {
  console.log(user);
  return (
    <div className="web">
      <h1>User - {user}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis,
        voluptatibus?
      </p>
      <button>Read More</button>

      <ChildUser chUser={chUser} />
    </div>
  );
}

export default User;

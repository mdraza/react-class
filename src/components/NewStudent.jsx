import STUD_DATA from "../utils/data.json";

function NewStudent() {
  return (
    <div>
      {STUD_DATA.map((data) => (
        <div className="web">
          <h2>{data.name}</h2>
          <p>Username: {data.username}</p>
          <p>Email: {data.email}</p>
          <address className="web">
            <h3>Address</h3>
            <p>Street: {data.address.street}</p>
            <p>City: {data.address.city}</p>
            <p>Zipcode: {data.address.zipcode}</p>
          </address>
        </div>
      ))}
    </div>
  );
}

export default NewStudent;

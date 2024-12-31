import ChildUser from "./ChildUser";

function User({ data }) {
  // const {id, name, age, mobile} = data;
  return (
    <div>
      {data.map((data) => (
        <div className="web" key={data.id}>
          <h2>{data.name}</h2>
          <h4>Age: {data.age}</h4>
          <h4>Mobile: {data.mobile}</h4>
        </div>
      ))}
    </div>
  );
}

export default User;

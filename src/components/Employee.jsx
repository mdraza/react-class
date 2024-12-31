function Employee({ data }) {
  console.log(data);
  const { id, name, city, mobile } = data;
  return (
    <div className="web">
      <h1>Name: {name}</h1>
      <h3>City: {city}</h3>
      <h4>Mobile Number: {mobile}</h4>
    </div>
  );
}

export default Employee;

function Employee({ data }) {
  console.log(data);
  return (
    <div className="web">
      <h1>Name: {data.name}</h1>
      <h3>City: {data.city}</h3>
      <h4>Mobile Number: {data.mobile}</h4>
    </div>
  );
}

export default Employee;

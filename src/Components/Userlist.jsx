import { Link } from "react-router-dom";

function Userlist() {
  const userdata = [
    { id: 1, name: "AKASH" },
    { id: 2, name: "sajid" },
    { id: 3, name: "salem" },
    { id: 4, name: "Ali" }
  ];

  return (
    <div style={{marginLeft:"20px"}}> 
      <h1>User component</h1>

      {userdata.map((item) => (
        <div key={item.id}>
          <h4>
            <Link to={"/user/" + item.id}>
              {item.name}
            </Link>
          </h4>
        </div>
      ))}
<hr />
      <h1>Userlist with name</h1>

      {userdata.map((item) => (
        <div key={item.id}>
          <h4>
            <Link to={"/user/" + item.id +"/"+ item.name}>
              {item.name}
            </Link>
          </h4>
        </div>
      ))}


    </div>
  );
}

export default Userlist;
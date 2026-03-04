import { Link, useParams } from "react-router-dom";

function Userdetails() {
 const paramsdata  = useParams();
 console.log(paramsdata);

  return (
   <div>
      <h1>Userdetails component</h1>
      <h2>userid is :{paramsdata.id}</h2>
      </div>

  );
}

export default Userdetails;
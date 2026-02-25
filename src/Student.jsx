import { useState } from "react";
// function Student({name}){
//         return(
//                 <div>
//                         <h1>student component</h1>
//                        <h1>name:{name}</h1>
//                 </div>
//         )
// }
// export default Student;

// function Student({ name = "New User" }) {
//   return (
//     <div>     
//       <h2>Hi, {name}</h2>
//        {/* <h1>Student Component</h1> */}
//     </div>
//   );
// }

// export default Student;

// function Student(){
//   const[value,setvalue] =useState("Akash")
//   return(
//     <div>
//       <h1>input field value</h1>
//       <input type="text" value = {value} onChange={(event)=>setvalue(event.target.value)} placeholder="Enter user name" />
//       <h1>{value}</h1>
//       <button onClick={()=>setvalue("")}>clear</button>
//     </div>
//   )
// }
// export default Student;
function Student(){
  const[name,setname] = useState("");
  const[password,setpassword] = useState("");
  const[email,setemail] = useState("");
  return(
    <div>
      <h1>input field value</h1>
      <form action="" method="get">
        <input type="text" value={name} onChange={(event)=>setname(event.target.value)} placeholder="enter name" />
        <br /><br />
        <input type="text" value={password} onChange={(event)=>setpassword(event.target.value)} placeholder="enter name" />
        <br /><br />
        <input type="text" value={email} onChange={(event)=>setemail(event.target.value)} placeholder="enter name" />
        <br /><br />
        <button>submit</button> <br /><br />
        <button onClick={()=>{setname(""),setemail("");setpassword("")}}>clear</button>
        <h3>{name}</h3>
        <h3>{password}</h3>
        <h3>{email}</h3>
      </form>
    </div>
  )
}
export default Student;
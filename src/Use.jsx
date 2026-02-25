// function Use({displayname,name,getuser}){

import { useTransition } from "react";
import { useRef, useState } from "react";

           
//  return(
//  <div>
//  <button onClick={()=>displayname(name)}>displayname</button>       
//  <button onClick={()=>getuser()}>userbtn</button>        
          
//  </div>             
//  )             
// }
// export default Use;

// 
// import { useFormStatus } from "react-dom";

// function Use() {

//   const handlesubmit = async () => {
//     await new Promise((res) =>
//       setTimeout(res, 2000)
//     );

//     console.log("submit");
//   };

//   function CustomForm() {
//     const { pending } = useFormStatus();
//     console.log(pending);

//     return (
//       <div>
//         <input type="text" placeholder="enter name" /><br />
//         <input type="text" placeholder="password" /><br />

//         <button type="submit" disabled={pending}>{pending?"submiting" :"submited"}</button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>useFormStatus Hook in React 19</h1>

//       <form action={handlesubmit}>
//         <CustomForm />
//       </form>

//     </div>
//   );
// }

// export default Use;


// import { useTransition } from "react";

// function Use() {
//   const[pending,starttransition] = useTransition();
//   const handlebutton =async ()=>{
//  starttransition(async()=>{
//     await new Promise(res=>setTimeout(res,2000))
//  })


//   }
//   return (
//     <div>
//       <h1>usetransition Hook in React 19</h1>
// <button disabled={pending} onClick={handlebutton}>click</button>
      

//     </div>
//   );
// }

// export default Use;




function Use() {
  const [users, setusers] = useState([]);
  const [user, setuser] = useState('');

  const handleaddusers = () => {
    setusers([...users, user]);
  };
const total = users.length
const last = users[users.length-1]
const unique = [...new Set(users)].length
 

  return (
    <div>
      <h2>Derived state in react</h2>
      <h3>Total user:{total}</h3><br />
      <h3>last user:{last}</h3> <br />
      <h3>Total unique user:{unique}</h3>
      <input
        type="text"
        placeholder="enter name"
        value={user}
        onChange={(event) => setuser(event.target.value)}
      />
      <button onClick={handleaddusers}>adduser</button>
      <ul>
        {users.map((item, index) => (
         <h4 key={index}>{item}</h4>
        ))}
      </ul>
    </div>
  );
}

export default Use;
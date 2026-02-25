import { useState } from "react";
// import User from "./User";

function Counter() {
  // const [count, setCount] = useState(0);
  // const[counter,setcounter] = useState(10);
  const [show,setshow] = useState(true);
 
  return (
    <div>
      {/* <h1>Counter: {count}</h1>
      <h1>Rcounter:{counter}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setcounter(counter - 1)}>decrement</button> */}
       <h1>togglebutton</h1>
       {/* <button onClick={()=>setshow(!show)}>togglebutton</button> */}
    {/* {
      show ? <h1>Showbutton</h1>:<h1>hidebutton</h1>
    } */}
{/*     
    {
      show ?<User/>:<h1>hidecomponent</h1>
    } */}
    

    </div>
  );
}

export default Counter;

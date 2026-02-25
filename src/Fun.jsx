import { useState } from "react";
function Call() {
//   function callFun() {
//     alert("function callfun");
//   }

//   const fruit = (name)=>{
//         alert(name);
//   }
   const[fruit,setfruit] = useState('apple');
      function changefruit(){
        setfruit("mango")
      }
  return (
    <>
    <h1>{fruit}</h1>
    <button onClick={changefruit}>changefruit</button>
      {/* <button onClick={callFun}>Click</button>
      <button onClick={()=>fruit('apple')}>apple</button>
      <button onClick={()=>fruit('mango')}>mango</button> */}
    </>
  );
}

export default Call;

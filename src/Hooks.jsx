// import { useRef } from "react";
// function Hooks(){
//  const inputref = useRef(null); 
// const inputhandler = ()=>{
// inputref.current.focus();
// inputref.current.style.color = "red";
// inputref.current.placeholder = "enter password";
// inputref.current.value = "123";
// }
// const toggleHandler = () => {
//   if (inputref.current.style.display !== "none") {
//     inputref.current.style.display = "none";
//   } else {
//     inputref.current.style.display = "inline";
//   }
// };
//  return(
// <div>
//     <h1>Useref hook in react </h1> 
//     <button onClick={toggleHandler}>toggle</button> <br />
//     <input ref={inputref} type="text" placeholder="enter name" /><br /> 
//     <button onClick={inputhandler}>input field handler</button>             
// </div>
//    )           
// }
// export default Hooks;

import { forwardRef } from "react";

// import { useRef } from "react";

// function Hooks() {
// const inputref = useRef();
// const passwordref = useRef(); 
//   const handleform = (event) => {
//     event.preventDefault(); 
//    const user = document.querySelector("#user").value;
//    const password = document.querySelector("#password").value;
//   console.log(user,password);
           
//   };

//   const handleformref = (event)=>{
//    event.preventDefault();
//    const user = inputref.current.value;
//    const password  = passwordref.current.value = "123"
//    console.log("handleformref",user,password);
              
//   }

//   return (
//     <div>
//    <h1>Uncontrolled component</h1>
//       <form onSubmit={handleform}>
//         <input type="text" id="user" placeholder="enter name" /> 
//         <br /><br />
//         <input type="text" id="password" placeholder="enter password" />  
//         <br /><br />
//         <button type="submit">Submit</button>
//       </form>  
//       <hr />  
//          <h1>Uncontrolled component with useref</h1>
//       <form onSubmit={handleformref}>
//         <input type="text" ref={inputref}  placeholder="enter name" /> 
//         <br /><br />
//         <input type="text" ref={passwordref} placeholder="enter password" />  
//         <br /><br />
//         <button type="submit">Submit ref</button>
//       </form>      
//     </div> 
//   );           
// }

// export default Hooks;


// import { useRef } from "react";
// import Use from "./Use";
// function Hooks() {
// const displayname = (name)=>{
// alert(name)              
// }
// const getuser = ()=>{
// console.log("get user function");              
// }
//   return (
// <div> 
// <h1>Call parent component function from child component</h1>   
// <Use displayname={displayname} name="Akash"getuser={getuser}/>               
// <Use displayname={displayname} name="khan"getuser={getuser}/>               
// <Use displayname={displayname} name="Aslam"getuser={getuser}/>               
// </div> 
//   );           
// }

// export default Hooks;

// function Hooks(props,ref){
//  return(
//   <div>
//   <h1>forward ref Hooks version 18</h1>
//   <input type="text" placeholder="enter name" ref={ref}/>   
//   </div>
//  ) 
// }
// export default forwardRef(Hooks);

function Hooks(props){
 return(
  <div>
  <h1>forward ref Hooks</h1>
  <input type="text" placeholder="enter name" ref={props.ref}/>   
  </div>
 ) 
}
export default Hooks;
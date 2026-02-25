// import { useEffect, useState } from "react";

// function Useeffect() {
// const [counter,setcounter] = useState(0);  
// const [data,setdata] = useState(0);  
 
// useEffect(()=>{
// // callonce();
// counterfunction()
// },[counter])

// function counterfunction(){
//               console.log("counterfucntion",counter)
// }

//  function callonce(){
//               console.log("function called");
//  }


//   return (
//     <div>
//    <button onClick={()=>setcounter(counter+1)}>counter{counter}</button><br />
//    <button onClick={()=>setdata(data+1)}>data{data}</button><br />
//     </div>
//   );
// }

// export default Useeffect;


// function Useeffect({count,data}){
//  function handlecounter(){
//    console.log("handle function called");           
//  }   

//  function handledata(){
//  console.log("handledata called")
//  }
 
//  useEffect(()=>{
// handlecounter();
//  },[])
//  useEffect(()=>{
// handledata();
//  },[count,data])
 

//   return(
//    <div>
//       <h1>counter value: {count}</h1>        
//       <h1>data value: {data}</h1>        
//    </div>           
//   )            
// }
// export default Useeffect;

// 

import styled from 'styled-components'

function Useeffect(){
//   const Heading = styled.h3`
//     color: green;
//     font-size: 20px;
//     border: 1px solid black;
//     border-radius:5px;
//     margin :20px;
//     padding:10px
//   `
const Heading =styled.h1 ({
   color: 'green',
    fontSize:' 20px',
    border: '1px solid black',
    borderRadius:'5px',
    margin :'20px',
    padding:'10p',
})
const stylebtn= styled.button`
color:red;
width:130px;
height:40px;
margin:20px;

`
 
  return(
   <div>
     <h1>styled component</h1>
     <Heading>hello world</Heading>     
     <Heading>hello world1</Heading>     
     <Heading>hello world2</Heading>     
     <Heading>hello world3</Heading>  
     <stylebtn>login</stylebtn>   
   </div>           
  )            
}

export default Useeffect;
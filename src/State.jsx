// import { useState } from "react";

// function State(){
// const[data,setdata] = useState({
//  name:"Akash",
//  address:{
//  city:"lahore",
//  country:"pakistan"             
//  }             
// })
// const handlename= (val)=>{
//  data.name = val;

// console.log(data);
// setdata({...data})

// } 
// const handlecity = (city)=>{
// data.address.city = city;  
// setdata({...data,address:{...data.address,city}})            
// console.log(data);

// }            
// return(
// <div>
// <h1>update object in state</h1>
  
// <input type="text" placeholder="enter name" onChange={(event)=>handlename(event.target.value)} /> 
// <input type="text" placeholder="enter city" onChange={(event)=>handlecity(event.target.value)} /> 
// <h2>Name:{data.name}</h2>
// <h2>city:{data.address.city}</h2>     
// <h2>Country:{data.address.country}</h2>     
// </div>              
// )              
// }
// export default State;

// import { useState } from "react";

// function State(){
// const[data,setdata] = useState([
// 'Akash','khan','peter','ali'              
// ]);

// const[datadetail,setdatadetail] = useState([
// {
// name:"Akash",
// age:23              
// },            
// {
// name:"Ali",
// age:24              
// },            
// {
// name:"Ahmad",
// age:25              
// },            
// ])

// const handleuser = (name)=>{
// data[data.length-1] = name;   
// setdata([...data])           
//  console.log(data)
            

// }
// const handleage = (age)=>{
// datadetail[datadetail.length-1].age= age;   
// setdatadetail([...datadetail])           
//  console.log(datadetail)
            

// }
         
// return(
// <div>
// <h1>update array in state</h1>
// <input type="text" placeholder="enter last name" onChange={(e)=>handleuser(e.target.value )}/>

//  {
// data.map((item,index)=>(
//   <h3 key={index}>{item}</h3>
// ))
// }   
// <hr />
// <input type="text" placeholder="enter last age" onChange={(e)=>handleage(e.target.value )}/>

// {
//   datadetail.map((item, index) => (
//     <h4 key={index}>{item.age}</h4>
//   ))
// }
// </div>              
// )              
// }
// export default State;

// import { useId } from "react";
// function State(){
//  const name = useId(); 
//  const password = useId(); 
//  const terms = useId(); 
//  const skills = useId(); 
// return(
// <div>
// <h1>Useid Hook in react</h1> 
// <form action="">
// <label htmlFor={name}>Enter user name</label> <br />
// <input id="name" type="text" placeholder="enter name" />  <br />
// <label htmlFor={password}>Enter user password</label> <br />
// <input id="password" type="text" placeholder="enter password" /> <br /> 
// <label htmlFor={skills}>Enter user skills</label> <br />
// <input id="skills" type="text" placeholder="enter skills" /> <br /> 
// <label htmlFor={terms}>terms and condition</label> <br />
// <input id="terms" type="text" placeholder="enter terms" />  
// </form>
// </div>  
// )  
// }
// export default State;

import { useState } from "react";
import Collage from "./Collage";
import SubjectContext from "./SubjectContext";

function State() {
  const [subject, setsubject] = useState("English");

  return (
    <div style={{ backgroundColor: "yellow", padding: 20 }}>
      <SubjectContext.Provider value={subject}>
        
        <select
          value={subject}
          onChange={(event) => setsubject(event.target.value)}
        >
          <option value="">Select value</option>
          <option value="Math">Math</option>
          <option value="English">English</option>
          <option value="Computer">Computer</option>
        </select>

        <h1>Context Api</h1>

        <button onClick={() => setsubject("")}>
          Clear Subject
        </button>

        <Collage />
      </SubjectContext.Provider>
    </div>
  );
}

export default State;
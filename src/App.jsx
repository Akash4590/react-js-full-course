import React, { useState } from 'react';
import Header from './Header.jsx';
import Usercomponent, { Setting, userkey } from './Usercomponent.jsx';
import { Profile } from './Usercomponent.jsx';
import Fun from './Fun.jsx'
import Counter from './Counter.jsx';
import User from './User.jsx';
import Props from './Props.jsx';
import College from './College.jsx';
import Student from './Student.jsx';
import Wrapper from './Wrapper.jsx';
import Checkbox from './Checkbox.jsx';


function App(){
// let name = "Akash";
// let age  = 29;
// let email = "abc@gmail.com";

// const userobject = {
//   name:'Akash khan',
//   age:22,
//   email:"abc@gmail.com"
// }
// const userobject1 = {
//   name:'Ali khan',
//   age:25,
//   email:"ali@gmail.com"
// }
// const userobject2 = {
//   name:'khan',
//   age:32,
//   email:"khan@gmail.com"
// };

// let colleges = ["IIT","NIT","PGC","vit"];

// const[student,setstudent] = useState();
return (
  <>
 <div>


{/* <Fun/> */}
{/* <Counter/> */}
{/* <User/> */}
{/* <Usercomponent/>
<Profile/>
<Setting/> */}
{/* <Wrapper color= "orange">
  <h1>Hello World</h1>
  <p>This is wrapped content</p>
</Wrapper>
<Wrapper>
  <h1>Hello khan</h1>
  <p>This is wrapped content</p>
</Wrapper> */}

{/* <button onClick={()=>setstudent("Akash")}>update</button>
{student&&<Student name = {student}/>} */}
{/* <College names ={colleges}/> */}
{/* <Props name = "Akash khan" age = {29} email ="abc@gmail.com"/> */}
{/* <Props name = {name} age = {age} email ={email}/> */}
{/* <Props name = {userobject}/>
<Props name = {userobject1}/>
<Props name = {userobject2}/> */}
  {/* <Header/> */}

    {/* <Student name="Akash khan" />
    <Student name = "Aslam"/>
    <Student name = "rahul"/>
    <Student />
    
   */}
   {/* <Student/> */}
   {/* <Checkbox/> */}
   <Reuse />
  <h1>App jsx component</h1>

  {/* <h4>{userkey}</h4> */}
 </div>
</>
)

}
export default App;
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
import Reuse from './Reuse.jsx';
import Useeffect from './Useeffect.jsx';
import Hooks from './Hooks.jsx';
import Use from './Use.jsx';
import State from './State.jsx';
import usetoggle from './usetoggle.jsx';


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

  const [value, toggleValue] = usetoggle(true);
console.log("value..",value);
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
   
  <h1 className='color-red-500, text-center font-bold'>App jsx component</h1>
     {/* <Button>Click Me</Button> */}
   
 

 {/* <Reuse /> */}
 {/* <Useeffect /> */}
 {/* <Hooks /> */}
 {/* <Use /> */}
 {/* <State /> */}
 <h1>App jsx component</h1>

        <button onClick={() => toggleValue()}>
          Toggle Heading
        </button>
        <br />

        <button onClick={() => toggleValue(false)}>
          Hide Heading
        </button>
        <br />

        <button onClick={() => toggleValue(true)}>
          Show Heading
        </button>
        <br />

        <h1>Custom Hook</h1>

        {value && <h2>Custom hook in React</h2>}
 
  {/* <h4>{userkey}</h4> */}
 </div>
</>
)

}
export default App;
import { useState } from "react";



// function Checkbox(){
// //            const [skills,setskills] = useState(['php','python']);  
//            const [skills,setskills] = useState([]);  
//            const handleskills = (event)=>{
//               console.log(event.target.value,event.target.checked);
//               if(event.target.checked){
//                setskills([...skills,event.target.value])
//               }
//               else{
//                             setskills(skills.filter((item)=>item!==event.target.value))
//               }
//            }

//         return(
//               <div>
//                <h1>Select your skill</h1> 
//               <input onChange={handleskills} type="checkbox" id="php" value="php"/>
//               <label htmlFor="php">Php</label> <br />

//               <input onChange={handleskills} type="checkbox" id="js" value="javascript"/>
//               <label htmlFor="js">Javascript</label><br />

//               <input onChange={handleskills} type="checkbox" id="py" value="python"/>
//               <label htmlFor="py">Python</label><br />

//               <input onChange={handleskills} type="checkbox" id="node" value="node"/>
//               <label htmlFor="node">Node</label><br />

//               <input onChange={handleskills} type="checkbox" id="swf" value="swift"/>
//               <label htmlFor="swf">Swift</label>
//                   <h1>{skills.toString()}</h1>      
//               </div>
//         )      
// }
              

// export default Checkbox;



// radiobutton and dropdwon

function Checkbox(){
          const [gender, setGender] = useState("male");
          const[city,setcity] =useState("Multan");

         return(
           <div>
              <h4>Select gender</h4>
              <input onChange={(event)=>setGender(event.target.value)} type="radio" name="gender" id="male"value = "male"checked={gender=='male'} />
              <label htmlFor="male">male</label>
              <input onChange={(event)=>setGender(event.target.value)} type="radio" name="gender" id="female"value = "female"checked={gender=='female'} />
              <label htmlFor="female">female</label>
              <h3>selectgender:{gender}</h3>
              <br /><br />
               <h4>Select city</h4>
               <select defaultValue={"Multan"} onChange={(event)=>setcity(event.target.value)} >
                            <option value="Jatoi">Jatoi</option>
                            <option value="Alipur">Alipur</option>
                            <option value="Multan">Multan</option>
               </select>
               <h2>city:{city}</h2>

           </div>   
         )     
}
             

export default Checkbox;
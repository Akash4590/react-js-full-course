import { useState } from "react";

function User(){
 const [count,setcount] = useState(0);

        return(
           <>
           <h1>User component</h1>
           <p>How we can write multiple condition in react</p>
              <h1>{count}</h1>
                        <button onClick={()=>setcount(count+1)}>counter</button>
                        {
                                 count === 0?<h1>condition0</h1>:
                                 count === 1?<h1>condition1</h1>:
                                 count === 2?<h1>condition2</h1>:
                                 count === 3?<h1>condition3</h1>:
                                 count === 4?<h1>condition4</h1>:
                                 count === 5?<h1>condition5</h1>:
                                 count === 6?<h1>condition6</h1>:
                                 <h1>otherconditon</h1>     
                                
                        }
                
           </>
                     
        );
}

export default User;
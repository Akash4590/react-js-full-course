import { useState } from "react";
import Loop from "./Loop";
import Useeffect from "./Useeffect";
import img from "./assets/img.jpeg"
function Reuse(){
  const [cardstyle,setcardstyle] = useState(
    {
    width: "250px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
    padding: "15px",
    textAlign: "center",
    fontFamily: "Arial",
    backgroundColor: "#fff"
  }
  )
  const [textcolor,settextcolor] = useState("#555")
const updatetheme=(bgcolor,textcolor)=>{
  console.log(bgcolor,textcolor)
setcardstyle({...cardstyle, backgroundColor:bgcolor});
settextcolor(textcolor)
}

return(
<>

<h1 style={{color:"red"}}>inline style in react js</h1>
<button onClick={()=>updatetheme("#ccc","green")}>graytheme</button><br />
<button onClick={()=>updatetheme("white","black")}>defaulttheme</button>
<div style={{display:"flex",flexWrap:"wrap"}}>
  <div style={cardstyle}>
  <img
    src={img}
    alt="myimg"
    style={{
      width: "100%",
      height: "200px",
      borderRadius: "10px",
      objectFit: "cover",
      marginBottom: "10px"
    }}
  />
<div style={{color:textcolor}}>
  <h4 style={{ margin: "10px 0 5px 0" }}>Akash Khan</h4>

  <p style={{ fontSize: "14px",}}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ipsam nemo veritatis officiis facere assumenda accusamus itaque?
  </p>
  </div>
</div>
<div
  style={cardstyle}
>
  <img
    src={img}
    alt="myimg"
    style={{
      width: "100%",
      height: "200px",
      borderRadius: "10px",
      objectFit: "cover",
      marginBottom: "10px"
    }}
  />

  <div style={{color:textcolor}}>
    <h4 style={{ margin: "10px 0 5px 0" }}>Akash Khan</h4>

  <p style={{ fontSize: "14px"}}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ipsam nemo veritatis officiis facere assumenda accusamus itaque?
  </p>
  </div>
</div>
</div>
</>
)
}
export default Reuse;

// import { useState } from "react";
// import Loop from "./Loop";
// import Useeffect from "./Useeffect";

// function Reuse(){
// const [count,setcount] = useState(0)
// const [data,setdata] = useState(0)
// const [display,setdisplay] = useState(false)

// //  const username = [
// //   {
// //     id: 1,
// //     name:"Akash",
// //     age:22,
// //     email:'abc@gmail.com'  },
// //   {
// //     id:2,
// //     name:"saim",
// //     age:23,
// //     email:'saim@gmail.com'  },
// //   {
// //     id:3,
// //     name:"ali",
// //     age:25,
// //     email:'ali@gmail.com'  },
// //  ]

// return(
// <>
// {/* <h1>reuse component in loop</h1>
// {username.map((item)=>(
//   <div key={item.id}>
//     <Loop data ={item}/>
//   </div>
// ))} */}

// {/* <h1 >Tailwind test</h1>
// <table className="border border-gray-400 border-collapse w-full text-center">
//   <thead className="bg-gray-100">
//     <tr>
//       <th className="border border-gray-400 p-2">Id</th>
//       <th className="border border-gray-400 p-2">Name</th>
//       <th className="border border-gray-400 p-2">Age</th>
//       <th className="border border-gray-400 p-2">Email</th>
//     </tr>
//   </thead>
//   <tbody>
//     {username.map((item)=>(
//       <tr key={item.id}>
//         <td className="border border-gray-400 p-2">{item.id}</td>
//         <td className="border border-gray-400 p-2">{item.name}</td>
//         <td className="border border-gray-400 p-2">{item.age}</td>
//         <td className="border border-gray-400 p-2">{item.email}</td>
//       </tr>
//     ))}
//   </tbody>
// </table> */}

// {/* <h1>Handle props sideeffect with useeffect in component</h1> */}

// <h1>useeffect hook for lifecycle method</h1>

// <Useeffect count = {count} data={data} />

// {
//   display? <counter count = {count} data = {data}></counter>:null
// }

// <button onClick={()=>setcount(count+1)}>counter{count}</button> <br />
// <button onClick={()=>setdata(data+1)}>data{data}</button> <br />
// <button onClick={()=>setdisplay(!display)}>toggle{data}</button>

// </>
// )
// }

// export default Reuse;

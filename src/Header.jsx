

function Header() {
  const name = "Akash";
  const userobj = {
    name:"Akash",
    age:22,
    email:"abc@gmail.com"
  };
  const userarr = ["Akash","khan","Ali"];
  let x = 4;
  let y = 10;
  function fruit(){
    return "Orange";
  }
  function sum(a,b){
    return a+b;
  }
  function opertion(a,b,op){
    let result = 0;
    if(op=='+'){
            return a+b;
    } else if(op=='-'){
              return a-b;
    }
    else{
      return a*b;
    }
 
  }
  // function clickme(){
  //   console.log('function called');
  // }
  
  return (
    <div>
      {/* <h1>First header file</h1> */}

      <h2>{name?name:"user not found"}</h2>
      <h5>{x*y}</h5>
      <h4>{fruit()}</h4>
      <h3>{sum(50,50)}</h3>
      <h5>{opertion(20,10,"_")}</h5>
      <h1>{userobj.email}</h1>
      <h2>{userarr[1]}</h2>
      {/* <button onClick={()=>console.log("hello world")}>clickme</button> */}

      {/* exercise of jsx */}
        {/* <img<
        src="https://st5.depositphotos.com/1703608/69112/i/450/depositphotos_691120514-stock-photo-adorable-labrador-puppy-closeup-isolated.jpg"
        alt="dog"
        className="photo"
      /> */}
      {/* <ul>
        <li>invent traffic light</li>
        <li>research on technology</li>
        <li>learn react</li>
      </ul>
      <button onClick={clickme}>clickme</button> */}
    </div>
  );
}

export default Header;

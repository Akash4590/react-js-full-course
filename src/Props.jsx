function Props({name}){
        
        // console.log(name);
        // console.log(age);
        // console.log(email);
      console.log(name);
    
        return(
                <div>
                   <hr />
                        <h1>Props in react js</h1>
                        {/* <h1>name:{name}</h1>
                        <h1>age:{age}</h1>
                        <h1>email:{email}</h1> */}
                        <h1>name:{name.name}</h1>
                        <h1>age:{name.age}</h1>
                        <h1>email:{name.email}</h1>
                </div>
        )
}
export default Props;
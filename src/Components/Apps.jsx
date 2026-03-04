import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";
import Login from "./Login";
import Pagenotfound from "./Pagenotfound";
import Userlist from "./Userlist";
import Userdetails from "./Userdetails";
function Apps() {
return (

<div>
<Navbar/>
<Routes>
             
<Route path="/" element ={<Home/>}>Home</Route>
<Route path="/about" element = {<About/>}>About</Route>
<Route path="/userlist/list?" element = {<Userlist/>}>Userlist</Route>

<Route path="/user/:id/:name?" element = {<Userdetails/>}>Userdetails</Route>
<Route path = "user">
  <Route path="/user/Login" element={<Login/>}>Login</Route>
<Route path="/user/*" element={<Pagenotfound/>}>4O4 page</Route>
</Route>
</Routes>
 </div>

  );
}

export default Apps;
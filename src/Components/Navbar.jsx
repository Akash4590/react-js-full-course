import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <NavLink to="/">MyLogo</NavLink>
        </div>

        {/* Menu NavLinks */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className="hover:text-yellow-400 transition">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-yellow-400 transition">
            About
          </NavLink>
          <NavLink to="/signup" className="hover:text-yellow-400 transition">
            Signup
          </NavLink>
          <NavLink to="/user/Login" className="hover:text-yellow-400 transition">
            Login
          </NavLink>
          <NavLink to="/userlist" className="hover:text-yellow-400 transition">
            User
          </NavLink>
          <NavLink to="/userlist/list" className="hover:text-yellow-400 transition">
            list
          </NavLink>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center">
         <input
    type="text"
    placeholder="Search..."
    className="px-3 py-2 w-40 rounded-l-md text-yellow-500 focus:outline-none"
  />
          <button className="bg-yellow-500 px-4 py-1 rounded-r-md hover:bg-yellow-600 transition">
            Search
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
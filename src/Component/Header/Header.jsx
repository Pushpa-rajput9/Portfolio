import myimage from "./WhatsApp Image 2024-06-21 at 12.17.03 PM.jpeg";
import { Link, NavLink } from "react-router-dom";
function Header() {
  return (
    <div>
      <nav className=" flex bg-slate-400  p-1 shadow-2xl rounded shadow-black fixed top-0 w-full ">
        <div id="left" className="flex justify-center w-52">
          <img
            src={myimage}
            className=" w-20 h-20 rounded-full border-4 border-teal-800 "
          ></img>
        </div>
        <div
          id="right"
          className=" flex items-center justify-end gap-20 w-full"
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` flex justify-center items-center w-40 h-14 bg-teal-800 rounded-xl shadow-inner shadow-black   duration-200 ${
                isActive ? "text-white" : "text-black"
              } border-b border-gray-100  hover:bg-transparent border-0 hover:text-black `
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              ` flex justify-center items-center w-40 h-14 bg-teal-800 rounded-xl shadow-inner shadow-black   duration-200 ${
                isActive ? "text-white" : "text-black"
              } border-b border-gray-100  hover:bg-transparent border-0 hover:text-black `
            }
          >
            About
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              ` flex justify-center items-center w-40 h-14 bg-teal-800 rounded-xl shadow-inner shadow-black   duration-200 ${
                isActive ? "text-white" : "text-black"
              } border-b border-gray-100  hover:bg-transparent border-0 hover:text-black `
            }
          >
            Project
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              ` flex justify-center  items-center  w-40 h-14 bg-teal-800 rounded-xl shadow-inner shadow-black   duration-200 ${
                isActive ? "text-white" : "text-black"
              } border-b border-gray-100  hover:bg-transparent border-0 hover:text-black `
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Header;

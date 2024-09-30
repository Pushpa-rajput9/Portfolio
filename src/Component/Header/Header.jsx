import { useState } from "react";
import myimage from "./WhatsApp Image 2024-06-21 at 12.17.03 PM.jpeg";
import humburger from "./hambrger.png";
import { NavLink } from "react-router-dom";
import image1 from "../Home/assets/img.gif";
import resume from "../Home/assets/Pushpa Rajput.pdf";
function Header() {
  const [menu, setmenu] = useState(false);

  return (
    <div>
      <nav className=" flex bg-slate-400  p-1 shadow-2xl rounded shadow-black fixed top-0 w-full ">
        <div id="left" className="flex justify-center lg:w-52 sm:w-fit">
          <img
            src={myimage}
            className=" w-20 h-20 rounded-full border-4 border-teal-800 "
          ></img>
        </div>
        <div
          id="right"
          className="  max-sm:hidden flex items-center justify-end lg:gap-20 sm:gap-8 w-full"
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

        <div className="rigtmost flex pr-10 justify-end items-center w-full  md:hidden lg:hidden  ">
          <div className="w-fit">
            <img
              onClick={() => setmenu(!menu)}
              className=" flex  justify-end items-center"
              src={humburger}
              alt="error"
              height="30px"
              width="30px"
            />
          </div>
        </div>
      </nav>
      <div
        className={
          menu
            ? " items-end  flex  justify-end  fixed top-16 z-10 mr-36  pr-20 transition delay-1000 text-gray-900 w-full h-24 "
            : "hidden"
        }
      >
        <div className=" bg-white rounded shadow-inner shadow-black text-lg pl-2 justify-center font-semibold flex flex-col w-32 h-32">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/project">Project</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
      <div className=" ">
        <img src={image1} className=" w-full h-[550px]"></img>
        <div className=" w-full  relative bottom-40  z-10 pl-14 ">
          <a
            href={resume}
            target="_blank"
            className="flex justify-center items-center w-60 h-16 border-b-4 border-r-2 font-bold border-slate-950 rounded-3xl text-xl bg-white shadow-2xl shadow-black "
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;

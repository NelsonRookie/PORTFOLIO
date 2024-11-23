import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaBars,
} from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { GrWorkshop } from "react-icons/gr";
import { GoProject } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import profileImage from "/src/assets/backgroundImage.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNavClick = () => {
    setNav(!nav); // Toggle the nav state
  };

  return (
    <div>
      <nav className="flex items-center justify-between ">
        {/* Logo Section */}
        <div className="hidden flex-shrink-0 w-12 h-12 border-2 border-neutral-300 rounded-full">
          <img
            src="https://api.logo.com/api/v2/images?logo=lg_XQmXMwceh7M8YNizuU&width=128&height=128&fit=contain&margins=24&format=webp&quality=60&u=1727674426803"
            alt="Profile"
            className=" transition transform hover:scale-110 cursor-pointer rounded-full shadow-md hover:shadow-[0_4px_15px_rgba(0,255,0,0.8)]"
          />
        </div>

        {/* Social Icons - Hidden on mobile */}
        <div className="m-8 flex items-end gap-4 text-2xl md:flex">
          <a href="https://github.com/NelsonRookie?tab=repositories">
            <FaGithub className="hidden transition transform hover:scale-110 cursor-pointer rounded-full shadow-md hover:shadow-[0_4px_15px_rgba(0,255,0,0.8)]" />
          </a>
          <a href="https://www.linkedin.com/feed/">
            <FaLinkedin className=" hidden transition transform hover:scale-110 cursor-pointer rounded-full shadow-md hover:shadow-[0_4px_15px_rgba(0,255,0,0.8)]" />
          </a>
          <FaInstagram className=" hidden transition transform hover:scale-110 cursor-pointer rounded-full shadow-md hover:shadow-[0_4px_15px_rgba(0,255,0,0.8)]" />
          <FaFacebook className=" hidden transition transform hover:scale-110 cursor-pointer rounded-full shadow-md hover:shadow-[0_4px_15px_rgba(0,255,0,0.8)]" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={handleNavClick} className="text-2xl">
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu (Appears only when clicked) */}
      {nav && (
        <div className="lg:hidden fixed inset-0 bg-white/90 z-20 flex flex-col justify-center items-center">
          {/* Introduction Section */}
          <div className="max-w-[700px] py-2 m-auto h-full w-full flex flex-col justify-center items-center text-center">
            <div className="relative flex items-center justify-center">
              <img
                src={profileImage}
                alt="about"
                className="w-[70%] rounded-2xl  bg-gray-800 shadow-lg shadow-green-400 transition-transform duration-200 hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="pb-2 flex sm:text-3xl text-xl pt-4 font-semibold text-slate-50  bg-clip-text text-transparent">
                  I am a{" "}
                  <TypeAnimation
                    sequence={["Developer", 2000, "Tech Enthusiast", 2000]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: "1em", paddingLeft: "5px" }}
                    repeat={Infinity}
                  />
                </h2>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <a
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full bg-gray-800 shadow-lg shadow-green-400 m-2 p-4 cursor-pointer hover:bg-gray-700 hover:scale-105 ease-in duration-200"
            onClick={handleNavClick}
          >
            <AiOutlineHome size={25} className="text-green-500" />
            <span className="pl-4 text-white">Home</span>
          </a>
          <a
            href="#experience"
            className="w-[75%] flex justify-center items-center rounded-full bg-gray-800 shadow-lg shadow-green-400 m-2 p-4 cursor-pointer hover:bg-gray-700 hover:scale-105 ease-in duration-200"
            onClick={handleNavClick}
          >
            <GrWorkshop size={25} className="text-green-500" />
            <span className="pl-4 text-white">Internship</span>
          </a>
          <a
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full bg-gray-800 shadow-lg shadow-green-400 m-2 p-4 cursor-pointer hover:bg-gray-700 hover:scale-105 ease-in duration-200"
            onClick={handleNavClick}
          >
            <GoProject size={25} className="text-green-500" />
            <span className="pl-4 text-white">Projects</span>
          </a>
          <a
            href="#about"
            className="w-[75%] flex justify-center items-center rounded-full bg-gray-800 shadow-lg shadow-green-400 m-2 p-4 cursor-pointer hover:bg-gray-700 hover:scale-105 ease-in duration-200"
            onClick={handleNavClick}
          >
            <IoPersonOutline size={25} className="text-green-500" />
            <span className="pl-4 text-white">About</span>
          </a>

          <a
            href="#form"
            className="w-[75%] flex justify-center items-center rounded-full bg-gray-800 shadow-lg shadow-green-400 m-2 p-4 cursor-pointer hover:bg-gray-700 hover:scale-105 ease-in duration-200"
            onClick={handleNavClick}
          >
            <CiMail size={25} className="text-green-500" />
            <span className="pl-4 text-white">Contact</span>
          </a>
          <a
            href="#info"
            className="w-[75%] flex justify-center items-center rounded-full bg-gray-800 shadow-lg shadow-green-400 m-2 p-4 cursor-pointer hover:bg-gray-700 hover:scale-105 ease-in duration-200"
            onClick={handleNavClick}
          >
            <IoIosInformationCircleOutline
              size={25}
              className="text-green-500"
            />
            <span className="pl-4 text-white">Info</span>
          </a>
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
      )}
    </div>
  );
};

export default NavBar;

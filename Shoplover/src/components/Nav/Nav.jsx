import React from "react";
import Logo from "../../assets/Logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Nav = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark-text-white duration-200 relative z-40">
      {/*upper navbar*/}
      <div className="bg-white py-1 sm:py-0">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-20" />
              <p className="mt-6 text-orange-500"> Shoplover</p>
            </a>
          </div>
          {/*Search bar &  */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-500"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-orange-500 absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
          </div>
          {/* order butoon*/}
          <button
            onClick={() => alert("Ordering not available yet")}
            className="bg-gradient-to-r from-orange-400 to-orange-700 transition all py-1 px-4 rounded-full duration-200 text-white flex items-center gap-3 group"
          >
            <span className="group-hover:block hidden transition-all duration-200">
              Order
            </span>
            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
          </button>
          {/*Darkmode button*/}
          <div>
            <DarkMode />
          </div>
        </div>
      </div>
      {/*lover navbar*/}
      <div></div>
    </div>
  );
};

export default Nav;

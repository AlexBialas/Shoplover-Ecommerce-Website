import React from "react";
import Logo from "../../assets/Logo.png";
import { IoMdSearch } from "react-icons/io";

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
          {/*Search bar & order button */}
          <div>
            <div className="group">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-500"
              />
              <IoMdSearch />
            </div>
          </div>
        </div>
      </div>
      {/*lover navbar*/}
      <div></div>
    </div>
  );
};

export default Nav;

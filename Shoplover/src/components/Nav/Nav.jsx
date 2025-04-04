import React from "react";
import Logo from "../../assets/Logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaCaretDown } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Sale",
    link: "/#",
    dropdownLinks: [
      { id: 1, name: "New Arrivals", link: "/#new" },
      { id: 2, name: "Best Sellers", link: "/#best" },
    ],
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
    dropdownLinks: [
      { id: 1, name: "New Arrivals", link: "/#new" },
      { id: 2, name: "Best Sellers", link: "/#best" },
    ],
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
    dropdownLinks: [
      { id: 1, name: "New Arrivals", link: "/#new-kids" },
      { id: 2, name: "Best Sellers", link: "/#best-kids" },
    ],
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
    dropdownLinks: [
      { id: 1, name: "New Arrivals", link: "/#new-mens" },
      { id: 2, name: "Best Sellers", link: "/#best-mens" },
    ],
  },
  {
    id: 5,
    name: "Womans Wear",
    link: "/#",
    dropdownLinks: [
      { id: 1, name: "New Arrivals", link: "/#new-womens" },
      { id: 2, name: "Best Sellers", link: "/#best-womens" },
    ],
  },
];

const Nav = () => {
  return (
    <nav className="shadow-md bg-white dark:bg-gray-900 text-black dark:text-white duration-200 relative z-40">
      {/* Upper navbar */}
      <div className="bg-white py-1 sm:py-0">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Shoplover Logo" className="w-20" />
              <p className="mt-6 text-orange-500">Shoplover</p>
            </a>
          </div>
          {/* Search bar in the center */}
          <div className="flex-grow flex justify-center">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-500"
                aria-label="Search"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-orange-500 absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
          </div>
          {/* Dark mode button and Order button to the right */}
          <div className="flex items-center gap-4">
            <DarkMode />
            <button
              onClick={() => alert("Ordering not available yet")}
              className="bg-gradient-to-r from-orange-400 to-orange-700 transition all py-1 px-4 rounded-full duration-200 text-white flex items-center gap-3 group"
              aria-label="Order"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                {" "}
                Order{" "}
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
      {/* Lower navbar */}
      <div className="bg-orange-500 p-1">
        <ul className="flex space-x-4 align-center justify-center gap-4">
          {Menu.map((data) => (
            <li key={data.id} className="relative group">
              <a
                href={data.link}
                className="flex items-center gap-[2px] py-2"
                aria-label={data.name}
              >
                {data.name}
                {data.dropdownLinks.length > 0 && (
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                )}
              </a>
              {data.dropdownLinks.length > 0 && (
                <div className="absolute left-0 hidden group-hover:block bg-orange-500/80 p-2 rounded shadow-lg hover:text-white">
                  <ul>
                    {data.dropdownLinks.map((link) => (
                      <li key={link.id}>
                        <a
                          href={link.link}
                          className="block hover:bg-orange-500 p-2 w-[120px]"
                          aria-label={link.name}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

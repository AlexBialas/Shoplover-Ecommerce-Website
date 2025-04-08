import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h2 className="text-2xl font-bold">Shoplover</h2>
            <p className="mt-2">Your favorite place for fashion shopping!</p>
          </div>
          <div className="mt-6 md:mt-0">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-2">
              <li>Email: contact@shoplover.com</li>
              <li>Phone: +48 123 456 789</li>
              <li>Address: ul. Modna 12, 00-001 Warsaw</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white pt-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Shoplover. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";

const Subscribe = () => {
  const gradientBackground = {
    background: `
            conic-gradient(
                from 150deg at 50% 33%, 
                rgba(255, 255, 255, 0) 0%, 
                rgba(250, 105, 0, 0.2) 0.5deg 60deg, 
                rgba(255, 255, 255, 0) 60.5deg
            ) calc(60px / 2) calc(60px / sqrt(2)),
            conic-gradient(
                from -30deg at 50% 66%, 
                rgba(255, 255, 255, 0) 0%, 
                rgba(217, 91, 67, 0.2) 0.5deg 60deg, 
                rgba(236, 208, 120, 0.2) 60.5deg
            )
        `,
    backgroundSize: "60px calc(0.5 * 60px / tan(30deg))",
  };

  return (
    <div
      data-aos="zoom-in"
      style={gradientBackground}
      className="w-full h-[180px] p-2 mb-20 flex flex-col items-center"
    >
      <div className="container py-7 max-w-2xl mx-auto">
        <h1 className="text-2xl text-center font-semibold mb-4">
          {" "}
          Get Notified About New Products{" "}
        </h1>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <input
            data-aos="fade-up"
            placeholder="Enter your email"
            className="flex-grow p-3 mb-3 sm:mb-0 sm:mr-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
            type="email"
          />
          <button className="bg-white text-orange-500 font-semibold py-3 px-6 rounded shadow hover:bg-orange-100 transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

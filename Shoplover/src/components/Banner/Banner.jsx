import React from "react";
import BannerImg from "../Banner/BannerImg.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  const features = [
    {
      icon: (
        <GrSecure className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-violet-100" />
      ),
      text: "Quality Products",
      aosEffect: "fade-up",
    },
    {
      icon: (
        <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100" />
      ),
      text: "Fast Delivery",
      aosEffect: "fade-up",
    },
    {
      icon: (
        <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-blue-100" />
      ),
      text: "Get Offers",
      aosEffect: "fade-up",
    },
  ];

  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Image Section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt="Banner"
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
          {/* Text Details Section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 className="text-3xl font-bold text-orange-500 text-center">
              Winter Sale 50% off!
            </h1>
            <p className="text-gray-600 text-sm tracking-wide leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, sunt
              velit voluptate alias tempora numquam ratione aspernatur delectus
              optio veritatis ab perferendis iusto facilis! Excepturi doloremque
              quos incidunt quas deserunt!
            </p>
            <div className="flex flex-col space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  data-aos={feature.aosEffect}
                  className="flex items-center"
                >
                  {feature.icon}
                  <span className="ml-2">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

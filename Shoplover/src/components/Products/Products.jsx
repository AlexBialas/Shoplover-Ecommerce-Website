import React from "react";
import Img1 from "../Products/Img1.png";
import Img2 from "../Products/img2.png";
import Img3 from "../Products/img3.png";
import Img4 from "../Products/img4.png";
import Img5 from "../Products/img5.png";
import Img6 from "../Products/img6.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    author: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.7,
    author: "red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Women Goggles",
    rating: 4.3,
    author: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Women Shorts",
    rating: 4.0,
    author: "green",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Man Ethnic",
    rating: 5.0,
    author: "orange",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "Man Goggles",
    rating: 4.1,
    author: "yellow",
    aosDelay: "1000",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12 w-full">
      <div className="container mx-auto w-full px-4">
        {" "}
        {/* Header section */}
        <div className="text-center mb-10">
          <p className="text-sm text-orange-500">
            Top Selling Products for you
          </p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, veniam eveniet hic ipsam harum velit corrupti officiis.
            Repellat accusantium voluptatum, velit placeat omnis exercitationem
            impedit illum nam pariatur? Architecto, numquam.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 place-items-center gap-3">
            {/* Card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 flex flex-col items-center text-center"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <h1 className="font-semibold">{data.title}</h1>
                <p className="text-sm text-gray-500">{data.author}</p>
                <div className="flex items-center gap-1 justify-center">
                  <FaStar className="text-yellow-400" />
                  <span>{data.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

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
    title: "Women shorts",
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
    title: "Man goggles",
    rating: 4.1,
    author: "yellow",
    aosDelay: "1000",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/*Header section*/}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
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
        {/*body section*/}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 place-items-center gap-3">
            {/*card section*/}
            {ProductsData.map((data) => (
              <div key={data.id} className="space-y-3">
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-500">{data.author}</p>
                  <div className="flex  items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
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

import React from "react";
import M1 from "../../components/TopProducts/M1.png";
import M2 from "../../components/TopProducts/M2.png";
import M3 from "../../components/TopProducts/M3.png";
import M4 from "../../components/TopProducts/M4.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: M1,
    title: "Casual Wear 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eveniet officia ratione vel. Harum beatae voluptatum voluptates necessitatibus laborum recusandae reprehenderit, quos deleniti ipsum! Accusantium voluptatibus corrupti veritatis perferendis accusamus.",
  },
  {
    id: 2,
    img: M2,
    title: "Casual Wear 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eveniet officia ratione vel. Harum beatae voluptatum voluptates necessitatibus laborum recusandae reprehenderit, quos deleniti ipsum! Accusantium voluptatibus corrupti veritatis perferendis accusamus.",
  },
  {
    id: 3,
    img: M3,
    title: "Casual Wear 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eveniet officia ratione vel. Harum beatae voluptatum voluptates necessitatibus laborum recusandae reprehenderit, quos deleniti ipsum! Accusantium voluptatibus corrupti veritatis perferendis accusamus.",
  },
  {
    id: 4,
    img: M4,
    title: "Casual Wear 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eveniet officia ratione vel. Harum beatae voluptatum voluptates necessitatibus laborum recusandae reprehenderit, quos deleniti ipsum! Accusantium voluptatibus corrupti veritatis perferendis accusamus.",
  },
];

const TopProducts = () => {
  return (
    <div className="container">
      {/*Header section*/}
      <div className="text-center mb-10">
        <p data-aos="fade-up" className="text-sm text-orange-500">
          Top Rated Products for you
        </p>
        <h1 data-aos="fade-up" className="text-3xl font-bold">
          Best Products
        </h1>
        <p data-aos="fade-up" className="text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          veniam eveniet hic ipsam harum velit corrupti officiis. Repellat
          accusantium voluptatum, velit placeat omnis exercitationem impedit
          illum nam pariatur? Architecto, numquam.
        </p>
      </div>
      {/*Body section*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {ProductsData.map((data) => (
          <div key={data.id} className="border p-4 rounded-lg">
            {/* Image section */}
            <div className="mb-4">
              <img src={data.img} alt={data.title} className="w-full h-auto" />
            </div>
            {/* Details section */}
            <h2 className="text-lg font-semibold">{data.title}</h2>
            <p className="text-gray-600">{data.description}</p>
            <div className="flex items-center mt-2">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-gray-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;

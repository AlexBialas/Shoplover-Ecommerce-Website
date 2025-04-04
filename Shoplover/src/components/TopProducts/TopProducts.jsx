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
      " , quos deleniti ipsum! Accusantium voluptatibus corrupti veritatis perferendis accusamus.",
    rating: 4,
  },
  {
    id: 2,
    img: M2,
    title: "Casual Wear 2",
    description:
      " quos deleniti ipsum! Accusantium voluptatibus corrupti veritatis perferendis accusamus.",
    rating: 5,
  },
  {
    id: 3,
    img: M3,
    title: "Casual Wear 3",
    description:
      "  quos deleniti ipsum! Accusantium voluptatibus corrupti veritatis perferendis accusamus.",
    rating: 3,
  },
];

const TopProducts = () => {
  if (!ProductsData || ProductsData.length === 0) {
    return <p className="text-center text-gray-500">No products available.</p>;
  }

  return (
    <div className="container mx-auto w-full px-4 pb-8">
      {/* Header section */}
      <div className="text-center mb-30">
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
      {/* Body section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center justify-items-center">
        {ProductsData.map((data) => (
          <div
            key={data.id}
            className="rounded-2xl bg-white hover:bg-black/80 hover:text-white relative shadow-xl duration-300 p-4  h-[350px] mb-20"
          >
            {/* Zgrupowana sekcja dla obrazu i szczegółów */}
            <div className="flex flex-col justify-center items-center  ">
              {/* Image section */}
              <div className="mb-2 flex justify-center items-center">
                <img
                  src={data.img}
                  alt={data.title || "Product image"} // Fallback alt text
                  className="w-[240px] h-[300px] block mx-auto transform -translate-y-30 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* Details section - cała zawartość w hover */}
              <div className="flex flex-col items-center transform -translate-y-30">
                <h2 className="text-lg font-semibold">{data.title}</h2>
                <p className="text-gray-600">{data.description}</p>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={
                        index < data.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;

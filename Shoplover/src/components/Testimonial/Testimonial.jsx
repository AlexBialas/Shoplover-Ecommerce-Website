import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Alex",
    text: "velit corrupti officiisdit illum nam pariatur? Architecto, numquam.",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Mark",
    text: "velit corrupti officiisdit illum nam pariatur? ciisdit illum nam pariatur? Arch",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Simon",
    text: "Lorem ipsumsam harum velit corrupti placeat omnis exercitationem impedit illum nam pariatur? Architecto, numquam.",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    name: "Bratt",
    text: "Lorem ipsumm velit corrupti officiis. Repenis exercitationem impedit illum nam pariatur? Architecto, numquam.",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    name: "Henry",
    text: "Lorem ipsvelit corrupti officiis. Repellattionem impedit illum nam pariatur? Architecto, numquam.",
    img: "https://picsum.photos/200/300",
  },
];

const Testimonial = () => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="text-center mb-10">
          <p data-aos="fade-up" className="text-sm text-orange-500">
            What our customers say
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, veniam eveniet hic ipsam harum velit corrupti officiis.
            Repellat accusantium voluptatum, velit placeat omnis exercitationem
            impedit illum nam pariatur? Architecto, numquam.
          </p>
        </div>
        {/* Testimonial cards */}
        <div>
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="py-8 px-6 mx-4 rounded-xl flex flex-col gap-4 shadow-lg items-center bg-orange-500/10 relative h-90"
                >
                  <img
                    src={data.img}
                    alt={data.name}
                    className="w-30 h-30 object-cover rounded-full mb-4"
                  />
                  <h3 className="text-lg font-semibold">{data.name}</h3>
                  <p className="text-sm text-gray-600 text-center">
                    {data.text}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

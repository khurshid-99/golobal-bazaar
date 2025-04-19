import React, { useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const TrandingPlant = () => {
  const next = useRef(null);
  const prev = useRef(null);

  const produts = [
    {
      img: "/Slicing/Popular product/image_1.jpg",
      name: "lxora (Rugmini) Plant-yellow",
      rating: "⭐⭐⭐⭐⭐",
      rs: 128,
    },
    {
      img: "/Slicing/Popular product/image_1.jpg",
      name: "lxora (Rugmini) Plant-yellow",
      rating: "⭐⭐⭐⭐⭐",
      rs: 128,
    },
    {
      img: "/Slicing/Popular product/image_1.jpg",
      name: "lxora (Rugmini) Plant-yellow",
      rating: "⭐⭐⭐⭐⭐",
      rs: 128,
    },
    {
      img: "/Slicing/Popular product/image_1.jpg",
      name: "lxora (Rugmini) Plant-yellow",
      rating: "⭐⭐⭐⭐⭐",
      rs: 128,
    },
  ];

  return (
    <div className="w-full h-[70vh] lg:h-[100vh] xl:h-[140vh] 2xl:h-[100vh] px-[5vw] relative overflow-hidden ">
      <div className="w-full h-[30vh] lg:h-[55vh] xl:h-[70vh] 2xl:h-[55vh] bg-[#000000] px-[5vw] pt-10 relative z-[80] ">
        <h1 className="text-white text-[1.5rem] lg:text-[2.7rem] 2xl:text-[3.5rem] font-[300] ">
          The Most <span className="font-[600]">Tranding Plant</span>
        </h1>
        <p className="text-[#7D7D7D] text-[1rem] lg:text-[1.11rem] 2xl:text-[1.4rem] mt-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem <br />{" "}
          <span className="invisible lg:visible">
            reprehenderit accusantium quasi sed corrupti rerum nulla <br /> non
            maxime.
          </span>
        </p>
      </div>
      <div className="w-full h-[55vh] xl:h-[85vh] 2xl:h-[70vh] relative -top-[15vw] lg:-top-[7rem] 2xl:-top-[10vw] px-[5vw] z-[88]  ">
        {/* card */}
        <Swiper
          grabCursor={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Navigation]}
          spaceBetween={10}
          breakpoints={{
            100: {
              slidesPerView: 1.1,
              spaceBetween: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {produts.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="w-[70vw] h-[85vw] lg:w-[25vw] lg:h-[26vw] 2xl:w-[23vw] xl:h-full pb-2 ">
                <img
                  src={product.img}
                  alt=""
                  className="w-full h-[50vw] lg:h-[14vw] object-cover object-center bg-center "
                />
                <h4 className="font-semibold lg:text-[1rem] 2xl:text-[1.25rem] my-2 xl:my-4 ">
                  {product.name}
                </h4>
                <h4>⭐⭐⭐⭐⭐</h4>
                <div className="flex items-center justify-between">
                  <h4 className="text-[#787878] lg:text-[1rem] 2xl:text-[1.2rem] font-medium ">
                    MRP:{" "}
                    <small className="text-[#17C354] mr-1 lg:text-[.9rem] 2xl:text-[1rem] ">
                      Rs
                    </small>
                    <span
                      className="text-black lg:text-[1.8rem] 2xl:text-[1.8rem] font-semibold
               "
                    >
                      {product.rs}
                    </span>
                  </h4>
                  <button className="bg-[#F4F4F4] text-nowrap border-[1.5px] border-[#e6e5e5] font-medium rounded-full px-7 py-3 lg:text-[.7rem] 2xl:text-[.9rem] hover:bg-[#FF9812] duration-300 ">
                    Add to Cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* -- */}
      </div>
    </div>
  );
};

export default TrandingPlant;

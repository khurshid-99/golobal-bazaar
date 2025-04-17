import React, { useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const TrandingPlant = () => {
  const next = useRef(null);
  const prev = useRef(null);
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
        {/* button */}
        <div className="hidden absolute top-3/4 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[99] lg:flex gap-x-10 xl:mt-10 2xl:mt-0 ">
          <button
            ref={next}
            className="custom-prev bg-black/50 pr-10 pl-2 rounded-[50px] py-1 hover:bg-black duration-300 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="rgba(255,255,255,1)"
            >
              <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
            </svg>
          </button>
          <button
            ref={prev}
            className="custom-next bg-black/50 pr-2 pl-10 rounded-[50px] py-1 hover:bg-black duration-300 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="rgba(253,253,253,1)"
            >
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
        </div>
        {/* card */}
        <Swiper
          grabCursor={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Navigation]}
          spaceBetween={10}
          onInit={(swiper) => {
            swiper.params.navigation.nextEl = next.current;
            swiper.params.navigation.prevEl = prev.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
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
          <SwiperSlide>
            <div className="w-[70vw] h-[85vw] lg:w-[25vw] lg:h-[26vw] 2xl:w-[23vw] xl:h-full pb-2 ">
              <img
                src="/Slicing/Popular product/image_1.jpg"
                alt=""
                className="w-full h-[50vw] lg:h-[14vw] object-cover object-center bg-center "
              />
              <h4 className="font-semibold lg:text-[1rem] 2xl:text-[1.25rem] my-2 xl:my-4 ">
                lxora (Rugmini) Plant-yellow
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
                    128
                  </span>
                </h4>
                <button className="bg-[#F4F4F4] text-nowrap border-[1.5px] border-[#e6e5e5] font-medium rounded-full px-7 py-3 lg:text-[.7rem] 2xl:text-[.9rem] hover:bg-[#FF9812] duration-300 ">
                  Add to Cart
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[70vw] h-[85vw] lg:w-[25vw] lg:h-[26vw] 2xl:w-[23vw] xl:h-full pb-2 ">
              <img
                src="/Slicing/Popular product/image_1.jpg"
                alt=""
                className="w-full h-[50vw] lg:h-[14vw] object-cover object-center bg-center "
              />
              <h4 className="font-semibold lg:text-[1rem] 2xl:text-[1.25rem] my-2 xl:my-4 ">
                lxora (Rugmini) Plant-yellow
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
                    128
                  </span>
                </h4>
                <button className="bg-[#F4F4F4] text-nowrap border-[1.5px] border-[#e6e5e5] font-medium rounded-full px-7 py-3 lg:text-[.7rem] 2xl:text-[.9rem] hover:bg-[#FF9812] duration-300 ">
                  Add to Cart
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[70vw] h-[85vw] lg:w-[25vw] lg:h-[26vw] 2xl:w-[23vw] xl:h-full  pb-2 ">
              <img
                src="/Slicing/Popular product/image_1.jpg"
                alt=""
                className="w-full h-[50vw] lg:h-[14vw] object-cover object-center bg-center "
              />
              <h4 className="font-semibold lg:text-[1rem] 2xl:text-[1.25rem] my-2 xl:my-4 ">
                lxora (Rugmini) Plant-yellow
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
                    128
                  </span>
                </h4>
                <button className="bg-[#F4F4F4] text-nowrap border-[1.5px] border-[#e6e5e5] font-medium rounded-full px-7 py-3 lg:text-[.7rem] 2xl:text-[.9rem] hover:bg-[#FF9812] duration-300 ">
                  Add to Cart
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[70vw] h-[85vw] lg:w-[25vw] lg:h-[26vw] 2xl:w-[23vw] xl:h-full pb-2 ">
              <img
                src="/Slicing/Popular product/image_1.jpg"
                alt=""
                className="w-full h-[50vw] lg:h-[14vw] object-cover object-center bg-center "
              />
              <h4 className="font-semibold lg:text-[1rem] 2xl:text-[1.25rem] my-2 xl:my-4 ">
                lxora (Rugmini) Plant-yellow
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
                    128
                  </span>
                </h4>
                <button className="bg-[#F4F4F4] text-nowrap border-[1.5px] border-[#e6e5e5] font-medium rounded-full px-7 py-3 lg:text-[.7rem] 2xl:text-[.9rem] hover:bg-[#FF9812] duration-300 ">
                  Add to Cart
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* -- */}
      </div>
    </div>
  );
};

export default TrandingPlant;

import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ClientSays = () => {
  const next = useRef(null);
  const prev = useRef(null);
  return (
    <div className="w-full h-[90vh] lg:h-[100vh] xl:h-[110vh] 2xl:h-[80vh] p-[5vw] flex flex-col lg:flex-row items-center justify-center  ">
      {/* left */}
      <div className="w-full h-[70vw] lg:w-1/2 lg:h-full ">
        <img
          src="/Slicing/testimonial/image.jpg"
          alt=""
          className="w-full h-full object-cover bg-center"
        />
      </div>
      {/* right */}
      <div className="w-full h-[90vw] lg:w-1/2 lg:h-full pl-[5vw] relative  ">
        <img
          src="/Slicing/testimonial/quote.png"
          alt=""
          className="w-[9vw] lg:w-[4vw] 2xl:w-[3.3vw] left-[70vw] top-3 lg:left-[38vw] lg:top-5 relative "
        />
        <h1 className="font-light text-[1.4rem] lg:text-[2.2rem] xl:text-[2.8rem] 2xl:text-[3.3rem] ">
          What our <span className="font-semibold">Client Says</span>{" "}
        </h1>
        {/* cart */}
        <div className=" absolute top-9/10 left-1/2 lg:left-4/5 -translate-y-1/2 -translate-x-1/2 z-[99] flex gap-x-10 ">
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
        <Swiper
          grabCursor={true}
          modules={[Navigation]}
          onInit={(swiper) => {
            swiper.params.navigation.nextEl = next.current;
            swiper.params.navigation.prevEl = prev.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          <SwiperSlide>
            <div className="lg:mt-10 2xl:mt-15 w-full h-[35vh] lg:h-[35.5vw] xl:h-[25vw] 2xl:h-[19.2vw] relative ">
              <p className="text-[4vw] lg:text-[1.8vw] xl:text-[1.3vw] 2xl:text-[1.50rem] text-[#777777] font-light xl:leading-10 ">
                Freundliche und sachliche Vorbereitung und Asufuhrung der <br />{" "}
                Bestattung meiner Mutter.{" "}
                <span className="invisible lg:visible">
                  Dieses Bestattungshaus ist serios <br /> und auf jeden Fall
                  weiter zu empfehlen ..
                </span>
              </p>
              <div className="flex items-center gap-x-5 absolute lg:bottom-20 ">
                <img src="/Slicing/testimonial/man-image.png" alt="" />
                <div>
                  <h1 className="text-[6vw] lg:text-3xl font-semibold ">
                    John Smith
                  </h1>
                  <h2 className="text-[#777777] text-[1rem] lg:text-xl">
                    Lorem Ipsum
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:mt-10 2xl:mt-15 w-full h-[35vh] lg:h-[35.5vw] xl:h-[25vw] 2xl:h-[19.2vw] relative ">
              <p className="text-[4vw] lg:text-[1.8vw] xl:text-[1.3vw] 2xl:text-[1.50rem] text-[#777777] font-light xl:leading-10 ">
                Freundliche und sachliche Vorbereitung und Asufuhrung der <br />{" "}
                Bestattung meiner Mutter.{" "}
                <span className="invisible lg:visible">
                  Dieses Bestattungshaus ist serios <br /> und auf jeden Fall
                  weiter zu empfehlen ..
                </span>
              </p>
              <div className="flex items-center gap-x-5 absolute lg:bottom-20 ">
                <img src="/Slicing/testimonial/man-image.png" alt="" />
                <div>
                  <h1 className="text-[6vw] lg:text-3xl font-semibold ">
                    John Smith
                  </h1>
                  <h2 className="text-[#777777] text-[1rem] lg:text-xl">
                    Lorem Ipsum
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ClientSays;

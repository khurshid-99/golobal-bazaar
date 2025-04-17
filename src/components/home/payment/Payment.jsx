import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Payment = () => {
  return (
    <div className="w-full h-[35vh] 2xl:h-[25vh] px-[5vw] bg-[#F7F7F7] relative ">
      <div className="w-full h-full gap-x-5 flex items-center justify-between overflow-x-auto  ">
        {/* card */}

        <div className="h-[20vh] lg:h-[15vh] xl:h-[25vh] w-[80vw] lg:w-[35vw] xl:w-[25vw] 2xl:w-[20vw] flex items-center gap-x-5 border border-[gray]/50 p-2 rounded shrink-0 ">
          <img
            src="/Slicing/Banner/Security.png"
            alt=""
            className="mb-[16px] "
          />
          <div className="">
            <h1 className="uppercase mb-3 ">Secure payment</h1>
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique,
            </p>
          </div>
        </div>

        {/*  */}
        <div className="h-[20vh] lg:h-[15vh] w-[80vw] lg:w-[35vw] xl:w-[25vw] 2xl:w-[20vw] flex items-center gap-x-5 border border-[gray]/50 p-2 rounded shrink-0 ">
          <img
            src="/Slicing/Banner/Security.png"
            alt=""
            className="mb-[16px] "
          />
          <div className="">
            <h1 className="uppercase mb-3 ">Secure payment</h1>
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique,
            </p>
          </div>
        </div>
        <div className="h-[20vh] lg:h-[15vh] w-[80vw] lg:w-[35vw] xl:w-[25vw] 2xl:w-[20vw] flex items-center gap-x-5 border border-[gray]/50 p-2 rounded shrink-0 ">
          <img
            src="/Slicing/Banner/Security.png"
            alt=""
            className="mb-[16px] "
          />
          <div className="">
            <h1 className="uppercase mb-3 ">Secure payment</h1>
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique,
            </p>
          </div>
        </div>
        <div className="h-[20vh] lg:h-[15vh] w-[80vw] lg:w-[35vw] xl:w-[25vw] 2xl:w-[20vw] flex items-center gap-x-5 border border-[gray]/50 p-2 rounded shrink-0 ">
          <img
            src="/Slicing/Banner/Security.png"
            alt=""
            className="mb-[16px] "
          />
          <div className="">
            <h1 className="uppercase mb-3 ">Secure payment</h1>
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

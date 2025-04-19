import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Payment = () => {
  return (
    <div className="w-full h-[35vh] 2xl:h-[25vh] px-[5vw] bg-[#F7F7F7] relative lg:bg-[red] xl:bg-[green] 2xl:bg-[blue]  ">
      <div className="w-full h-full gap-x-5 flex items-center justify-between overflow-x-auto ">
        {/* card */}

        <Swiper
          grabCursor={true}
          modules={[Pagination]}
          pagination={{
            dynamicBullets: true,
          }}
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
          <SwiperSlide>
            <div className="h-[20vh] w-[80vw] lg:h-[25vh] lg:w-[25vw] xl:w-[25vw] 2xl:h-[15vh] 2xl:w-[20vw] flex items-center gap-x-5 border border-[gray]/50 p-2 rounded shrink-0 ">
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[20vh] w-[80vw] lg:h-[25vh] lg:w-[25vw] xl:w-[25vw] 2xl:h-[15vh] 2xl:w-[20vw] flex items-center gap-x-5 border border-[gray]/50 p-2 rounded shrink-0 ">
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[20vh] w-[80vw] lg:h-[25vh] lg:w-[25vw] xl:w-[25vw] 2xl:h-[15vh] 2xl:w-[20vw] flex items-center gap-x-5 border border-[gray]/50 p-2 rounded shrink-0 ">
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[20vh] w-[80vw] lg:h-[25vh] lg:w-[25vw] xl:w-[25vw] 2xl:h-[15vh] 2xl:w-[20vw] flex items-center gap-x-5 border border-[gray]/50 p-2 rounded shrink-0 ">
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
          </SwiperSlide>
        </Swiper>

        {/*  */}
      </div>
    </div>
  );
};

export default Payment;

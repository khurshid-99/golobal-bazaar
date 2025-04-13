import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[40vh] sm:min-h-[90vh] relative text-[white] ">
      <img
        src="./Slicing/Banner/bannere-image.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute w-full h-full top-0 left-0">
        <div className="relative w-full h-full grid items-center">
          <div className="m-auto text-center ">
            <h3 className="uppercase tracking-[.5rem] lg:mb-5 text-[3vw] lg:text-[1.5vw] xl:text-[.99vw] ">
              OUR NURSERY
            </h3>
            <span className="inline-block w-10 h-[2px] bg-white mb-2 lg:mb-4 "></span>
            <h1 className="capitalize mb-5 text-[7vw] lg:text-[5.5vw] xl:text-[3.6vw] font-semibold ">
              Nurturing Nature's Beauty
            </h1>
            <p className="lg:text-[1.6vw] xl:text-[1vw] font-light ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              quis. Facere tempore, <br /> amet architecto accusantium magni
              inventore
            </p>

            <div className="inline-block mt-5 lg:mt-15 xl:mt-20 ">
              <div className="flex w-fit items-center gap-x-3 px-5 py-3 lg:px-9 lg:py-4 xl:px-15 xl:py-6 rounded-[50px] bg-white text-black font-medium ">
                <button className="uppercase text-[3vw] lg:text-[1.3vw] xl:text-[.7vw] ">Shope Now </button>
                <img src="/Slicing/Banner/button-arrow.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

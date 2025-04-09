import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[40vh] sm:h-[90vh] relative text-[white] ">
      <img
        src="./Slicing/Banner/bannere-image.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute w-full h-full top-0 left-0">
        <div className="relative w-full h-full grid items-center">
          <div className="m-auto text-center ">
            <h3 className="uppercase tracking-[.5rem] mb-5 ">OUR NURSERY</h3>
            <span className="inline-block w-10 h-[2px] bg-white mb-4 "></span>
            <h1 className="capitalize mb-4 text-[4vw] font-semibold ">
              Nurturing Nature's Beauty
            </h1>
            <p className="text-[1.3rem] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              quis. Facere tempore consequuntur, <br /> amet architecto
              accusantium magni inventore natus soluta.
            </p>

            <div className="inline-block mt-20 ">
              <div className="flex w-fit items-center gap-x-3 px-15 py-6 rounded-[50px] bg-white text-black font-medium ">
                <button className="uppercase ">Shope Now </button>
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

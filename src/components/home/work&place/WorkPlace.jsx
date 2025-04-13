import React from "react";

const WorkPlace = () => {
  return (
    <div className="w-full h-[65vh] lg:h-[100vh] xl:h-[85vh] px-[5vw] mt-10 lg:mt-15 2xl:pt-25 ">
      <div className="w-full">
        <h1 className="text-center text-nowrap text-[1.5rem] lg:text-[3rem] 2xl:text-[3.5rem] font-[200]">
          Our Sucessful <span className="font-semibold">work & Plant</span>
        </h1>
        <p className="text-center lg:text-[1rem] 2xl:text-[1.4rem] mt-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          praesentium illo delectus! Praesentium temporibus <br />
          <span className="invisible lg:visible">
            provident ducimus,consequuntur ipsa quas fugiat ea minima sunt!{" "}
          </span>
        </p>
      </div>
      <div className="w-full h-[40vh] lg:h-[60vh] xl:h-[48vh] lg:mt-20 bg-[url('/Slicing/Workplace/back-image-workspace.jpg')] bg-no-repeat bg-cover object-center bg-left lg:bg-center ">
        <div className="flex justify-center">
          <div className=" text-center w-[85vw] lg:w-[60vw] xl:w-[43vw] bg-[#FFFFFF] flex items-center justify-center rounded-full drop-shadow-xl py-1 pl-5 pr-1 lg:py-2 lg:pl-9 lg:pr-2 mt-15 2xl:mt-20 ">
            <input
              type="text"
              id="places"
              placeholder="Search by nearby places "
              className="w-full h-full outline-none placeholder:text-lg placeholder:font-medium text-xl "
            />

            <label htmlFor="places">
              <img
                src="/Slicing/Workplace/search-line.svg"
                alt=""
                className="bg-[#FF9812] rounded-full p-2 lg:p-5 "
              />
            </label>
          </div>
        </div>
        <div>
          <div className="px-[6.5vw] mt-10 2xl:mt-20 ">
            {/* card */}
            <div className="w-[6rem] ">
              <img src="/Slicing/Workplace/icon.png" alt="" />
              <h2 className="text-center mt-5 text-[1.25rem]">Kolkata</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPlace;

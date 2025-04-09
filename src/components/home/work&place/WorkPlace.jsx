import React from "react";

const WorkPlace = () => {
  return (
    <div className="w-full h-[85vh] px-[5vw] pt-25 ">
      <div className="w-full">
        <h1 className="text-center text-[3vw] font-light">
          Our Sucessful <span className="font-semibold">work & Plant</span>
        </h1>
        <p className="text-center text-[22px] mt-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          praesentium illo delectus! Praesentium temporibus <br />
          provident ducimus,consequuntur ipsa quas fugiat ea minima sunt!{" "}
        </p>
      </div>
      <div className="w-full h-[48vh] mt-20 bg-[url('public/Slicing/Workplace/back-image-workspace.jpg')] bg-no-repeat object-cover object-center bg-center ">
        <div className="flex justify-center">
          <div className=" text-center w-[40vw] bg-[#FFFFFF] flex items-center justify-center rounded-full drop-shadow-xl py-2 pl-9 pr-2 mt-20 ">
            <input
              type="text"
              id="places"
              placeholder="Search by nearby places "
              className="w-full h-full outline-none placeholder:text-lg placeholder:font-medium text-xl "
            />

            <label htmlFor="places">
              <img
                src="public/Slicing/Workplace/search-line.svg"
                alt=""
                className="bg-[#FF9812] rounded-full px-5 py-5 "
              />
            </label>
          </div>
        </div>
        <div>
          <div className="px-[6.5vw] mt-20 ">
            {/* card */}
            <div className="w-[6rem] ">
              <img src="public/Slicing/Workplace/icon.png" alt="" />
              <h2 className="text-center mt-5 text-xl">Kolkata</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPlace;

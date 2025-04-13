import React from "react";

const TrandingPlant = () => {
  return (
    <div className="w-full h-[70vh] lg:min-h-[100vh] xl:min-h-[80vh] px-[5vw] relative overflow-hidden ">
      <div className="w-full h-[30vh] lg:h-[55vh] bg-black px-[5vw] pt-10 relative z-[80] ">
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
      <div className="w-full h-[40vh] relative top-[0vw] lg:-top-[7rem] xl:-top-[10vw] px-[5vw] flex flex-nowrap justify-center gap-x-7 z-[99] ">
        {/* carts */}
        <div className="w-[80vw] h-[85vw] lg:w-[25vw] lg:h-[26vw] xl:w-[18.7vw] xl:h-[22vw] ">
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
        {/* -- */}
      </div>
    </div>
  );
};

export default TrandingPlant;

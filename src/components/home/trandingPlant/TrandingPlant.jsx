import React from "react";

const TrandingPlant = () => {
  return (
    <div className="w-full h-[70vh] lg:min-h-[100vh] xl:min-h-[80vh] px-[5vw] relative overflow-hidden ">
      <div className="w-full h-[30vh] lg:h-[50vh] bg-black px-[5vw] pt-10 ">
        <h1 className="text-white text-[6.5vw] lg:text-[4.5vw] xl:text-[2.7vw] font-light ">
          The Most <span className="font-semibold">Tranding Plant</span>
        </h1>
        <p className="text-[#7D7D7D] text-[4vw] lg:text-[1.7vw] xl:text-xl mt-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem <br />{" "}
          <span className="invisible lg:visible">reprehenderit accusantium quasi sed corrupti rerum nulla <br /> non
          maxime.</span>
        </p>
      </div>
      <div className="h-[40vh] absolute top-[50vw] lg:top-[23vw] xl:top-[15vw] px-[5vw] flex gap-x-7 shrink-0 ">
        {/* carts */}
        <div className="w-[80vw] h-[85vw] lg:w-[25vw] lg:h-[26vw] xl:w-[18.7vw] xl:h-[22vw] ">
          <img
            src="/Slicing/Popular product/image_1.jpg"
            alt=""
            className="w-full h-[50vw] lg:h-[14vw] object-cover object-center bg-center "
          />
          <h4 className="font-semibold lg:text-[1.8vw] xl:text-xl my-2 xl:my-4 ">
            lxora (Rugmini) Plant-yellow
          </h4>
          <h4>⭐⭐⭐⭐⭐</h4>
          <div className="flex items-center justify-between">
            <h4 className="text-[#787878] lg:text-[1.8vw] xl:text-[20px] font-medium ">
              MRP:{" "}
              <small className="text-[#17C354] mr-1 lg:text-[1.4] xl:text-[17px] ">
                Rs
              </small>
              <span
                className="text-black lg:text-[2.5vw] xl:text-3xl font-semibold
               "
              >
                128
              </span>
            </h4>
            <button className="bg-[#F4F4F4] font-medium rounded-full px-5 py-3 lg:text-[1.2vw] xl:text-[.8vw] hover:bg-[#FF9812] duration-300 ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrandingPlant;

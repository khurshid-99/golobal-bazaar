import React from "react";

const TutorialVideo = () => {
  return (
    <div className="w-full min-h-[110vh] px-[5vw]">
      <div className="w-full h-full lg:min-h-[110vh] bg-[#F6F6F6] px-[5vw] py-[4vw] ">
        <div className=" ">
          <h1 className="text-[8vw] lg:text-[5vw] xl:text-[3vw] font-light ">
            Our Tutorial <span className="font-semibold">Video</span>{" "}
          </h1>
          <p className="lg:text-xl xl:text-2xl lg:leading-9 lg:mb-20 -mb-10 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> <span className="invisible lg:visible"> Fuga
            nobis aliquam voluptas assumenda blanditiis <br /> praesentium</span>
          </p>
        </div>
        <div className="w-full h-[70vh] lg:h-[68vh] flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full h-1/2 lg:w-1/2 lg:h-full mb-5 lg:mb-0 ">
            <img
              src="/Slicing/Video/image_1.jpg"
              alt=""
              className="w-full h-full object-cover bg-center "
            />
          </div>
          <div className="w-full h-1/2 lg:w-1/2 lg:h-full flex flex-col lg:gap-y-4 ">
          {/* 4-images */}
            <div className="w-ful h-1/2 flex gap-4 mb-2 lg:mb-0 lg:px-[1rem] ">
              <img
                src="/Slicing/Video/image_2.jpg"
                alt=""
                className="w-1/2 h-full object-cover bg-center"
              />
              <img
                src="/Slicing/Video/image_3.jpg"
                alt=""
                className="w-1/2 h-full object-cover bg-center"
              />
            </div>

            <div className="w-ful h-1/2 flex gap-4 mt-2 lg:mt-0 lg:px-[1rem] ">
              <img
                src="/Slicing/Video/image_4.jpg"
                alt=""
                className="w-1/2 h-full object-cover bg-center"
              />
              <img
                src="/Slicing/Video/image_5.jpg"
                alt=""
                className="w-1/2 h-full object-cover bg-center"
              />
            </div>
          </div>
        </div>
       <div className="flex justify-center ">
       <button className="flex items-center justify-center bg-[#FF9812] rounded-full px-10 py-6 mt-10 lg:mt-15 xl:mt-25 mb-10 text-white text-[3vw] lg:text-[14px] uppercase  ">
          view more tutorial
          <img src="/Slicing/Banner/button-arrow.png" alt="" className="ml-2" />{" "}
        </button>
       </div>
      </div>
    </div>
  );
};

export default TutorialVideo;

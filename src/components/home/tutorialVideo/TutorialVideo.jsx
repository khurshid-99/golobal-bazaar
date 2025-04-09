import React from "react";

const TutorialVideo = () => {
  return (
    <div className="w-full min-h-[110vh] px-[5vw] ">
      <div className="w-full min-h-[110vh] bg-[#F6F6F6] px-[5vw] py-[4vw] ">
        <>
          <h1 className="text-[3vw] font-light ">
            Our Tutorial <span className="font-semibold">Video</span>{" "}
          </h1>
          <p className="text-2xl leading-9 mb-20 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Fuga
            nobis aliquam voluptas assumenda blanditiis <br /> praesentium
          </p>
        </>
        <div className="w-full h-[68vh] flex items-center justify-between ">
          <div className="w-1/2 h-full">
            <img
              src="/Slicing/Video/image_1.jpg"
              alt=""
              className="w-full h-full object-cover bg-center "
            />
          </div>
          <div className="w-1/2 h-full flex flex-col gap-y-4 ">
            <div className="w-ful h-1/2 flex gap-4 px-[1rem] ">
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
            <div className="w-ful h-1/2 flex gap-4 px-[1rem] ">
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
       <button className="flex items-center justify-center bg-[#FF9812] rounded-full px-10 py-6 mt-25 mb-10 text-white text-[14px] uppercase  ">
          view more tutorial
          <img src="/Slicing/Banner/button-arrow.png" alt="" className="ml-2" />{" "}
        </button>
       </div>
      </div>
    </div>
  );
};

export default TutorialVideo;

import React from "react";

const Category = () => {
  return (
    <div className="w-full min-h-[45vh] px-[5vw] relative overflow-hidden lg:mb-10 ">
      <div className="w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/Slicing/Category/back-image-category.jpg')] pb-[5vw] lg:pb-[3vw] ">
        <div className="px-[5vw] pt-[3vw] pb-[2vw] ">
          <h1 className="font-[200] text-[1.8rem] lg:text-[2.5rem] 2xl:text-[3.7rem] ">
            Our Best <span className="font-semibold">Category</span>{" "}
          </h1>
          <p className="text-[.9rem] lg:text-[1.25rem] mt-3">
            Lorem Ipsum is simply dummy text of the printing and <br />{" "}
            typesetting industry.Lorem Ipsum.
          </p>
        </div>
        <div className="flex items-center gap-x-17 px-[5vw] mt-5 ">
          <div>
            <img src="/Slicing/Category/plant.png" alt="" />
            <h3 className="text-[.9rem] lg:text-[1.25rem] mt-3 text-nowrap">
              Indore Plant
            </h3>
          </div>
        </div>
      </div>
      {/* ---- */}
    </div>
  );
};

export default Category;

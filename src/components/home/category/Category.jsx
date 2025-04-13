import React from "react";

const Category = () => {
  return (
    <div className="w-full min-h-[45vh] px-[5vw] relative overflow-hidden lg:mb-10 ">
      <div className="w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/Slicing/Category/back-image-category.jpg')] pb-[5vw] lg:pb-[3vw] ">
        <div className="px-[5vw] pt-[3vw] pb-[2vw] ">
          <h1 className="text-[7vw] lg:text-[4.5vw] xl:text-[3vw] ">
            Our Best <strong>Category</strong>{" "}
          </h1>
          <p className="text-[4vw] lg:text-xl mt-3">
            Lorem Ipsum is simply dummy text of the printing and <br />{" "}
            typesetting industry.Lorem Ipsum.
          </p>
        </div>
        <div className="flex items-center gap-x-17 px-[5vw] mt-5 ">
          <div>
            <img src="/Slicing/Category/plant.png" alt="" />
            <h3 className="text-[4vw] lg:text-xl mt-3 text-nowrap">Indore Plant</h3>
          </div>
         
        </div>
      </div>
      {/* ---- */}
    </div>
  );
};

export default Category;

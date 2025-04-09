import React from "react";

const Category = () => {
  return (
    <div className="w-full h-[50vh] px-[5vw] relative overflow-hidden mb-10 ">
      <div className="w-full h-full object-cover bg-center bg-[url('public/Slicing/Category/back-image-category.jpg')] ">
        <div className="px-[5vw] pt-[3vw] pb-[2vw] ">
          <h1 className="text-[3vw] ">
            Our Best <strong>Category</strong>{" "}
          </h1>
          <p className="text-xl mt-3">
            Lorem Ipsum is simply dummy text of the printing and <br />{" "}
            typesetting industry.Lorem Ipsum.
          </p>
        </div>
        <div className="flex items-center gap-x-17 px-[5vw] mt-5 ">
          <div>
            <img src="public/Slicing/Category/plant.png" alt="" />
            <h3 className="text-xl mt-3">Indore Plant</h3>
          </div>
          <div>
            <img src="public/Slicing/Category/plant.png" alt="" />
            <h3 className="text-xl mt-3">Indore Plant</h3>
          </div>
          <div>
            <img src="public/Slicing/Category/plant.png" alt="" />
            <h3 className="text-xl mt-3">Indore Plant</h3>
          </div>
          <div>
            <img src="public/Slicing/Category/plant.png" alt="" />
            <h3 className="text-xl mt-3">Indore Plant</h3>
          </div>
        </div>
      </div>
      {/* ---- */}
    </div>
  );
};

export default Category;

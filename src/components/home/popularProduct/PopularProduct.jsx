import React from "react";

const PopularProduct = () => {
  const products = [
    {
      img: "/Slicing/Popular product/image_1.jpg",
      name: "lxora (Rugmini) Plant-yellow",
      rating: "⭐⭐⭐⭐⭐",
      rs: 128,
    },
    {
      img: "/Slicing/Popular product/image_1.jpg",
      name: "lxora (Rugmini) Plant-yellow",
      rating: "⭐⭐⭐⭐⭐",
      rs: 128,
    },
    {
      img: "/Slicing/Popular product/image_1.jpg",
      name: "lxora (Rugmini) Plant-yellow",
      rating: "⭐⭐⭐⭐⭐",
      rs: 128,
    },
    {
      img: "/Slicing/Popular product/image_1.jpg",
      name: "lxora (Rugmini) Plant-yellow",
      rating: "⭐⭐⭐⭐⭐",
      rs: 128,
    },
    {
      img: "/Slicing/Popular product/image_1.jpg",
      name: "lxora (Rugmini) Plant-yellow",
      rating: "⭐⭐⭐⭐⭐",
      rs: 128,
    },
    {
      img: "/Slicing/Popular product/image_1.jpg",
      name: "lxora (Rugmini) Plant-yellow",
      rating: "⭐⭐⭐⭐⭐",
      rs: 128,
    },
    {
      img: "/Slicing/Popular product/image_1.jpg",
      name: "lxora (Rugmini) Plant-yellow",
      rating: "⭐⭐⭐⭐⭐",
      rs: 128,
    },
    {
      img: "/Slicing/Popular product/image_1.jpg",
      name: "lxora (Rugmini) Plant-yellow",
      rating: "⭐⭐⭐⭐⭐",
      rs: 128,
    },
  ];

  return (
    <div className="w-full min-h-[100vh] px-[5vw] relative ">
      {/* this is top */}
      <div className="w-full h-[24vh] lg:h-[37vh] xl:h-[50vh] 2xl:h-[37vh] bg-[#F6F6F6] pt-[3vw] px-[5vw] ">
        <h1 className="font-light text-[8vw] lg:text-[5vw] 2xl:text-[3vw] capitalize ">
          Popular <span className="font-medium  ">Product</span>
        </h1>
      </div>
      {/* --This is main div of cards -- */}
      <div className="w-full min-h-[100vh] relative -top-[25vw] lg:-top-[7vw] px-[5vw] flex flex-row  justify-center gap-x-4 gap-y-8 lg:gap-y-15 flex-wrap ">
        {/* this is card */}
        {products.map((product, index) => (
          <div key={index} className=" w-[80vw] h-[85vw] lg:w-[25vw] lg:h-[30vw] xl:w-[19vw]  2xl:h-[22vw] hover:drop-shadow-2xl duration-300 bg-white rounded-b-2xl ">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-[50vw] lg:h-[14vw] object-cover object-center bg-center "
            />
            <div className="px-2">
              <h4 className="font-semibold lg:text-[1.8vw] xl:text-xl my-2 xl:my-4 ">
                {product.name}
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
                    {product.rs}
                  </span>
                </h4>
                <button className="bg-[#F4F4F4] font-medium rounded-full px-5 py-3 lg:text-[1.2vw] xl:text-[.8vw] hover:bg-[#FF9812] duration-300 ">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* -- */}

        {/* view more product button */}
        <div className="w-full block">
          <div className="w-full flex justify-center mt-5 ">
            <button className="flex items-center justify-center bg-[#FF9812] rounded-full px-10 py-6 xl:px-15 text-white text-[3vw] lg:text-[14px] uppercase  ">
              view more product
              <img
                src="/Slicing/Banner/button-arrow.png"
                alt=""
                className="ml-2"
              />{" "}
            </button>
          </div>
        </div>

        {/* -- */}
      </div>
    </div>
  );
};

export default PopularProduct;

// -----------------------------------------------------------------------------------

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import CompareSlot from "./CompareSlot";
import ProductCard from "./ProductCard";

const CompayerProduct = () => {
  const [productOne, setProductOne] = useState(null);
  const [productTwo, setProductTwo] = useState(null);
  const [selectTarget, setSelectTarget] = useState(null);

  const allProductsPage = useRef();

  const allProducts = [
    {
      img: "/Slicing/Popular product/image_1.jpg",
      name: "lxora (Rugmini) Plant-yellow",
      rating: "⭐⭐⭐⭐⭐",
      rs: 128,
      id: 1,
    },
    {
      img: "/Slicing/Popular product/image_1.jpg",
      name: "lxora (Rugmini) Plant-yellow",
      rating: "⭐⭐⭐⭐⭐",
      rs: 130,
      id: 2,
    },
    {
      img: "/Slicing/Popular product/image_1.jpg",
      name: "lxora (Rugmini) Plant-yellow",
      rating: "⭐⭐⭐⭐⭐",
      rs: 140,
      id: 3,
    },
    {
      img: "/Slicing/Popular product/image_1.jpg",
      name: "lxora (Rugmini) Plant-yellow",
      rating: "⭐⭐⭐⭐⭐",
      rs: 140,
      id: 4,
    },
    {
      img: "/Slicing/Popular product/image_1.jpg",
      name: "lxora (Rugmini) Plant-yellow",
      rating: "⭐⭐⭐⭐⭐",
      rs: 140,
      id: 5,
    },
    {
      img: "/Slicing/Popular product/image_1.jpg",
      name: "lxora (Rugmini) Plant-yellow",
      rating: "⭐⭐⭐⭐⭐",
      rs: 140,
      id: 6,
    },
    {
      img: "/Slicing/Popular product/image_1.jpg",
      name: "lxora (Rugmini) Plant-yellow",
      rating: "⭐⭐⭐⭐⭐",
      rs: 140,
      id: 7,
    },
    {
      img: "/Slicing/Popular product/image_1.jpg",
      name: "lxora (Rugmini) Plant-yellow",
      rating: "⭐⭐⭐⭐⭐",
      rs: 140,
      id: 8,
    },
    {
      img: "/Slicing/Popular product/image_1.jpg",
      name: "lxora (Rugmini) Plant-yellow",
      rating: "⭐⭐⭐⭐⭐",
      rs: 140,
      id: 9,
    },
    {
      img: "/Slicing/Popular product/image_1.jpg",
      name: "lxora (Rugmini) Plant-yellow",
      rating: "⭐⭐⭐⭐⭐",
      rs: 140,
      id: 10,
    },
  ];

  const openProductPicker = (target) => {
    setSelectTarget(target);
    gsap.to(allProductsPage.current, {
      display: "inline-block",
      ease: "linear",
      duration: 1,
      top: 0,
      height: "100%",
    });
  };

  const closeProductPicker = () => {
    gsap.to(allProductsPage.current, {
      display: "none",
      duration: 1,
      height: 0,
      top: "-100vh",
    });
  };

  const handleAddProduct = (product) => {
    if (selectTarget === "one") {
      setProductOne(product);
    } else if (selectTarget === "two") {
      setProductTwo(product);
    }
    closeProductPicker();
  };

  useEffect(() => {
    // console.log("Product One:", productOne);
    // console.log("Product Two:", productTwo);
  }, [productOne, productTwo]);

  return (
    <div className="w-full min-h-[50vh] px-[5vw] pb-[4vw] overflow-hidden ">
      <div className="flex justify-around border rounded-[10px] pt-2 flex-wrap  ">
        <div className="flex justify-center gap-x-4 relative h-full lg:h-[35vw] ">
          <CompareSlot
            product={productOne}
            label="One"
            openPicker={() => openProductPicker("one")}
          />
          <img
            src="/Slicing/versus-logo-vs-letters-sports-600nw-2426761097.jpeg"
            alt=""
            className="mix-blend-multiply w-[15vw] absolute z-[99] "
          />
          <CompareSlot
            product={productTwo}
            label="Two"
            openPicker={() => openProductPicker("two")}
          />
        </div>
        {/* --- */}
        <div className="flex justify-center gap-x-4 relative h-full ">
          <div className="w-[40vw] h-[80vw] mb-2 lg:w-[25vw] lg:h-[30vw] xl:w-[19vw] 2xl:h-[22vw] hover:drop-shadow-2xl duration-300 bg-white rounded-b-2xl ">
            <img
              src="/Slicing/Popular product/image_1.jpg"
              alt=""
              className="w-full h-[30vw] lg:h-[14vw] object-cover object-center bg-center "
            />
            <div className="px-2">
              <h4 className="font-semibold lg:text-[1.8vw] xl:text-xl my-2 xl:my-4 ">
                lxora (Rugmini) Plant-yellow
              </h4>
              <h4>⭐⭐⭐⭐⭐</h4>
              <div className="flex flex-col sm:flex-row items-start sm:items-center mt-2 gap-y-2 justify-between">
                <h4 className="text-[#787878] lg:text-[1.8vw] xl:text-[20px] font-medium ">
                  MRP:{" "}
                  <small className="text-[#17C354] mr-1 lg:text-[1.4] xl:text-[17px] ">
                    Rs
                  </small>
                  <span
                    className="text-black lg:text-[2.5vw] xl:text-3xl font-semibold
               "
                  >
                    140
                  </span>
                </h4>
                <button className="bg-[#F4F4F4] font-medium rounded-full px-5 py-3 lg:text-[1.2vw] xl:text-[.8vw] hover:bg-[#FF9812] duration-300 ">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <img
            src="/Slicing/versus-logo-vs-letters-sports-600nw-2426761097.jpeg"
            alt=""
            className="mix-blend-multiply w-[15vw] absolute z-99 "
          />
          <div className=" w-[40vw] h-[80vw] mb-2 lg:w-[25vw] lg:h-[30vw] xl:w-[19vw]  2xl:h-[22vw] hover:drop-shadow-2xl duration-300 bg-white rounded-b-2xl ">
            <img
              src="/Slicing/Popular product/image_1.jpg"
              alt=""
              className="w-full h-[30vw] lg:h-[14vw] object-cover object-center bg-center "
            />
            <div className="px-2">
              <h4 className="font-semibold lg:text-[1.8vw] xl:text-xl my-2 xl:my-4 ">
                lxora (Rugmini) Plant-yellow
              </h4>
              <h4>⭐⭐⭐⭐⭐</h4>
              <div className="flex flex-col sm:flex-row items-start sm:items-center mt-2 gap-y-2 justify-between">
                <h4 className="text-[#787878] lg:text-[1.8vw] xl:text-[20px] font-medium ">
                  MRP:{" "}
                  <small className="text-[#17C354] mr-1 lg:text-[1.4] xl:text-[17px] ">
                    Rs
                  </small>
                  <span
                    className="text-black lg:text-[2.5vw] xl:text-3xl font-semibold
               "
                  >
                    140
                  </span>
                </h4>
                <button className="bg-[#F4F4F4] font-medium rounded-full px-5 py-3 lg:text-[1.2vw] xl:text-[.8vw] hover:bg-[#FF9812] duration-300 ">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Picker Modal */}
      <div className="overflow-hidden">
        <div
          ref={allProductsPage}
          className="mt-10 h-[0] -top-[100vh] relative hidden "
        >
          <div className="w-full min-h-screen flex flex-wrap justify-center gap-y-10 gap-x-10 mb-20">
            {allProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={() => handleAddProduct(product)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompayerProduct;

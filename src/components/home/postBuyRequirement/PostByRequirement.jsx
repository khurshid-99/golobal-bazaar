import React from "react";

const PostByRequirement = () => {
  return (
    <div className="w-full h-[114vh] relative p-[5vw]  ">
      <img
        src="public/Slicing/Post Buy Requirement/back-image.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full p-[5vw] flex items-center justify-center">
        {/* section Left */}
        <section className="w-1/2 h-full p-[5vw] text-white ">
          {/*  */}
          <h1 className="text-[2.5vw] font-light ">Nurturing Nature's</h1>
          <h1 className="text-[2.5vw] font-medium ">Beauty Lorem Ipsum</h1>
          {/*  */}
          <div className=" border border-[#ffffff4d] flex flex-col items-center justify-center w-full  h-[25vw] my-20 relative ">
            {/* this is line */}
            <div className="w-[10rem] h-[1px] bg-[#ffffff4d] origin-bottom rotate-90 absolute top-38 " />
            <div className="w-[15rem] h-[1px] bg-[#ffffff4d] rotate-0 absolute top-1/2 left-21 " />
            <div className="w-[10rem] h-[1px] bg-[#ffffff4d] origin-bottom rotate-90 absolute top-82 " />
            <div className="w-[15rem] h-[1px] bg-[#ffffff4d] origin-bottom rotate-0 absolute right-21 top-1/2 " />

            {/* This is box */}
            <div className="flex items-center justify-between gap-1 w-full h-1/2 ">
              {/* This is Box -1 */}
              <div className="w-1/2 h-full flex flex-col items-center justify-center gap-5 ">
                <div className="">
                  <span className="inline-block w-[2px] h-[15px] mr-5 bg-[#FFA700] "></span>
                  <h1 className="inline-block uppercase tracking-[4px] text-[1.1rem] font-medium ">
                    Request
                  </h1>
                </div>
                <h1 className="text-5xl font-semibold ">1035</h1>
              </div>
              {/* This is Box -2 */}
              <div className="w-1/2 h-full flex flex-col items-center justify-center gap-5 ">
                <div className="">
                  <span className="inline-block w-[2px] h-[15px] mr-5 bg-[#FFA700] "></span>
                  <h1 className="inline-block uppercase tracking-[4px] text-[1.1rem] font-medium ">
                    Quation
                  </h1>
                </div>
                <h1 className="text-5xl font-semibold ">875</h1>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1 w-full h-1/2 ">
              {/* This is Box -3 */}
              <div className="w-1/2 h-full flex flex-col items-center justify-center gap-5 ">
                <div className="">
                  <span className="inline-block w-[2px] h-[15px] mr-5 bg-[#FFA700] "></span>
                  <h1 className="inline-block uppercase tracking-[4px] text-[1.1rem] font-medium ">
                    Order
                  </h1>
                </div>
                <h1 className="text-5xl font-semibold ">1236</h1>
              </div>
              {/* This is Box -4 */}
              <div className="w-1/2 h-full flex flex-col items-center justify-center gap-5 ">
                <div className="">
                  <span className="inline-block w-[2px] h-[15px] mr-5 bg-[#FFA700] "></span>
                  <h1 className="inline-block uppercase tracking-[4px] text-[1.1rem] font-medium ">
                    Dispatch
                  </h1>
                </div>
                <h1 className="text-5xl font-semibold ">879</h1>
              </div>
            </div>
            {/*  */}
          </div>
        </section>
        {/* section Right */}
        <section className="w-1/2 h-full  pt-[6vw] ">
          <div className="bg-[#ffffff] w-full h-full p-[5vw] ">
            <h1 className="text-[3vw] ">
              Post Buy <strong>Requirement</strong>
            </h1>
            <h3 className="text-2xl text-nowrap mt-4 ">
              Get the Best Deals and Exclusive Offers with{" "}
              <span className="text-[#FF9812] ">Golobal Bazaar</span>
            </h3>
            <form action="">
              <div className=" p-4 rounded-xl bg-[#FDFDFD] drop-shadow-2xl mt-5 mb-8 flex items-center  ">
                <select name="" id="" className="text-xl">
                  <option value="">
                    <img
                      src="public/Slicing/Post Buy Requirement/flag.png"
                      alt=""
                      className="w-[2rem] h-[2rem] object-cover "
                    />
                  </option>
                </select>
                <span className="inline-block w-[2px] h-[40px] bg-[#8a8a8a63] mx-5 "></span>
                <input
                  type="tex"
                  id="phone"
                  name="phone"
                  placeholder="9564 258 365"
                  className="outline-none placeholder:text-xl text-xl w-full "
                />
              </div>
              <label htmlFor="looking" className="text-lg text-[#4e4e4e] ">
                Tell us about your requirement
              </label>
              <div className="p-6 rounded-xl bg-[#FDFDFD] drop-shadow-2xl mt-5 mb-10 flex items-center">
                <label htmlFor="looking">
                  <img
                    src="public/Slicing/Header/search-icon.png"
                    alt=""
                    className="mr-4"
                  />
                </label>
                <input
                  id="looking"
                  type="text"
                  placeholder="Enter the product you are looking for..."
                  className="outline-none placeholder:text-xl text-xl w-full "
                />
              </div>
              <label htmlFor="" className="text-lg">
                Personalise your inquiry
              </label>
              <div className="p-6 rounded-xl bg-[#FDFDFD] drop-shadow-2xl mt-5  ">
                <div className="inline-block ">
                  <img
                    src="public/Slicing/Post Buy Requirement/microfone.png"
                    alt=""
                    className="inline-block"
                  />
                  <h2 className="inline-block">Record</h2>
                </div>

                <input
                  type="text"
                  placeholder="chick hear to record"
                  className="w-full outline-none mt-2 "
                />
              </div>
              <div className="flex justify-end mt-15 ">
                <button className="uppercase flex items-center justify-center bg-[#F79311] px-17 py-6 rounded-full text-white tracking-[2px] text-sm ">
                  submit
                  <img
                    src="public/Slicing/Banner/button-arrow.png"
                    alt=""
                    className=" "
                  />
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostByRequirement;

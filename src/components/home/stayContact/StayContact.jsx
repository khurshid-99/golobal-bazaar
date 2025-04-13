const StayContact = () => {
  return (
    <div className="w-full lg:h-[60vh] xl:h-[50vh] flex flex-col lg:flex-row bg-[#ffffff] ">
      <section className="w-full lg:w-1/2 h-full px-[5vw] lg:px-0 lg:pl-[10vw] pt-[5vw] ">
        <h4 className="tracking-[2px] lg:text-[1.1rem] uppercase flex items-center ">
          Stay Connected{" "}
          <span className="inline-block w-[1.5rem] h-[1px] bg-black ml-5 "></span>
        </h4>
        <h1 className="text-3xl lg:text-[2.5vw] font-light mt-3 ">
          Sign up to
        </h1>
        <h1 className="text-3xl lg:text-[3rem] font-medium mt-1 lg:mt-2 ">
          Our Newsletter
        </h1>
        <p className="mt-5 lg:text-[0.9rem] leading-[1.6rem] ">
          We're a national and international moving company based in India.
          <br />
          Our target audience includes people relocating <br />
          across states and overseas.
        </p>
      </section>
      <section className="w-full lg:w-1/2 h-full relative lg:pt-[8vw] lg:pl-[8vw] overflow-hidden ">
        <div
          className=" w-[20rem] h-[20rem] lg:w-[25rem] lg:h-[25rem] xl:w-[35rem] xl:h-[35rem] bg-[#EFF2F7] absolute rounded-full -bottom-36 lg:-bottom-30 lg:-right-0 xl:-bottom-50 right-1 xl:right-30 z-49 
      "
        ></div>
        <div className="z-50 w-full mt-5 lg:mt-0 relative px-[5vw] lg:px-0 ">
          <h2 className="text-xl lg:text-[2vw] ">Enter Your </h2>
          <h2 className="text-xl lg:text-[2vw] lg:-mt-3 ">email-address</h2>
          <h6 className="my-4 lg:my-8 tracking-[2px] uppercase text-[15px] ">
            stay in toch
          </h6>
          <form className="w-full flex items-center ">
            <input
              required
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent border-b-2 w-full px-[5vw] lg:px-0 lg:w-[20vw] py-2 outline-none "
            />
            <button className="bg-black p-3 ml-5 rounded-full">
              <img src="/Slicing/arrow-right-long-line.png" alt="" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default StayContact;

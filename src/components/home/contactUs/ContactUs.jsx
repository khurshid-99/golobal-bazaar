import React from "react";

const ContactUs = () => {
  return (
    <div
      className="w-full h-[180vh] min-h-[145vh] lg:h-[170vh] xl:h-[230vh] 2xl:h-[145vh] px-[5vw] "
      style={{
        background: "linear-gradient(145deg, #E4E9F2 55%, #EDF0F5 50%)",
      }}
    >
      {/* top */}
      <div className="w-full min-h-[35vh] lg:h-[50vh] xl:h-[60vh] 2xl:h-[42vh] pt-[5vw] ">
        <h4 className="text-center capitalize text-[1rem] lg:text-[1.2rem] leading-5 ">
          Contact Us <br />
          <span className="inline-block bg-[black] w-[2rem] h-[1.5px]  "></span>{" "}
        </h4>
        <h1 className="font-light text-[2rem] lg:text-[3.3rem] text-center ">
          Need a <samp className="font-medium ">Quick Help</samp>
        </h1>
        <p className="text-center text-[#434344] text-[.9rem] lg:text-[1.2rem] mt-5 ">
          Innisfree Hotels is a hotal company delivering exceptional service,
          guest satisfaction and <br />
          return on invesment since 1985
        </p>
      </div>
      {/* bottom */}
      <div className="w-full lg:h-[100vh] xl:h-[150vh] 2xl:h-[85vh] min-h-[85vh] flex flex-col lg:flex-row items-center justify-center ">
        {/* section left */}
        <div className="w-full lg:w-[35vw] 2xl:w-[25vw] lg:h-full xl:h-full 2xl:h-full px-[3vw] py-[5vw] bg-[#1A1E25] flex flex-col justify-between ">
          <div>
            <h4 className="text-[1.5rem] font-medium text-[#FFDC7A] ">
              Hi there
            </h4>
            <h1 className="text-[2.5rem] text-nowrap text-white font-light">
              Innisfree <span className="font-medium">Hotels</span>
            </h1>
          </div>
          <div className="text-white">
            <h4 className="text-[1.1rem] font-[400] ">Address :</h4>
            <h3 className="text-[#B4BACA] mt-3 text-[1.1rem] ">
              113 Bay Birdge Drive Gulf <br />
              Breeze, FL 32561{" "}
            </h3>
            {/* -- */}
            <h4 className="text-[1.1rem] mt-10 font-[400] ">Call Us :</h4>
            <h3 className="text-[#B4BACA] mt-3 text-[1.1rem] ">
              (850) 934-3690
            </h3>
            {/* -- */}
            <h4 className="text-[1.1rem] mt-10 font-[400] ">Email :</h4>
            <h3 className="text-[#B4BACA] mt-3 text-[1.1rem] ">
              frontdesk@innisfreehotels.com
            </h3>
          </div>
        </div>
        {/* section righi */}
        <div className="w-full lg:w-[55vw] xl:w-[45vw] lg:h-full xl:h-full 2xl:h-full  p-[5vw] bg-[#ffffff] ">
          <form action="">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-[1.22rem]  ">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                required
                className="outline-none border-b-[2px] border-[#C9CDD3] placeholder:text-[#C9CDD3] py-2 "
              />
            </div>
            <div className="flex flex-col mt-15 ">
              <label htmlFor="email" className="text-[1.22rem]  ">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                className="outline-none border-b-[2px] border-[#C9CDD3] placeholder:text-[#C9CDD3] py-2 "
              />
            </div>
            <div className="flex flex-col mt-15 ">
              <label htmlFor="help" className="text-[1.22rem]  ">
                What can we help you
              </label>
              <textarea
                name=""
                rows={5}
                cols={40}
                maxlength={700}
                id="help"
                placeholder="Message"
                className="outline-none border-b-[2px] border-[#C9CDD3] placeholder:text-[#C9CDD3] mt-5 "
              ></textarea>
            </div>
            <div className="mt-17 lg:mt-7 xl:mt-20">
              <button className="w-full uppercase lg:text-[1.1rem] text-white bg-[#F47527] py-5  ">
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

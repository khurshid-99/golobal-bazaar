import React from "react";

const ClientSays = () => {
  return (
    <div className="w-full h-[90vh] lg:h-[100vh] xl:h-[80vh] 2xl:h-[80vh] p-[5vw] flex flex-col lg:flex-row items-center justify-center ">
      {/* left */}
      <div className="w-full h-[70vw] lg:w-1/2 lg:h-full ">
        <img
          src="/Slicing/testimonial/image.jpg"
          alt=""
          className="w-full h-full object-cover bg-center"
        />
      </div>
      {/* right */}
      <div className="w-full h-[90vw] lg:w-1/2 lg:h-full pl-[5vw] relative ">
        <img
          src="/Slicing/testimonial/quote.png"
          alt=""
          className="w-[9vw] lg:w-[4vw] 2xl:w-[3.3vw] left-[70vw] top-3 lg:left-[38vw] lg:top-5 relative "
        />
        <h1 className="font-light text-[1.4rem] lg:text-[2.2rem] xl:text-[2.8rem] 2xl:text-[3.3rem] ">
          What our <span className="font-semibold">Client Says</span>{" "}
        </h1>
        {/* cart */}
        <div className="lg:mt-10 2xl:mt-15 w-full h-[35.5vw] xl:h-[25vw] 2xl:h-[19.2vw] relative">
          <p className="text-[4vw] lg:text-[1.8vw] xl:text-[1.3vw] 2xl:text-[1.50rem] text-[#777777] font-light xl:leading-10 ">
            Freundliche und sachliche Vorbereitung und Asufuhrung der <br />{" "}
            Bestattung meiner Mutter.{" "}
            <span className="invisible lg:visible">
              Dieses Bestattungshaus ist serios <br /> und auf jeden Fall weiter
              zu empfehlen ..
            </span>
          </p>
          <div className="flex items-center gap-x-5 absolute lg:bottom-20 ">
            <img src="/Slicing/testimonial/man-image.png" alt="" />
            <div>
              <h1 className="text-[6vw] lg:text-3xl font-semibold ">
                John Smith
              </h1>
              <h2 className="text-[#777777] text-[1rem] lg:text-xl">
                Lorem Ipsum
              </h2>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ClientSays;

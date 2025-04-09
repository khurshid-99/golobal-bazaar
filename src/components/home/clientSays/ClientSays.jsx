import React from "react";

const ClientSays = () => {
  return (
    <div className="w-full h-[80vh] p-[5vw] flex items-center justify-center ">
      <div className="w-1/2 h-full ">
        <img
          src="public/Slicing/testimonial/image.jpg"
          alt=""
          className="w-full h-full object-cover bg-center"
        />
      </div>
      <div className="w-1/2 h-full pl-[5vw] relative ">
        <img
          src="public/Slicing/testimonial/quote.png"
          alt=""
          className="left-150 top-5 relative "
        />
        <h1 className="font-light text-[2.5vw] ">
          What our <span className="font-semibold">Client Says</span>{" "}
        </h1>
        {/* cart */}
        <div className="mt-15 w-full h-[19.2vw] relative ">
          <p className="text-[1.50rem] text-[#777777] font-light leading-10 ">
            Freundliche und sachliche Vorbereitung und Asufuhrung der <br />{" "}
            Bestattung meiner Mutter. Dieses Bestattungshaus ist serios <br />{" "}
            und auf jeden Fall weiter zu empfehlen ..
          </p>
          <div className="flex items-center gap-x-5 absolute bottom-20 ">
            <img src="public/Slicing/testimonial/man-image.png" alt="" />
            <div>
              <h1 className="text-3xl font-semibold ">John Smith</h1>
              <h2 className="text-[#777777] text-xl">Lorem Ipsum</h2>
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default ClientSays;

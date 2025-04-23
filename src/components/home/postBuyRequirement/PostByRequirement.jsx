import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const PostByRequirement = () => {
  const audioChunk = useRef([]);
  const [recording, setRecording] = useState("");
  const mediaRecoderRef = useRef(null);
  const streamRef = useRef(null);

  // mick-Blink
  const mickBlinkOneRef = useRef();
  const mickBlinkTwoRef = useRef();

  // style
  const [removieMic, setRemovieMic] = useState(true);
  const [save, setSave] = useState(false);
  const [delet, setDelete] = useState(false);

  const StartRecoding = async (e) => {
    e.preventDefault();
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const mediaRecoder = new MediaRecorder(stream);
      audioChunk.current = [];

      mediaRecoder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunk.current.push(e.data);
        }
      };

      mediaRecoder.onstop = () => {
        const audioBlob = new Blob(audioChunk.current, { type: "audio/wav" });
        const audioURL = URL.createObjectURL(audioBlob);
        setRecording(audioURL);
      };

      mediaRecoderRef.current = mediaRecoder;
      mediaRecoder.start();

      setRemovieMic((prev) => !prev);
      setSave((prev) => !prev);
    } catch (error) {
      console.log("Recording error:", error);
    }
  };

  const StopRecoding = () => {
    try {
      if (mediaRecoderRef.current) {
        mediaRecoderRef.current.stop();
      }

      setSave((prev) => !prev);
      setDelete((prev) => !prev);
    } catch (error) {
      console.error("Stop error:", error);
    }
  };

  const Delete = () => {
    setRecording("");
    setRemovieMic((prev) => !prev);
    setDelete((prev) => !prev);
  };

  useEffect(() => {
    if (save && mickBlinkOneRef) {
      gsap.to(mickBlinkOneRef.current, {
        width: "3rem",
        height: "3rem",
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "none",
      });
      gsap.to(mickBlinkTwoRef.current, {
        width: "5rem",
        height: "5rem",
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "none",
      });
    }
  });

  return (
    <div className="w-full min-h-screen lg:h-[125vh] 2xl:h-[118vh] relative p-[5vw] ">
      <div className="bg-[white] lg:bg-[url(/Slicing/PostBuyRequirement/back-image.jpg)] w-full h-full object-cover bg-cover bg-no-repeat flex flex-col lg:flex-row items-center justify-center">
        {/* section Left */}
        <section className="w-full h-[55vh] lg:w-1/2 lg:h-full p-[5vw] text-white bg-[url(/Slicing/PostBuyRequirement/back-image.jpg)] lg:bg-[url()] bg-cover bg-center bg-no-repeat ">
          {/*  */}
          <h1 className="text-nowrap text-[1.6rem] lg:text-[2rem] 2xl:text-[2.8rem] font-[200] ">
            Nurturing Nature's
          </h1>
          <h1 className="text-[1.77rem] lg:text-[2.3rem] 2xl:text-[3.1rem] text-nowrap font-medium ">
            Beauty Lorem Ipsum
          </h1>
          {/*  */}
          <div className=" border border-[#ffffff4d] flex flex-col items-center justify-center w-full h-[50vw] lg:h-[25vw] my-10 lg:my-20 relative ">
            {/* this is line */}
            <div className="w-[20vw] lg:w-[9vw] h-[1px] bg-[#ffffff4d] origin-bottom rotate-90 absolute top-[13vw] lg:top-[7.4vw] " />
            <div className="w-[20vw] lg:w-[9vw] h-[1px] bg-[#ffffff4d] origin-bottom rotate-90 absolute bottom-[13vw] lg:top-[17.44vw] " />
            <div className="w-[34vw] lg:w-[12.5vw] h-[1px] bg-[#ffffff4d] rotate-0 absolute top-1/2 left-[4.2vw] " />
            <div className="w-[34vw] lg:w-[12.5vw] h-[1px] bg-[#ffffff4d] origin-bottom rotate-0 absolute right-[4.2vw] top-1/2 " />

            {/* This is boxes */}
            <div className="flex items-center justify-between gap-1 w-full h-1/2 ">
              {/* This is Box -1 */}
              <div className="w-1/2 h-full flex flex-col items-center justify-center xl:gap-5 ">
                <div className="">
                  <span className="inline-block w-[2px] h-[10px] xl:h-[15px] mr-5 bg-[#FFA700] "></span>
                  <h1 className="inline-block uppercase tracking-[4px] text-[.7rem] lg:text-[.9rem] 2xl:text-[1.1rem] font-medium ">
                    Request
                  </h1>
                </div>
                <h1 className="text-[1.6rem] lg:text-[2rem] 2xl:text-[3rem]  font-semibold ">
                  1035
                </h1>
              </div>
              {/* This is Box -2 */}
              <div className="w-1/2 h-full flex flex-col items-center justify-center xl:gap-5 ">
                <div className="">
                  <span className="inline-block w-[2px] h-[10px] 2xl:h-[15px] mr-5 bg-[#FFA700] "></span>
                  <h1 className="inline-block uppercase tracking-[4px] text-[.7rem] lg:text-[.9rem] 2xl:text-[1.1rem] font-medium">
                    Quation
                  </h1>
                </div>
                <h1 className="text-[1.6rem] lg:text-[2rem] 2xl:text-[3rem]  font-semibold ">
                  875
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-center gap-1 w-full h-1/2 ">
              {/* This is Box -3 */}
              <div className="w-1/2 h-full flex flex-col items-center justify-center xl:gap-5 ">
                <div className="">
                  <span className="inline-block w-[2px] h-[10px] xl:h-[15px] mr-5 bg-[#FFA700] "></span>
                  <h1 className="inline-block uppercase tracking-[4px] text-[.7rem] lg:text-[.9rem] 2xl:text-[1.1rem] font-medium ">
                    Order
                  </h1>
                </div>
                <h1 className="text-[1.6rem] lg:text-[2rem] 2xl:text-[3rem]  font-semibold">
                  1236
                </h1>
              </div>
              {/* This is Box -4 */}
              <div className="w-1/2 h-full flex flex-col items-center justify-center xl:gap-5 ">
                <div className="">
                  <span className="inline-block w-[2px] h-[10px] xl:h-[15px] mr-5 bg-[#FFA700] "></span>
                  <h1 className="inline-block uppercase tracking-[4px] text-[.7rem] lg:text-[.9rem] 2xl:text-[1.1rem] font-medium">
                    Dispatch
                  </h1>
                </div>
                <h1 className="text-[1.6rem] lg:text-[2rem] 2xl:text-[3rem]  font-semibold">
                  879
                </h1>
              </div>
            </div>
            {/*  */}
          </div>
        </section>
        {/* section Right */}
        <section className="w-full h-[90vh] lg:w-1/2 lg:h-full pt-[5vw] ">
          <div className="bg-[#ffffff] w-full h-full lg:p-[3vw] 2xl:pl-[5vw] 2xl:pt-[3vw] ">
            <h1 className="text-[1.5rem] lg:text-[2.2rem] 2xl:text-[3.3rem] text-nowrap font-[300] ">
              Post Buy <span className="font-semibold">Requirement</span>
            </h1>
            <h3 className="text-[.7rem] lg:text-[.9rem] 2xl:text-[1.4rem] text-nowrap mt-4 ">
              Get the Best Deals and <br /> Exclusive Offers with{" "}
              <span className="text-[#FF9812] capitalize ">
                Golobal Bazaar Nursery
              </span>
            </h3>
            <form>
              <div className="p-1 xl:p-4 rounded-xl bg-[#FDFDFD] drop-shadow-2xl mt-5 mb-8 flex items-center  ">
                <select name="" id="" className="text-[1.25rem] ">
                  <option value="">91 +</option>
                </select>
                <span className="inline-block w-[2px] h-[40px] bg-[#8a8a8a63] mx-5 "></span>
                <input
                  type="tex"
                  id="phone"
                  name="phone"
                  placeholder="9564 258 365"
                  className="outline-none placeholder:text-[1.25rem] text-[1.25rem] w-full "
                />
              </div>
              <label
                htmlFor="looking"
                className="text-[1.20rem] text-[#4e4e4e] "
              >
                Tell us about your requirement
              </label>
              <div className="p-3 xl:p-4 rounded-xl bg-[#FDFDFD] drop-shadow-2xl mt-2 lg:mt-5 mb-10 flex items-center">
                <label htmlFor="looking">
                  <img
                    src="/Slicing/Header/search-icon.png"
                    alt=""
                    className="mr-4"
                  />
                </label>
                <input
                  id="looking"
                  type="text"
                  placeholder="Enter the product you are looking for..."
                  className="outline-none placeholder:text-[1rem] xl:placeholder:text-[1.25rem] text-[1.25rem] w-full "
                />
              </div>
              <label htmlFor="" className="text-[1.20rem]">
                Personalise your inquiry
              </label>
              {/*  */}
              <div className="p-6 rounded-xl bg-[#FDFDFD] drop-shadow-2xl mt-5 flex-col justify-center items-center ">
                <div className="inline-block h-9 w-30">
                  {removieMic ? (
                    <button onClick={StartRecoding} className="">
                      <img
                        src="/Slicing/PostBuyRequirement/microfone.png"
                        alt=""
                        className="inline-block"
                      />
                      <h2 className="inline-block">Record</h2>
                    </button>
                  ) : (
                    ""
                  )}
                </div>
                {/* recoder */}
                <div className="h-[4rem] flex justify-between items-center ">
                  <div className="">
                    {recording.length > 0 ? (
                      <>
                        {recording && <audio controls src={recording}></audio>}
                      </>
                    ) : (
                      ""
                    )}

                    {/* - mike blink - */}
                    {save ? (
                      <div className="relative flex items-center justify-center ml-10 ">
                        <div
                          ref={mickBlinkOneRef}
                          className="inline-block absolute w-[6rem] h-[6rem] rounded-full bg-[#CCCACA] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[554] "
                        />
                        <div
                          ref={mickBlinkTwoRef}
                          className="inline-block absolute w-[7rem] h-[7rem] rounded-full bg-[#EFEFEF] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[553] "
                        />
                        <div className="flex items-center justify-center p-[1rem] w-[3rem] h-[3rem] rounded-full bg-[#1F78A0]  z-[554]  ">
                          <img
                            src="/Slicing/mick.png"
                            alt=""
                            className="relative z-[555] "
                          />
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  {/* --- */}
                  <div className="bg-[green] ">
                    {save ? (
                      <div>
                        <button
                          onClick={StopRecoding}
                          className="px-4 py-2 bg-blue-600 text-white rounded"
                        >
                          Save Recording
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                    {/* -- */}
                    {delet ? (
                      <button
                        onClick={Delete}
                        className="px-4 py-2 bg-red-600 text-white rounded"
                      >
                        Delete
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              {/* submit-button */}
              <div className="flex justify-end mt-15 ">
                <button className="uppercase flex items-center justify-center bg-[#F79311] px-[9vw] py-[4vw] lg:px-[4.5vw] lg:py-[1.8vw] xl:px-[4vw] xl:py-[1.3vw] rounded-full text-white tracking-[2px] text-[3vw] lg:text-[.8rem] 2xl:text-sm ">
                  submit
                  <img
                    src="/Slicing/Banner/button-arrow.png"
                    alt=""
                    className="ml-2 "
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

import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen text-center ">
      <h1 className="text-6xl font-semibold mb-2">404</h1>
      <h1 className="text-6xl font-semibold ">NotFound</h1>
      <h2 className="text-5xl font-medium mt-4">This Page is Not Available</h2>
      <button
        onClick={() => navigate(-1)}
        className="px-[5rem] py-[1rem] mt-10 bg-[red] rounded-[50px] font-medium text-[2rem] hover:bg-[#ff5100] "
      >
        Goback
      </button>
    </div>
  );
};

export default NotFound;

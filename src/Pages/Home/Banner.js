import React from "react";

const Banner = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">
        Analytics that transform your <br /> product inside-out
      </h1>
      <div className="mt-4 text-center">
        <button className="btn bg-[#0052CC] font-semibold text-white">
          Request for Demo
        </button>
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-4 my-5">
          Download
        </button>
      </div>
    </div>
  );
};

export default Banner;

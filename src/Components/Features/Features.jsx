import React from "react";
import colb1 from "./colb1.png";
import colb2 from "./colb2.png";
import colb3 from "./colb3.png";
function Features() {
  return (
    <>
      <div className="w-[100%] md:w-[100%] lg:w-[98%]  xl:w-[90%] h-[auto] box-border   m-auto mt-10 mb-8">
        <p className="text-[40px] px-[50px] font-bold text-center ">
          Our Features You can Get{" "}
        </p>
        {/* container of cards */}
        <div className="h-[auto]  w-full flex flex-wrap items-center justify-center  mt-12">
          <div className="m-[20px]">
            {/* card img */}
            <img
              className="h-[360px] w-[340px] md:h-[430px] md:w-[364px]"
              src={colb1}
              alt="colb1"
            />
            {/* card content */}
            <p className="text-[20px] font-semibold ml-[20px] md:ml-[20px] w-[280px]  lg:text-[30px] lg:font-bold lg:w-[364px] my-6 text-[#333333]">
              Collabrations Teams
            </p>
            <p className="text-[#A6A6A6] ml-[20px] md:ml-[20px] w-[364px]">
              Here you can handle projects together with team virtually.
            </p>
          </div>

          <div className="m-[20px] ">
            {/* card img */}
            <img
              className="h-[360px] w-[340px] md:h-[430px] md:w-[364px]"
              src={colb2}
              alt="colb2"
            />
            {/* card content */}
            <p className="text-[20px] font-semibold w-[280px] ml-[20px] md:ml-[20px] lg:text-[30px] lg:font-bold lg:w-[364px] my-6 text-[#333333]">
              Cloud Storage
            </p>
            <p className="text-[#A6A6A6] w-[364px] ml-[20px] md:ml-[20px]">
              No nedd to worry about storage because we provide storage up to 2
              TB.
            </p>
          </div>

          <div className="m-[20px]">
            {/* card img */}
            <img
              className="h-[360px] w-[340px] md:h-[430px] md:w-[364px]"
              src={colb3}
              alt="colb3"
            />
            {/* card content */}
            <p className="  text-[20px] font-semibold w-[280px] ml-[20px] md:ml-[20px] lg:text-[30px] lg:font-bold lg:w-[364px] my-6 text-[#333333]">
              Daily Analysis
            </p>
            <p className="text-[#A6A6A6] w-[364px] ml-[20px] md:ml-[20px] ">
              We always provide useful informatin to make it easier for you
              every day.
            </p>
          </div>
        </div>
        <div className="w-full  flex items-center justify-center mt-20">
          <button className="text-[16px] font-semibold h-[35px] md:h-[55px]   bg-[#3585FF] text-white rounded-md px-8 ">
            Get Start Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Features;

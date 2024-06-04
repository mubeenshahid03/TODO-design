import React from "react";
import subtract from "./Subtract.png";
import picgr from "./picgr.png";
function Benefits() {
  return (
    <>
      <div className="w-[100%] md:w-[100%] lg:w-[98%] xl:w-[80%] h-[auto] box-border  m-auto flex flex-col  sm:flex sm:flex-col md:flex md:flex-row items-center justify-between mt-7 mb-8 ">
        {/* left div */}
        <div className=" h-[auto] lg:h-[448px]  pl-[40px] xl:pl-0 w-[90%] md:w-[451px] flex flex-col justify-center mt-[30px] mb-[30px]  ">
          {/* list item */}
          <div className="flex flex-col">
            <span className="text-[40px] font-bold ">What Benefits </span>
            <span className="text-[40px] font-bold ">Will You Get </span>
          </div>
          <div className="h-[260px]  flex flex-col justify-between mt-[20px]">
            <div className="h-[30px]  flex items-center ">
              <img className="h-30" src={subtract} alt="subtract-icon" />

              <p className="h-30 ml-6">
                Free Consulting With Experet Saving Money
              </p>
            </div>

            <div className="h-[30px]  flex items-center ">
              <img className="h-[30px]" src={subtract} alt="subtract-icon" />

              <p className=" ml-6">Online Banking</p>
            </div>

            <div className="h-[30px]  flex items-center ">
              <img className="h-[30px]" src={subtract} alt="subtract-icon" />

              <p className=" ml-6">Investment report every month</p>
            </div>

            <div className="h-[30px]  flex items-center ">
              <img className="h-[30px]" src={subtract} alt="subtract-icon" />

              <p className="ml-6">Save money for future</p>
            </div>

            <div className="h-[30px]  flex items-center ">
              <img className="h-[30px]" src={subtract} alt="subtract-icon" />

              <p className="ml-6">Online transaction</p>
            </div>
          </div>
        </div>
        {/* right img div */}
        <div className="h-[460px] box-border w-[100%] md:w-[643px]  flex flex-col justify-between lg:ml-[150px] xl:ml-[200px] gap-2">
          <img
            className="  h-[400px] w-[450px]  lg:h-[520px] lg:w-[520px] xl:h-[520px] xl:w-[560px]  rounded-lg m-auto"
            src={picgr}
            alt="img"
          />
        </div>
      </div>
    </>
  );
}

export default Benefits;

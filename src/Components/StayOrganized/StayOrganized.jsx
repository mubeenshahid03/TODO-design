import React from "react";
import img from "./g321.png";
function StayOrganized() {
  return (
    <>
      <div className="w-[100%] md:w-[100%] lg:w-[98%] xl:w-[80%] h-[auto] bg-gray-100 pt-[10px] pr-[10px] pb-[40px] pl-[10px]  md:p-[50px]  m-auto flex-col  sm:flex sm:flex-col md:flex md:flex-row items-center justify-between rounded-[48px]">
        {/* left img div */}
        <div className="h-[auto]   w-[100%] sm:w-[100%] md:w-[55%] lg:w-[60%] flex items-center justify-center">
          <img
            className="h-[290px]  sm:h-[340px] md:h-[427px] w-[570px] "
            src={img}
            alt="stayoragnizedimg"
          />
        </div>
        {/* right content div */}
        <div className="h-[auto] px-[50px] py-[40px] md:p-0  text-white box-border w-[100%] sm:w-[100%] md:w-[45%] lg:w-[40%]  flex flex-col justify-between  lg:ml-[130px] xl:ml-[140px] gap-2">
          <div className="flex flex-col ">
            <span className="text-[40px] font-bold text-blue-600">
              Stay Organized{" "}
            </span>
            <span className="text-[40px] font-bold text-blue-600">
              In Your Life{" "}
            </span>
          </div>
          <div className="h-[73px] lg:my-6 text-md  md:w-[270px] lg:w-[370px] xl:w-[420px]  text-wrap text-black ">
            Innovative solutions designed to streamline your workflow and boost
            productivity.Unlock the full potential of your business with
            cutting-edge technology.
          </div>
        </div>
      </div>
    </>
  );
}

export default StayOrganized;

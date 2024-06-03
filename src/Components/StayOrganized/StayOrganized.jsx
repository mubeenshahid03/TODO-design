import React from "react";
import img from "./g321.png";
function StayOrganized() {
  return (
    <>
      <div className="w-[1240px] h-[515px] bg-gray-50  p-[50px]  m-auto flex items-center justify-between rounded-[48px]">
        {/* left img div */}
        <div className="h-[auto]  w-[55%] flex items-center justify-center">
          <img
            className="h-[427px] w-[540px] "
            src={img}
            alt="stayoragnizedimg"
          />
        </div>
      {/* right content div */}
        <div className="h-[226px] text-white box-border w-[45%]  flex flex-col justify-between ml-[200px] gap-2">
          <div className="flex flex-col">
            <span className="text-[40px] font-bold text-blue-600">
              Stay Organized{" "}
            </span>
            <span className="text-[40px] font-bold text-blue-600">
              In Your Life{" "}
            </span>
          </div>
          <div className="h-[73px] my-6 text-md text-black w-[480px]">
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

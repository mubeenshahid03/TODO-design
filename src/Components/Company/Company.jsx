import React from "react";
import unsplash from "./g141.png";
import notion from "./g142.png";
import intercom from "./g143.png";
import descript from "./g144.png";
import grammerly from "./g145.png";
function Company() {
  return (
    <>
      <div className="w-[80%] h-[auto] m-auto my-[37px] flex items-center flex-wrap justify-between">
        <img
          className="h-[28px] w-[130px] m-[10px] lg:m-auto   "
          src={unsplash}
          alt="g141"
        />
        <img
          className="h-[28px] w-[115px] m-[10px] lg:m-auto  "
          src={notion}
          alt="g142"
        />
        <img
          className="h-[28px] w-[150px] m-[10px] lg:m-auto  "
          src={intercom}
          alt="g143"
        />
        <img
          className="h-[28px] w-[130px] m-[10px] lg:m-auto  "
          src={descript}
          alt="g144"
        />
        <img
          className="h-[28px] w-[150px] m-[10px] lg:m-auto  "
          src={grammerly}
          alt="g145"
        />
      </div>
    </>
  );
}

export default Company;

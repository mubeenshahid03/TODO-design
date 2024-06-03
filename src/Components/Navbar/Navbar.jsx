import React from "react";

function Navbar() {
  return (
    <>
      <div className="w-[1234px] h-[62px] my-[37px]  m-auto flex items-end justify-between ">
        {/* company logo and name */}
        <div className="w-fit h-[55px] flex items-center justify-center">
          <div className="h-[55px] w-[55px] rounded-full bg-[#3585FF] flex items-center justify-center">
            <span className="text-[29px] text-white font-semibold">T</span>
          </div>
          <div className="font-semibold text-[27px] ml-4">TO DO</div>
        </div>
        {/* Nav options */}
        <div className="h-[55px] w-[604px]  flex  items-center justify-between">
          <span className="text-[16px] font-semibold w-[51px] text-[#3585FF] ">
            HOME
          </span>
          <span className="text-[16px] font-semibold w-[51px]">About</span>
          <span className="text-[16px] font-semibold w-[51px]">Features</span>
          <span className="text-[16px] font-semibold w-[51px]">Contacts</span>
          <button className="text-[16px] font-semibold h-[62px] w-[130px] bg-[#3585FF] text-white rounded-md px-7 ">
            Downloads
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;

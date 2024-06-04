import React from "react";
import { MenuOutlined } from "@ant-design/icons";
function Navbar() {
  return (
    <>
      <div className="w-full my-[10px] md:w-[95%] lg:w-[95%] xl:w-[80%]  h-[62px] md:my-[37px]   m-auto flex items-end justify-between ">
        {/* company logo and name */}
        <div className="w-fit h-[55px] flex items-center justify-center ml-[10px] md:ml-0">
          <div className="h-[45px] w-[45px] md:h-[55px] md:w-[55px] rounded-full bg-[#3585FF] flex items-center justify-center">
            <span className="text-[29px] text-white font-semibold">T</span>
          </div>
          <div className="font-semibold text-[20px]  md:text-[27px] ml-4">
            TO DO
          </div>
        </div>
        {/* Nav options */}
        <div className=" h-[100%] w-[60px] text-[30px] flex items-center justify-center lg:hidden ">
          <MenuOutlined className="h-[40px] w-[40px] text-[#3585FF]" />
        </div>
        <div className="hidden lg:flex h-[55px] w-[604px]    items-center justify-between">
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

import React from "react";
import footericon from "../Footer/footericon.png";
import pf1 from "../Footer/profile1.png";
import pf2 from "../Footer/profile2.png";
import pf3 from "../Footer/profile3.png";
import pf4 from "../Footer/profile4.png";
import pf5 from "../Footer/profile5.png";
import formicon from "../Footer/formicon.png";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
function Footer() {
  return (
    <div className="mt-[36px] lg:mt-[50px] h-[auto] p-[30px] lg:p-[100px] w-[100%] m-auto bg-[#161C28] text-white ">
      {/* 1 div of footer */}
      <div className="h-[auto]  m-auto  flex justify-between  flex-col  md:flex md:flex-row">
        {/* left div */}
        <div className="h-full  md:w-[48%] xl:w-[60%]  space-y-5 flex flex-col md:flex ">
          <p className="text-[40px] font-bold w-[300px] md:w-[350px] px-[10px] md:px-0 ">
            People are Saying About Us
          </p>
          <p className="text-[#a6a6a6]">
            Everything you need to accept to payment and grow your money of
            manage anywhere on planet
          </p>
          <img
            src={footericon}
            className="h-[38px]  w-[45px]"
            alt="footer-icon"
          />
          <p className="text-[#a6a6a6]">
            I am very helped by this E-wallet application , my days are very
            easy to use this application and its very helpful in my life , even
            I can pay a short time 😍
          </p>
          <p className="text-[#a6a6a6] text-[20x] font-semibold">
            _ Aria Zinanrio
          </p>

          {/* profiles */}
          <div className="h-auto w-[80%]  flex  items-center justify-center justify-between">
            <img src={pf1} alt="pf1" className="h-[66px] w-[66px]" />
            <img src={pf2} alt="pf2" className="h-[66px] w-[66px]" />
            <img src={pf3} alt="pf3" className="h-[66px] w-[66px]" />
            <img src={pf4} alt="pf4" className="h-[66px] w-[66px]" />
            <img src={pf5} alt="pf5" className="h-[66px] w-[66px]" />
          </div>
        </div>
        {/* right div */}
        <div className="h-full md:w-[50%] xl:w-[40%] bg-[#222938] px-[30px] py-[20px] lg:px-[60px] lg:py-[40px] mt-8 md:mt-0">
          {/* form */}
          <img
            src={formicon}
            alt="formicon"
            className="h-[132px] w-[168px] m-auto"
          />

          <form className="space-y-2 lg:space-y-4">
            <div class="form-item w-full ">
              <label
                for="first-name"
                class="block text-sm   text-white pt-3 pb-1 md:text-[13px]"
              >
                Email
              </label>
              <input
                id="first-name"
                type="text"
                placeholder="Enter your email"
                class="w-[100%] text-black font-md h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3585FF]"
              />
            </div>
            <div class="form-item ">
              <label
                for="first-name"
                class="block text-sm   text-white pt-3 pb-1 md:text-[13px]"
              >
                Message
              </label>
              <input
                id="first-name"
                type="text"
                placeholder="Enter your Message"
                class="w-[100%] font-md  h-16 text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3585FF]"
              />
            </div>
            <button className="text-[16px] w-[100%] font-semibold h-[55px]   bg-[#3585FF] text-white rounded-md px-8 ">
              Signup for free
            </button>
          </form>
        </div>
      </div>

      {/* second div of footer */}
      <div className=" h-[auto] space-y-6 lg:space-y-0 lg:h-[180px] mt-[30px] lg:mt-[90px]  m-auto  flex flex-col md:flex-row justify-between ">
        {/* left */}
        <div className="h-full md:w-[40%] space-y-6 lg:space-y-0  flex flex-col justify-between">
          <p className="text-[40px] font-semibold text-[#3585FF]">TO-DO</p>
          <p className="text-[#a6a6a6]">Get started noew try our product</p>
          <Input
            className="rounded-[30px]"
            placeholder="Enter email here"
            suffix={
              <Button
                className="rounded-full"
                type="primary"
                icon={<SearchOutlined />}
              ></Button>
            }
          />
        </div>
        {/* right */}
        <div className="h-full   md:w-[40%]  flex">
          {/* col1 */}
          <div className="h-full w-[33%] flex flex-col justify-between">
            <p className="text-white font-semibold">Support</p>
            <p className="text-[#a6a6a6]">Help Center</p>
            <p className="text-[#a6a6a6]">Account Information</p>
            <p className="text-[#a6a6a6]">About</p>
          </div>
          {/* col2 */}
          <div className="h-full w-[33%] flex flex-col justify-between">
            <p className="text-white font-semibold">Help and Solution</p>
            <p className="text-[#a6a6a6]">Talk to Support</p>
            <p className="text-[#a6a6a6]">System Status</p>
            <p className="text-[#a6a6a6]">Covid Respond</p>
          </div>
          {/* col3 */}
          <div className="h-full w-[33%] flex flex-col justify-between">
            <p className="text-white font-semibold">Product</p>
            <p className="text-[#a6a6a6]">Update</p>
            <p className="text-[#a6a6a6]">Security</p>
            <p className="text-[#a6a6a6]">Beta-test</p>
          </div>
        </div>
      </div>

      {/* third div of footer */}
      <div className="h-[30px] mt-[80px] m-auto   flex flex-col md:flex-row justify-between items-center">
        <p className="text-white font-semibold">
          © 2024 Inc. Copyright and rights reserved
        </p>

        <p className="text-white font-semibold">
          Terms and Conditions . Privacy Policy
        </p>
      </div>
    </div>
  );
}

export default Footer;

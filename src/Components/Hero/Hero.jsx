import React from "react";

function Hero() {
  return (
    <>
      <div className="w-[100%] h-[auto] py-8 md:py-0   md:w-[100%] md:pb-[20px] lg:w-[98%] xl:w-[80%] lg:h-[639px] bg-[#3585FF] rounded-[48px] m-auto flex items-center justify-center">
        <div className="h-[520px] w-[1162px] my-[60px] mx-[12px] flex flex-col md:flex-row  items-center justify-center">
          {/* left subdiv */}
          <div className="h-[auto]  w-[100%] flex items-center justify-center">
            <img
              className="h-[300px] w-[360px] md:h-[400px] md:w-[520px] lg:h-[520px] lg:w-[604px] "
              src="https://s3-alpha-sig.figma.com/img/8fbb/cd32/7ce9416196c7d8de493b8c83bc8cf244?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mnvZ2EKvaNXdR4~DucP~SBZq9vWYNO2qjB8k2bL98j84VIoFzRbZccteT8eZH-516uK60SpmzKFa~Ghf4feyzBreKyQQkv07VHzKvJ5JKPE7B5YRnacD88K7SMDGPs4EBxcvMH4kEBgK9u2bSKpBJtIF-IV7LtThLSlLvd9wseCZ6Tv5A1zALFLGOFJWiju-VLvrt53Y5F0uC1eFP51aAhA~0y8L2~21CclrtLXfy6c9UnWXCTFb~QZY8OE1IdkjnsMPvciapGxZejm4tFhgZ4ShyjGx5MNa-HWp7OZL9t5Ju6W8eDI8IEeW1NNAkOD1PRFPyvEHWEcdz5m2UtYDjg__"
              alt="mobileimg"
            />
          </div>

          {/* right sub div */}
          <div className="h-[auto] text-white box-border w-[80%]  flex flex-col justify-between gap-2">
            <div className="flex flex-col">
              <span className="text-[28px] sm:text-[36px] font-semibold md:text-[48px]  lg:text-[56px] md:font-semibold">
                Organize Your Life
              </span>
              <span className="text-[28px] sm:text-[36px] font-semibold md:text-[48px] lg:text-[56px] md:font-semibold">
                Better With Our
              </span>
              <span className="text-[28px] sm:text-[36px] font-semibold md:text-[48px] lg:text-[56px] md:font-semibold">
                TO DO App
              </span>
            </div>
            <div className="h-[73px] my-4  lg:my-6 text-md  md:w-[330px] lg:w-[430px] xl:w-[550px] text-wrap">
              Innovative solutions designed to streamline your workflow and
              boost productivity.Unlock the full potential of your business with
              cutting-edge technology.
            </div>
            <div className="mt-[20px] md:mt-0">
              <button
                type="button"
                class="text-[16px] mt-[15px] lg:mt-[0px] font-semibold h-[35px] md:h-[55px] text-[#3585FF] bg-white  rounded-lg text-sm px-7 py-2.5 text-center inline-flex items-center me-2 mb-2 "
              >
                <span className="">Button Text</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 ml-2 -mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <button className="text-[16px] font-semibold h-[35px] md:h-[55px] ml-[0px] lg:ml-[4px]  bg-blue-800 text-white rounded-md px-8 ">
                Open Web App
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

import React from "react";
import Card from "./Card";
import CenterCard from "./CenterCard";
import EndCard from "./EndCard";

function Plan() {
  return (
    <>
      <div className="h-[900px] w-[1240px]  m-auto mt-10 relative">
        <div className="h-[600px] w-full bg-[#3585FF] absolute top-0 rounded-[48px]">
          <div className="h-auto w-[600px] m-auto flex items-center justify-center flex-col mt-[60px]">
            <p className="text-[40px] text-white font-bold text-center ">
              Our Features You can Get{" "}
            </p>
            <p className="text-center text-white mt-6">
              Innovative solutions designed to streamline your workflow and
              boost productivity.Unlock the full potential of your business with
              cutting-edge.
            </p>
          </div>
          {/* cards container */}

          <div className="h-[auto] relative w-[1020px] mx-[60px] box-border  mt-[120px] flex ">
            <Card />
            <div className="mt-[-50px">
              <CenterCard />
            </div>
            <EndCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Plan;

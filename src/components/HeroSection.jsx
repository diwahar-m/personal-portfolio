import React from "react";
import ProfileImage from "../assets/hero/profileImage.svg";
import TitleSection from "./TitleSection";

export default function HeroSection() {
  return (
    <div>
      <div className="mt-[4.4rem]  flex flex-col sm:flex-row items-center mx-auto sm:mx-[8rem]  ">
        {/* Hero title */}
        <div className="flex flex-col justify-between items-start py-[4.6rem] gap-[1.5rem]">
          <h3 className="text-left font-semibold text-base text-[#fff] text-[2rem]">
            Diwahar is a
            <span className="text-[#C778DD] "> full-stack developer</span>
          </h3>
          <p className="text-sm text-[#ABB2BF] text-left">
            He crafts responsive websites where technologies <br /> meet
            creativity
          </p>
          <button className="border-[#C778DD] hover:border-[#fff] border-[0.1rem] py-[0.5rem] px-[1rem] text-[#fff] hover:text-[#C778DD]">
            Contact me!!
          </button>
        </div>
        {/* Hero Profile */}
        <div className=" relative ">
          <img src={ProfileImage} className="w-[28.6rem] h-[24.2rem]" />
          <div className="border-[#fff] w-[90%] mx-auto px-[0.5rem] py-[0.66rem] border-[1px] flex items-center gap-[10px] absolute -bottom-5 right-6">
            <div className="bg-[#C778DD] w-[1rem] h-[1rem]"></div>
            <h6 className="text-base font-semibold text-[#ABB2BF]">
              Currently working on{" "}
              <span className="text-[#fff]">Portfolio</span>
            </h6>
          </div>
        </div>
      </div>
      <TitleSection />
    </div>
  );
}

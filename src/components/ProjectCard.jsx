import React from "react";
import ProfileImage from "../assets/hero/profileImage.svg";

export default function ProjectCard() {
  return (
    <div className="w-[330px] h-[428px] border-1 border-[#ABB2BF] flex flex-col items-stretch">
      <img src={ProfileImage} className="w-full h-[200px]" />
      <div className="border-1 border-l-0 border-r-0 border-[#ABB2BF]">
        <h5 className="text-[#ABB2BF]">
          React Express Discord Node HTML Python Flask
        </h5>
      </div>
      <div className="p-2 flex flex-col gap-1">
        <h2 className="text-[#fff]">ProtectX</h2>
        <p className="text-[#ABB2BF]">Discod anti-crash bot</p>
        <button className="border-[#C778DD] hover:border-[#fff] w-[50%] border-[0.1rem] py-[0.5rem] px-[1rem] text-[#fff] hover:text-[#C778DD]">
          Live
        </button>
      </div>
    </div>
  );
}

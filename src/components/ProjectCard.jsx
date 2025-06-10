import React from "react";
import ProfileImage from "../assets/hero/profileImage.svg";
import Button from "./Button";

export default function ProjectCard() {
  return (
    <div className="w-[330px] h-[428px] border-1 border-[#ABB2BF] flex flex-col items-stretch">
      <img src={ProfileImage} className="w-full h-[200px]" />
      <div className="border-1 border-l-0 border-r-0 border-[#ABB2BF] p-2">
        <h5 className="text-[#ABB2BF] text-left">
          React Express Discord Node HTML Python Flask
        </h5>
      </div>
      <div className="p-2 flex flex-col items-start gap-1">
        <h2 className="text-[#fff] text-2xl">ProtectX</h2>
        <p className="text-[#ABB2BF] text-base">Discod anti-crash bot</p>

        <Button />
      </div>
    </div>
  );
}

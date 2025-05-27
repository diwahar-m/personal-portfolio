import React from "react";

export default function SkillCard() {
  return (
    <div className="min-w-[100px] min-h-[180px] border-1 border-[#ABB2BF] flex flex-col items-stretch">
      <h5 className="text-[#fff] p-2 text-left">Languages</h5>
      <div className="border-[#ABB2BF] border-t-1 flex justify-between p-4 flex-wrap">
        <p className="text-[#ABB2BF]">Typescript</p>
        <p className="text-[#ABB2BF]">Typescript</p>
        <p className="text-[#9fc0fd]">Typescript</p>
      </div>
    </div>
  );
}

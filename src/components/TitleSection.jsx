import React from "react";
import Comma from "../assets/title/titleComma.svg";
import Rectangle from "../assets/title/rectangle.svg";

export default function TitleSection() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col justify-center items-end py-[6rem] text-[#fff] ">
        <div className="border-[#ABB2BF] border-[1px] p-[2rem] relative ">
          <h2 className="text-2xlfont-medium">
            With great power comes great electricity bill
          </h2>
          <img src={Comma} className="absolute -top-3 left-[.7rem]" />
          <img src={Comma} className="absolute -bottom-3 right-[.7rem]" />
        </div>
        <div className="border-[#ABB2BF] border-[1px] border-t-0 p-[1rem] ">
          <h3 classsName="text-2xl ">- Dr. Who</h3>
        </div>
      </div>
      <img src={Rectangle} className="absolute -right-0.5 top-163" />
    </div>
  );
}

import React from "react";
import aboutMeCard from "../assets/skills/aboutMeCard.svg";
import { Divider } from "@mui/material";
import { ArrowRight } from "lucide-react";
import dotRectangle from "../assets/skills/dotRectangle.svg";

export default function AboutMe() {
  return (
    <div className="sm:mx-[8rem] mt-[15px]    ">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <h3 className="font-semibold text-[#fff] text-[2rem]">
            <span className="text-[#C778DD]">#</span>skills
          </h3>
          <Divider sx={{ backgroundColor: "#C778DD", width: "35rem" }} />
        </div>
        <div className="flex items-center gap-1">
          <p className="text-white">View all </p>
          <ArrowRight size={"20"} color="#fff" />
        </div>
      </div>
      <div className="flex justify-between mt-[48px] ">
        <div className="flex flex-col gap-2 items-start w-[50%] h-[380px] ">
          <p className="text-[#ABB2BF]">Hello, i'm Diwahar!</p>
          <p className="text-[#ABB2BF] text-left">
            I'm a self taught front-end developer based in Chennai, India. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
          </p>
          <p className="text-[#ABB2BF] text-left">
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
        </div>
        <img
          src={aboutMeCard}
          className="w-[340px] h-[500px]"
          alt="skill-card"
        />
      </div>
      <img src={dotRectangle} className="absolute right-0 top-570" />
    </div>
  );
}

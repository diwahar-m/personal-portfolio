import React from "react";
import aboutMeCard from "../assets/skills/aboutMeCard.svg";
import { Divider } from "@mui/material";
import { ArrowRight } from "lucide-react";
import dotRectangle from "../assets/skills/dotRectangle.svg";
import Button from "./Button";
import Title from "./Title";

export default function AboutMe() {
  return (
    <div className="sm:mx-[8rem] mt-[100px]    ">
      <Title />
      <div className="flex justify-between mt-[48px] ">
        <div className="w-[50%] flex items-center justify-center">
          <div className="flex flex-col gap-2 items-start w-[100%] h-[100%] ">
            <p className="text-[#ABB2BF]">Hello, i'm Diwahar!</p>
            <p className="text-[#ABB2BF] text-left">
              I'm a self taught front-end developer based in Chennai, India. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
            </p>
            <p className="text-[#ABB2BF] text-left">
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
            <Button style={"mt-[27px]"} label={"Read more"} />
          </div>
        </div>
        <img
          src={aboutMeCard}
          className="w-[480px] h-[380px]"
          alt="skill-card"
        />
      </div>
      <img src={dotRectangle} className="absolute right-0 top-570" />
    </div>
  );
}

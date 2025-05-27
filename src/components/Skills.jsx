import { Divider } from "@mui/material";
import { ArrowRight } from "lucide-react";
import React from "react";
import ProjectCard from "./ProjectCard";
import skillCard from "../assets/skills/skillsCard.svg";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <div className="sm:mx-[8rem] mt-[15px]   ">
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
        <img src={skillCard} alt="skill-card" />
        <div className="grid grid-cols-3 gap-2">
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <div></div>
          <SkillCard />
          <SkillCard />
        </div>
      </div>
    </div>
  );
}

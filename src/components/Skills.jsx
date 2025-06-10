import { Divider } from "@mui/material";
import { ArrowRight } from "lucide-react";
import React from "react";
import ProjectCard from "./ProjectCard";
import skillCard from "../assets/skills/skillsCard.svg";
import SkillCard from "./SkillCard";
import Title from "./Title";

export default function Skills() {
  return (
    <div className="sm:mx-[8rem] mt-[100px]   ">
      <Title />
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

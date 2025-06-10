import { Divider } from "@mui/material";
import { ArrowRight } from "lucide-react";
import React from "react";
import ProjectCard from "./ProjectCard";
import Title from "./Title";

export default function Projects() {
  return (
    <div className="sm:mx-[8rem]   ">
      <Title />
      <div className="flex justify-between gap-2 mt-[48px] ">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

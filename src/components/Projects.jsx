import { Divider } from "@mui/material";
import { ArrowRight } from "lucide-react";
import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="sm:mx-[8rem]   ">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <h3 className="font-semibold text-[#fff] text-[2rem]">
            <span className="text-[#C778DD]">#</span>projects
          </h3>
          <Divider sx={{ backgroundColor: "#C778DD", width: "35rem" }} />
        </div>
        <div className="flex items-center gap-1">
          <p className="text-white">View all </p>
          <ArrowRight size={"20"} color="#fff" />
        </div>
      </div>
      <div className="flex justify-between gap-2">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

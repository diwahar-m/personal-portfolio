import { Divider } from "@mui/material";
import React from "react";

export default function Projects() {
  return (
    <div className="sm:mx-[8rem]  ">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <h3 className="font-semibold text-[#fff] text-[2rem]">
            <span className="text-[#C778DD]">#</span>projects
          </h3>
          <Divider sx={{ backgroundColor: "#C778DD", width: "35rem" }} />
        </div>
        <div>
          <p className="text-white">View all ➡️</p>
        </div>
      </div>
    </div>
  );
}

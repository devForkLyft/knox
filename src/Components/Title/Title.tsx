import { Avatar } from "@mui/material";
import React from "react";
import { TitleProps } from "../types";

const Title: React.FC<TitleProps> = ({ title,iconSrc }) => {
  return (
    <div className="flex items-center w-[260px] justify-center gap-2.5 border border-gray-600 rounded-3xl px-10 py-2.5">
      <Avatar
        alt="icon"
        src={iconSrc}
        sx={{ width: 8, height: 8,backgroundColor:"white" }}
      />
      <h1 className="text-base font-normal text-[#FAFAFA]">{title}</h1>
    </div>
  );
};

export default Title;

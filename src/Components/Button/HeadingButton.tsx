import React from "react";
import { ButtonProps } from "../types";

const HeadingButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="bg-gray-300 text-black rounded-[30px] px-5 flex items-center justify-center gap-1 text-base font-normal leading-5 uppercase bebas">
      <span className="text-2xl">•</span>
      {text}
    </button>
  );
};

export default HeadingButton;

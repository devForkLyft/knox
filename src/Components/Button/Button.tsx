import React from "react";
import { Button as MuiButton } from "@mui/material";
import { ButtonProps } from "../types";
import loginRightArrow from "@/Assets/Icon/login-right-arrow.png"
import Image from "next/image";

const Buttoncontained: React.FC<ButtonProps> = ({ text, variant = "contained" }) => {
  return (
    <MuiButton
      variant={variant}
      sx={{
        backgroundColor: "#b1e312",
        color: "#000",
        fontWeight: "bold",
        borderRadius: "30px",
        padding: "6px 50px",
        width: "auto",
      }}
    >
      <span className="flex items-baseline justify-center gap-1 text-base bebas font-normal leading-5">
        {text}
        <Image src={loginRightArrow} alt="Arrow Icon" />
      </span>
    </MuiButton>
  );
};

export default Buttoncontained;

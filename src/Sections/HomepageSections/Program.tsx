import React from "react";
import Title from "@/Components/Title/Title";
import Image from "next/image";
import Buttoncontained from "@/Components/Button/Button";
import gymPersonSvg from "@/Assets/Images/gym-persons.svg";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Button, IconButton } from "@mui/material";
import loginRightArrow from "@/Assets/Icon/login-right-arrow.png";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Program = () => {
  return (
    <div className="bg-[#1B1B1B] px-4 sm:px-6 lg:px-5 pt-24 sm:pt-32 lg:pt-48">
      <Title title="OUR PROGRAM" iconSrc="/Icon/dot-icon.svg" />

      <div className="flex flex-col items-center lg:text-left pt-6">
        <div className="max-w-2xl">
          <h1 className="text-2xl text-[#D9D9D9] sm:text-3xl lg:text-4xl font-normal leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>
          <div className="flex text-[#D9D9D9] sm:flex-row items-center gap-5 md:gap-4 mt-4">
            <div className="w-full sm:w-1/2 text-sm sm:text-base font-normal leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            </div>
            <div className="w-full sm:w-1/2 text-sm sm:text-base font-normal leading-5">
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad.
            </div>
          </div>
        </div>
      </div>

      {/* <Image
        src={gymPersonSvg}
        alt="gymPerson Image"
        width={0}
        height={0}
        className="w-full md:h-auto h-screen object-cover mt-5"
      /> */}

      <div className="relative">
        <Image
          src={gymPersonSvg}
          alt="gymPerson Image"
          width={0}
          height={0}
          className="w-full md:h-auto h-screen object-cover mt-5"
        />

        {/* Content overlay */}
        <div className="absolute top-0 left-0 w-full flex flex-col justify-between pt-5">
          {/* Marquee (visible on small screens) */}
          <div className="block md:hidden px-3.5">
            <div
              className="flex items-center text-black text-base font-normal bg-[#D9D9D9] opacity-[0.6] rounded-2xl p-1.5"
              dangerouslySetInnerHTML={{
                __html: `<marquee behavior="scroll" direction="left">* TRIAL OFFERS * NEW YEAR NEW YOU * TRIAL OFFERS * NEW YEAR NEW YOU * TRIAL OFFERS * NEW YEAR NEW YOU *</marquee>`,
              }}
            />
          </div>

          <div className="flex items-center gap-2 pl-3.5 mt-4 md:hidden">
            <FiberManualRecordIcon sx={{ width: "10px" }} />
            <h1 className="text-3xl text-[#FAFAFA]">The Lab</h1>
          </div>
          <div className="absolute flex items-center justify-between w-full top-4/1 md:hidden">
            <IconButton
              sx={{ backgroundColor: "#D9D9D9" }}
              className="right-3 w-7 h-7 opacity-[0.6]"
            >
              <ArrowLeftIcon className="text-black" />
            </IconButton>
            <IconButton
              sx={{ backgroundColor: "#D9D9D9" }}
              className="left-3 w-7 h-7 opacity-[0.6]"
            >
              <ArrowRightIcon className="text-black" />
            </IconButton>
          </div>
          <div className="absolute flex flex-col justify-center items-center w-full top-7/1 left-2 md:hidden">
            <h1 className="w-[340px] text-3xl text-[#FAFAFA] leading-8 px-1">
              Try three group classes at just{" "}
              <span className="text-3xl text-[#C4E36F] leading-8">
                {" "}
                INR 999/-{" "}
              </span>
            </h1>
            <div className="mt-6 mr-4">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#b1e312",
                  color: "#000",
                  fontWeight: "bold",
                  borderRadius: "30px",
                  padding: "6px 105px 6px 105px",
                }}
                className="w-full"
              >
                <span className="flex items-baseline justify-center text-base font-normal gap-1">
                  TAKE A TRIAL
                  <Image src={loginRightArrow} alt="Arrow Icon" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:flex justify-center pt-5">
        <Buttoncontained text="TAKE A TRIAL"></Buttoncontained>
      </div>
    </div>
  );
};

export default Program;

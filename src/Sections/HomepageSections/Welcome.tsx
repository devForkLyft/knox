"use client";
import { Avatar, Button } from "@mui/material";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import Title from "../../Components/Title/Title";
import loginRightArrow from "@/Assets/Icon/login-right-arrow.png";
import groupClasses from "@/Assets/Images/group-classes.svg";
import personalTraining from "@/Assets/Images/personal-training.svg";
import gymPlace from "@/Assets/Images/gym-place.svg";
import Buttoncontained from "@/Components/Button/Button";

const Welcome = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  const services = [
    {
      img: groupClasses,
      title: "Group Classes",
    },
    {
      img: personalTraining,
      title: "Personal Training",
    },
    {
      img: gymPlace,
      title: "RESET: Retreats",
    },
  ];

  const visibleServices = isLargeScreen ? services : [services[0]];

  return (
    <div className="bg-[#1B1B1B] px-5 pt-72">
      <Title title="WELCOME TO KNOX" iconSrc="/Icon/dot-icon.svg" />

      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-baseline pt-6 gap-6">
        <div className="max-w-[987px] text-[#FAFAFA]">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-normal font-sans leading-snug">
            At Knox, we transcend traditional fitness. Our science-driven
            methodologies and anatomy-focused programs ensure sustainable
            results, promoting longevity and holistic well-being.
          </h1>
        </div>

        <div className="text-center lg:text-left hidden md:hidden lg:block">
          <h2 className="w-[230px] text-[#FAFAFA] text-lg md:text-2xl leading-6 md:leading-8 font-sans font-normal">
            Start your journey towards a better you
            <strong>
              <i> at just INR 1499/-</i>
            </strong>
          </h2>

          <div className="mt-7">
            <Buttoncontained text="TAKE A TRIAL"></Buttoncontained>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-10 pt-20">
        {visibleServices.map((service, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden"
          >
            <Image
              src={service.img}
              alt={service.title}
              width={0}
              height={0}
              className="w-auto h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* <div className="absolute bottom-11 left-6 -translate-y-120 text-white text-[26px] font-semibold">
              • {service.title}
            </div> */}
            <div
              className="absolute bottom-11 left-6 text-white text-[18px] sm:text-[22px] md:text-[26px] font-semibold 
           -translate-y-[330px] md:-translate-y-[250px] lg:translate-y-0 transition-transform duration-500 ease-in-out"
            >
              • {service.title}
            </div>

            <div className="absolute bottom-4 left-1 block md:block lg:hidden">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  fontSize: "12px",
                  padding: "4px 40px 4px 40px",
                  borderRadius: "20px",
                  backgroundColor: "#636462",
                  color: "#FAFAFA",
                }}
                className="absolute bottom-4 left-6"
              >
                THE LAB PROGRAMS
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="block md:block lg:hidden">
        <h2 className="w-[350px] text-[#FAFAFA] text-lg md:text-2xl leading-6 md:leading-8 font-sans font-normal px-4 pt-12">
          Start your journey towards a better you
          <strong>
            <i> at just INR 1499/-</i>
          </strong>
        </h2>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#b1e312",
            color: "#000",
            fontWeight: "bold",
            borderRadius: "30px",
            padding: "6px 0px 6px 0px",
            marginTop: "28px",
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
  );
};

export default Welcome;

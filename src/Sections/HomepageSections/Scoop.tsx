// import React from "react";
// import scoopBgImage from "@/Assets/Images/scoop-bg.svg";
// import Title from "@/Components/Title/Title";
// import Buttoncontained from "@/Components/Button/Button";
// import { IconButton } from "@mui/material";
// import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
// import ArrowRightIcon from "@mui/icons-material/ArrowRight";
// import Image from "next/image";
// import activityImage from "@/Assets/Images/activity.svg";
// import swimImage from "@/Assets/Images/swim.svg";

// const Scoop = () => {
//   return (
//     <div className="bg-white px-5">
//       <div
//         className=' bg-[url("/Assets/Images/scoop-bg.svg")] bg-cover bg-center h-screen rounded-2xl'
//         style={{ backgroundImage: `url(${scoopBgImage.src})` }}
//       >
//         <div className="flex flex-col justify-between h-full">
//           <div className="flex justify-between items-baseline px-7 pt-[30px]">
//             <Title title="LATEST SCOOP" iconSrc="/Icon/dot-icon.svg" />
//             <div className="text-5xl text-[#FAFAFA] font-normal leading-14">
//               <h1 className="w-[920px]">
//                 RESET: Escape, Recharge, and Realign—where wellness meets
//                 transformation.
//               </h1>
//               <Buttoncontained text="LEARN MORE" />
//             </div>
//           </div>

//           <div className="px-7 flex items-center gap-56 pb-10">
//             <div>
//               <div className="gap-5 hidden lg:flex items-center">
//                 <IconButton
//                   aria-label="previous"
//                   sx={{ backgroundColor: "#D9D9D9", padding: "12px" }}
//                 >
//                   <ArrowLeftIcon />
//                 </IconButton>
//                 <span className="text-[#FAFAFA] text-base">01 / 03</span>
//                 <IconButton
//                   aria-label="next"
//                   sx={{ backgroundColor: "#D9D9D9", padding: "12px" }}
//                 >
//                   <ArrowRightIcon />
//                 </IconButton>
//               </div>
//               <p className="text-base font-semibold text-[#FAFAFA] leading-5 mt-2.5">
//                 Wellness beyond Studio:
//               </p>
//               <b className="text-base font-semibold text-[#FAFAFA] leading-5">
//                 RESET Retreats
//               </b>
//             </div>

//             <div className="flex items-center gap-2">
//               <Image
//                 src={scoopBgImage}
//                 alt="gymPerson Image"
//                 className="w-20 h-20 object-cover rounded-lg"
//               />
//               <Image
//                 src={activityImage}
//                 alt="gymPerson Image"
//                 width={0}
//                 height={0}
//                 className="w-20 h-20 object-cover rounded-lg"
//               />
//               <Image
//                 src={swimImage}
//                 alt="gymPerson Image"
//                 width={0}
//                 height={0}
//                 className="w-20 h-20 object-cover rounded-lg"
//               />
//             </div>

//             <div className="flex items-center gap-9 text-base font-normal">
//               <p className="w-[200px] leading-5">
//                 Our latest retreat, mountain biking and a weekend of wellness
//                 therapy in The Kumaon, at the foothills of Himalayas.
//               </p>
//               <p className="w-[200px] leading-5">
//                 Retreat is designed as an exclusive ecosystem where India's top
//                 minds unite to recharge, connect, and grow.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Scoop;

import React from "react";
import scoopBgImage from "@/Assets/Images/scoop-bg.svg";
import Title from "@/Components/Title/Title";
import Buttoncontained from "@/Components/Button/Button";
import { Button, IconButton } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Image from "next/image";
import activityImage from "@/Assets/Images/activity.svg";
import swimImage from "@/Assets/Images/swim.svg";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Scoop = () => {
  return (
    <div className="bg-[#E6E6E2] lg:bg-white px-4 md:px-8 lg:px-12">
      {/* Mobile View section */}
      <div className="lg:hidden pt-[70px]">
        <div className="flex items-center justify-center">
          <div className="flex gap-2.5 border border-black rounded-3xl py-1.5 px-12">
            <FiberManualRecordIcon sx={{ width: "10px", color: "black" }} />
            <h1 className="text-base font-normal text-[#292929]">
              LATEST SCOOP
            </h1>
          </div>
        </div>

        <div className="flex justify-between items-center mt-10 mb-[30px]">
          <div>
            <h4 className="text-base text-[#292929] font-normal leading-5">
              Wellness beyond Studio:
            </h4>
            <b className="text-base text-[#292929] font-normal leading-5">
              RESET Retreats
            </b>
          </div>

          <div className="flex items-center gap-3">
            <IconButton
              sx={{
                backgroundColor: "#D9D9D9",
                borderTopRightRadius: "0px",
                borderBottomRightRadius: "0px",
              }}
            >
              <ArrowLeftIcon className="text-black" />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "#D9D9D9",
                borderBottomLeftRadius: "0px",
                borderTopLeftRadius: "0px",
              }}
            >
              <ArrowRightIcon className="text-black" />
            </IconButton>
          </div>
        </div>
      </div>

      {/* desktop view section */}
      <div
        className="bg-cover bg-no-repeat lg:bg-cover bg-center h-[240px] lg:h-screen rounded-2xl p-5 flex flex-col justify-between"
        style={{ backgroundImage: `url(${scoopBgImage.src})` }}
      >
        {/* Header Section */}
        <div className="lg:flex flex-col md:flex-row justify-between items-start md:items-center px-4 pt-6 hidden">
          <Title title="LATEST SCOOP" iconSrc="/Icon/dot-icon.svg" />
          <div className="text-white text-xl md:text-3xl lg:text-5xl font-normal leading-8 md:leading-10 lg:leading-[3rem] max-w-lg md:max-w-2xl">
            <h1>
              RESET: Escape, Recharge, and Realign—where wellness meets
              transformation.
            </h1>
            <Buttoncontained text="LEARN MORE" />
          </div>
        </div>

        {/* Content Section */}
        <div className="px-4 lg:flex flex-col md:flex-row items-center gap-6 lg:gap-20 pb-8 hidden">
          <div className="text-white flex flex-col gap-2 items-center md:items-start">
            <div className="hidden lg:flex items-center gap-3">
              <IconButton sx={{ backgroundColor: "#D9D9D9", padding: "10px" }}>
                <ArrowLeftIcon />
              </IconButton>
              <span className="text-base">01 / 03</span>
              <IconButton sx={{ backgroundColor: "#D9D9D9", padding: "10px" }}>
                <ArrowRightIcon />
              </IconButton>
            </div>
            <p className="text-sm md:text-base font-semibold leading-5">
              Wellness beyond Studio:
            </p>
            <b className="text-sm md:text-base font-semibold leading-5">
              RESET Retreats
            </b>
          </div>

          {/* Image Section */}
          <div className="flex items-center gap-2 md:gap-4">
            <Image
              src={scoopBgImage}
              alt="gymPerson Image"
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg"
            />
            <Image
              src={activityImage}
              alt="activity Image"
              width={0}
              height={0}
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg"
            />
            <Image
              src={swimImage}
              alt="swim Image"
              width={0}
              height={0}
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg"
            />
          </div>

          {/* Description Section */}
          <div className="text-white flex flex-col md:flex-row gap-4 text-sm md:text-base font-normal">
            <p className="max-w-xs md:max-w-sm leading-5">
              Our latest retreat, mountain biking and a weekend of wellness
              therapy in The Kumaon, at the foothills of Himalayas.
            </p>
            <p className="max-w-xs md:max-w-sm leading-5">
              Retreat is designed as an exclusive ecosystem where India's top
              minds unite to recharge, connect, and grow.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile View section */}

      <div className="lg:hidden">
        <div className="flex justify-center items-center gap-5 mt-2.5">
          <Image
            src={scoopBgImage}
            alt="gymPerson Image"
            className="w-28 h-16 object-cover rounded-lg"
          />
          <Image
            src={activityImage}
            alt="activity Image"
            width={0}
            height={0}
            className="w-28 h-16 object-cover rounded-lg"
          />
          <Image
            src={swimImage}
            alt="swim Image"
            width={0}
            height={0}
            className="w-28 h-16 object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-5 mt-9 pb-16">
          <h1 className="text-[#292929] text-[28px] leading-8 font-normal">
            RESET: Escape, Recharge, and Realign—where wellness meets
            transformation.
          </h1>
          <p className="text-[#292929] text-base font-normal leading-5">
            Our latest retreat, mountain biking and a weekend of wellness
            therapy in The Kumaon, at the foothills of Himalayas.
          </p>
          <p className="text-[#292929] text-base font-normal leading-5">
            Retreat is designed as an exclusive ecosystem where India's top
            minds unite to recharge, connect, and grow.
          </p>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#b1e312",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "30px",
              padding: "6px 50px",
            }}
            fullWidth
          >
            <span className="flex items-center justify-center gap-1 text-base font-normal leading-5">
              LEARN MORE
              <ArrowRightIcon className="pb-0.5" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Scoop;

// import React from "react";
// import Image from "next/image";
// import exerciseImage from "@/Assets/Images/exercise.svg";
// import exerciseFriendImage from "@/Assets/Images/exercise-friend.svg";
// import Buttoncontained from "@/Components/Button/Button";
// import { Button } from "@mui/material";
// import scannerCodeImage from "@/Assets/Images/scanner-code.svg";
// import goArrowIcon from "@/Assets/Icon/go-arrow.svg";

// const HealthGift = () => {
//   return (
//     <div className="bg-white px-5 pb-16">
//       <div className="pt-[120px]">
//         <div
//           className="flex items-center text-black text-base font-normal bg-[#b1e312] rounded-2xl p-1.5 mx-3.5"
//           dangerouslySetInnerHTML={{
//             __html: `<marquee behavior="scroll" direction="left">* TRIAL OFFERS * NEW YEAR NEW YOU * TRIAL OFFERS * NEW YEAR NEW YOU * TRIAL OFFERS * NEW YEAR NEW YOU * TRIAL OFFERS * NEW YEAR NEW YOU * TRIAL OFFERS * NEW YEAR NEW YOU *</marquee>`,
//           }}
//         />
//         <Button
//           variant="contained"
//           sx={{ padding: "10px 30px 10px 30px", marginTop: "36px" }}
//         >
//           <span className="border-b-2">Marquee text on announcement bar</span>
//         </Button>
//       </div>

//       <div className="flex justify-between items-start mt-40">
//         <div>
//           <Image
//             src={exerciseImage}
//             alt="gymPerson Image"
//             className="w-auto object-cover"
//           />
//         </div>

//         <div className="flex flex-col justify-center">
//           <h1 className="w-[270px] text-[#1B1B1B] text-center text-5xl font-normal leading-14">
//             Gift of Health to your Friends and Family
//           </h1>
//           <div className="flex justify-center">
//             <Buttoncontained text="SHOP GIFT CARDS" />
//           </div>
//           <Button
//             variant="contained"
//             sx={{ padding: "10px 30px 10px 30px", marginTop: "180px" }}
//           >
//             <span className="border-b-2">Card animation on scroll</span>
//           </Button>
//         </div>

//         <div>
//           <Image
//             src={exerciseFriendImage}
//             alt="gymPerson Image"
//             className="w-auto object-cover"
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-2 gap-4 mt-[170px]">
//         {/* First box */}
//         <div className="">
//           <p className="w-[460px] text-2xl text-[#292929] font-normal leading-8">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud :
//           </p>
//         </div>

//         {/* Second box */}
//         <div className="h-[430px] p-[30px] bg-[#E6E6E2] rounded-2xl">
//           <div className="flex justify-end">
//             <Image
//               src={scannerCodeImage}
//               alt="gymPerson Image"
//               width={0}
//               height={0}
//               className="object-cover rounded-lg"
//             />
//           </div>
//           <div className="text-[#292929] text-5xl font-normal leading-14 mt-12">
//             <h1 className="w-[440px]">Download our App for easy access.</h1>
//           </div>
//         </div>

//         {/* Third box */}
//         <div className="h-[430px] flex flex-col justify-between p-[30px] bg-[#E6E6E2] rounded-2xl">
//           <div className="flex justify-end">
//             <Image
//               src={goArrowIcon}
//               alt="gymPerson Image"
//               width={0}
//               height={0}
//               className="object-cover rounded-lg"
//             />
//           </div>
//           <div className="text-[#292929] text-5xl font-normal leading-14 mt-12">
//             <h1 className="w-[440px]">Buy credits for your Membership Plan</h1>
//           </div>
//         </div>

//         {/* Fourth box */}
//         <div className="flex flex-col justify-between h-[430px] p-[30px] bg-[#E6E6E2] rounded-2xl">
//           <div className="flex justify-end">
//             <Image
//               src={goArrowIcon}
//               alt="gymPerson Image"
//               width={0}
//               height={0}
//               className="object-cover rounded-lg"
//             />
//           </div>
//           <div className="text-[#292929] text-5xl font-normal leading-14 mt-12">
//             <h1 className="w-[440px]">View The Lab programs schedule</h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HealthGift;

import React, { useEffect, useState } from "react";
import Image from "next/image";
import exerciseImage from "@/Assets/Images/exercise.svg";
import exerciseFriendImage from "@/Assets/Images/exercise-friend.svg";
import Buttoncontained from "@/Components/Button/Button";
import { Button } from "@mui/material";
import scannerCodeImage from "@/Assets/Images/scanner-code.svg";
import goArrowIcon from "@/Assets/Icon/go-arrow.svg";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

const HealthGift = () => {
  const [scrollDirection, setScrollDirection] = useState("down");
  const isMobileOrTablet = useMediaQuery("(max-width: 1120px)");
  const isMobile = useMediaQuery("(max-width: 976px)");
  const isMobileButton = useMediaQuery("(max-width: 767px)");

  console.log("isMobileOrTablet", isMobileOrTablet);

  // const variants = {
  //   slideInLeft: {
  //     hidden: { x: "0%", opacity: 0 },
  //     visible: { x: "-100%", opacity: 1, transition: { duration: 1.5 } },
  //   },
  //   slideInRight: {
  //     hidden: { x: "0%", opacity: 0 },
  //     visible: { x: "96%", opacity: 1, transition: { duration: 1.5 } },
  //   },
  //   scrollIn: {
  //     hidden: { y: 100, opacity: 0 },
  //     visible: { y: 0, opacity: 1, transition: { duration: 1.5 } },
  //   },
  // };

  const variants = {
    slideInLeft: {
      hidden: { x: "0%", opacity: 0 },
      visible: {
        x: isMobile ? "-10%" : isMobileOrTablet ? "-50%" : "-100%",
        opacity: 1,
        transition: { duration: 1.5 },
      },
    },
    slideInRight: {
      hidden: { x: "0%", opacity: 0 },
      visible: {
        x: isMobile ? "10%" : isMobileOrTablet ? "50%" : "96%",
        opacity: 1,
        transition: { duration: 1.5 },
      },
    },
    scrollIn: {
      hidden: { y: 100, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 1.5 } },
    },
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white px-5 pb-16">
      <div className="pt-20">
        <div
          className="flex items-center text-black text-sm md:text-base font-normal bg-[#b1e312] rounded-2xl p-1.5 mx-2 md:mx-4 bebas"
          dangerouslySetInnerHTML={{
            __html: `<marquee behavior="scroll" direction="left">* TRIAL OFFERS * NEW YEAR NEW YOU *</marquee>`,
          }}
        />
      </div>

      {/* Main Section with Animations */}
      <div className="flex justify-center items-end">
        <motion.div
          className={`flex sm:w-[750px] xl:w-[880px] justify-center lg:flex-row items-center pt-20 lg:pt-40 space-y-10 lg:space-y-0${
            scrollDirection === "down" ? "" : ""
          }`}
          initial="hidden"
          animate="visible"
        >
          {/* Left Image */}
          <motion.div
            variants={variants.slideInLeft}
            initial="hidden"
            animate={scrollDirection === "down" ? "visible" : ""}
            className="flex justify-center"
          >
            <Image
              src={exerciseImage}
              alt="Gym Person"
              className="w-[300px] h-[300px] md:h-auto xl:w-[900px] md:w-1/2 lg:w-auto object-cover"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            variants={variants.scrollIn}
            initial="hidden"
            animate={scrollDirection === "down" ? "visible" : "hidden"}
            className="flex flex-col items-center"
          >
            <h1 className="w-full text-center text-[#1B1B1B] text-lg md:text-3xl lg:text-5xl font-normal leading-tight mono">
              Gift of Health to your Friends and Family
            </h1>
            <div className="mt-3 md:mt-5 hidden md:flex">
              <Buttoncontained text="SHOP GIFT CARDS" />
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={variants.slideInRight}
            initial="hidden"
            animate={scrollDirection === "down" ? "visible" : "hidden"}
            className="flex justify-center"
          >
            <Image
              src={exerciseFriendImage}
              alt="Exercise Friend"
              className="w-[300px] h-[300px] md:h-auto md:w-1/2 xl:w-[900px]  mb-8 md:mb-0 lg:w-auto object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={variants.scrollIn}
        initial="hidden"
        animate={scrollDirection === "down" ? "visible" : "hidden"}
        className="flex flex-col items-center"
      >
        <div
          className={`flex justify-center md:hidden ${
            isMobileButton ? "" : ""
          }`}
        >
          <Buttoncontained text="SHOP GIFT CARDS" />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 lg:mt-40">
        <div>
          <p className="w-auto md:w-[420px] text-lg md:text-2xl text-[#292929] font-normal md:leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div className="h-auto md:h-[430px] p-6 bg-[#E6E6E2] rounded-2xl flex flex-col justify-between">
          <div className="flex justify-end">
            {isMobileOrTablet ? (
              <Image
                src={goArrowIcon}
                alt="Arrow Icon"
                className="w-10 md:w-[70px] h-14 md:h-14"
              />
            ) : (
              <Image
                src={scannerCodeImage}
                width={200}
                height={200}
                alt="QR Code"
                className=""
              />
            )}
          </div>
          <h1 className="w-[300px] xl:w-[440px] text-[#292929] text-[28px] md:text-[46px] font-normal leading-tight mt-6 mono">
            Download our App for easy access.
          </h1>
        </div>

        <div className="h-auto md:h-[430px] p-6 bg-[#E6E6E2] rounded-2xl flex flex-col justify-between">
          <div className="flex justify-end">
            <Image
              src={goArrowIcon}
              alt="Arrow Icon"
              className="w-10 md:w-[70px] h-14 md:h-14"
            />
          </div>
          <h1 className="w-[300px] xl:w-[440px] text-[#292929] text-[28px] md:text-[46px] font-normal leading-tight mt-6 mono">
            Buy credits for your Membership Plan
          </h1>
        </div>

        <div className="h-auto md:h-[430px] p-6 bg-[#E6E6E2] rounded-2xl flex flex-col justify-between">
          <div className="flex justify-end">
            <Image
              src={goArrowIcon}
              alt="Arrow Icon"
              className="w-10 md:w-[70px] h-14 md:h-14"
            />
          </div>
          <h1 className="w-[300px] xl:w-[440px] text-[#292929] text-[28px] md:text-[46px] font-normal leading-tight mt-6 mono">
            View The Lab programs schedule
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HealthGift;

"use client";
import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Image from "next/image";
import { Button, Card, CardContent, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import leftArrow from "@/Assets/Icon/left-arrow.svg";
import rightArrow from "@/Assets/Icon/right-arrow.svg";
import frontManSvg from "@/Assets/Images/front-man-img.svg";
import loginRightArrow from "@/Assets/Icon/login-right-arrow.png";
import homeBg from "@/Assets/Images/home-bg.svg";
import gymPerson from "@/Assets/Images/gym-persons.svg";
import gymPlace from "@/Assets/Images/gym-place.svg";
import Buttoncontained from "@/Components/Button/Button";
import CookieBanner from "@/Components/Banner/Banner";
import Banner from "@/Components/Banner/Banner";

const bgImages = [homeBg, gymPerson, gymPlace];

const Home = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (cookieConsent === "true") {
      setShowCookieBanner(false);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowCookieBanner(false);
  };

  // useEffect(() => {
  //   if (showCookieBanner) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "visible";
  //   }
  // }, [showCookieBanner]);
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
  };

  const handlePrev = () => {
    setBgIndex(
      (prevIndex) => (prevIndex - 1 + bgImages.length) % bgImages.length
    );
  };

  return (
    <div>
      <div className="relative h-[1150px] overflow-hidden">
        {/* {showCookieBanner && (
          <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] z-40"></div>
        )} */}

        {/* {showCookieBanner && (
          <Banner isVisible={true} onAccept={handleAcceptCookies} />
        )} */}

        <AnimatePresence mode="sync">
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0, x: "-100%", transition: { duration: 1 } }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={bgImages[bgIndex]}
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1B1B1B] to-transparent" />

        <Header isActive={false} />

        <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-start absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-10 pt-64 pb-5 px-5 gap-6">
          <h1 className="w-full md:w-[500px] text-[30px] sm:text-[28px] md:text-[40px] text-white font-normal font-sans sm:block md:block lg:hidden">
            Train Different, Move Better, Live Longer
          </h1>

          <div className="w-auto flex flex-col lg:items-start lg:text-left">
            <div className="gap-5 hidden lg:flex items-center">
              <IconButton
                aria-label="previous"
                sx={{ backgroundColor: "#D9D9D9", padding: "12px" }}
                onClick={handlePrev}
              >
                <Image src={leftArrow} alt="left-arrow" />
              </IconButton>
              <span className="text-[#FAFAFA] text-base">{`${
                bgIndex + 1
              }/3`}</span>
              <IconButton
                aria-label="next"
                sx={{ backgroundColor: "#D9D9D9", padding: "12px" }}
                onClick={handleNext}
              >
                <Image src={rightArrow} alt="right-arrow" />
              </IconButton>
            </div>

            <div className="flex sm:flex-row justify-between items-center md:items-start gap-4 md:gap-8">
              <p className="w-[200px] sm:w-[200px] md:w-[300px] lg:w-[200px] text-[16px] sm:text-[16px] md:text-base leading-5 text-white font-sans md:text-left mt-4">
                Unparalleled personal and group training that redefines fitness
                standards across New Delhi and Gurugram.
              </p>

              <div className="sm:block md:block lg:hidden">
                <Image
                  src={frontManSvg}
                  alt="Front Man"
                  width={100}
                  height={100}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:items-start gap-[34px]">
            <h1 className="w-[678px] text-[46px] text-white font-normal font-sans hidden lg:block">
              Train Different, Move Better,
              <br />
              Live Longer
            </h1>

            <Buttoncontained text="JOIN THE EXPERIENCE"></Buttoncontained>
          </div>

          <div className="justify-center lg:justify-end hidden lg:block">
            <Image
              src={frontManSvg}
              alt="Front Man"
              width={100}
              height={40}
              className="w-24 lg:w-36 xl:w-52 object-contain"
            />
          </div>
        </div>
      </div>

      {/* <div className="fixed bottom-5 right-0 z-50 mx-[20px] shadow-lg bg-white rounded-lg flex sm:flex-wrap md:flex-nowrap p-3 border border-blue-200">
        <div className="w-[35%] min-w-[150px]">
          <Image
            src={CookirBannerImg}
            alt="Promotion"
            className="rounded-lg w-full h-full object-cover"
            style={{ width: "350px", height: "auto" }}
          />
        </div>

        <div className="flex-1 p-4">
          <p className="text-gray-900 text-3xl font-semibold w-[60%]">
            Be the first to know about giveaways, special promotions,
            partnerships, and more.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Subject to terms of our{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            .
          </p>

          <div className="flex items-center mt-13 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="E-Mail Address"
              className="flex-1 p-2 text-gray-700 outline-none h-[50px] bg-[#EBEBEA]"
            />
            <button className="bg-[#EBEBEA] text-[#292929] h-[50px] uppercase px-4 py-2 p-2 text-sm font-medium">
              SUBMIT
            </button>
          </div>
        </div>

        <button className="absolute top-4 right-5 text-gray-500 hover:text-gray-700 text-xl bg-[#D9D9D9] h-[40px] w-[40px] rounded-full">
          ✕
        </button>
      </div> */}

      {/* <div className="block fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 w-[100%] mx-auto">
        {" "}
        <div className="bottom-4 mx-[14px] bg-white shadow-lg rounded-2xl p-4 z-50 border border-gray-200">
          <p className="text-gray-900 text-3xl font-semibold w-[100%]">
            Be the first to know about giveaways, special promotions,
            partnerships, and more.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Subject to terms of our{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            .
          </p>
          <div className="flex items-center mt-6 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="E-Mail Address"
              className="flex-1 p-2 text-gray-700 outline-none h-[50px] bg-[#EBEBEA]"
            />
            <button className="bg-[#EBEBEA] text-[#292929] h-[50px] uppercase px-4 py-2 p-2 text-sm font-medium">
              SUBMIT
            </button>
          </div>
          <button
            className="absolute -top-10 right-5 bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800 w-8 h-8 rounded-full flex items-center justify-center shadow-md"
            onClick={handleAcceptCookies}
          >
            ✕
          </button>
        </div>
      </div> */}

      {/* <div className="block sm:hidden fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 w-[100%] mx-auto">
        {" "}
        {showCookieBanner && (
          <div className="bottom-4 mx-[14px] bg-white shadow-lg rounded-2xl p-4 z-50 border border-gray-200">
            <p className="text-sm text-gray-700">This website uses cookies</p>
            <div className="flex gap-10 items-center mt-2">
              <button
                className="text-sm text-gray-500 hover:underline"
                onClick={handleAcceptCookies}
              >
                Manage
              </button>
              <button
                className=" text-black px-4 py-1 rounded-md text-sm hover:bg-blue-700 flex items-center gap-2"
                onClick={handleAcceptCookies}
              >
                <span className="text-2xl">•</span> <span>Accept</span>
              </button>
            </div>
            <button
              className="absolute -top-10 right-5 bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800 w-8 h-8 rounded-full flex items-center justify-center shadow-md"
              onClick={handleAcceptCookies}
            >
              ✕
            </button>
          </div>
        )}
      </div>

      <div className="fixed bottom-5 right-5 z-50 w-auto hidden sm:flex md:flex justify-end">
        {showCookieBanner && (
          <div className="bg-white shadow-lg p-3 rounded-lg flex items-center justify-between w-[auto] md:w-[auto] sm:w-[90%] sm:p-3 sm:flex-wrap">
            <p className="text-[#292929] text-[20px] flex-1 font-bold mr-[140px]">
              This website uses cookies.
            </p>

            <div className="flex items-center space-x-4">
              <button
                onClick={handleAcceptCookies}
                className="text-gray-500 text-sm cursor-pointer text-[20px] mr-10"
              >
                Manage
              </button>
              <button
                onClick={handleAcceptCookies}
                className="text-black text-sm font-medium cursor-pointer flex items-center gap-2 text-[20px]"
              >
                <span className="text-3xl">•</span> Accept
              </button>
            </div>

            <button
              onClick={handleAcceptCookies}
              className="bg-[#D9D9D9] text-[20px] rounded-full h-[30px] w-[30px] flex items-center justify-center text-black ml-5"
            >
              ✕
            </button>
          </div>
        )}
      </div> */}
      {/* <CookieBanner
        isVisible={showCookieBanner}
        onAccept={handleAcceptCookies}
      /> */}
    </div>
  );
};

export default Home;

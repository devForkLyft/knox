"use client";
import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Image from "next/image";
import { IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import leftArrow from "@/Assets/Icon/left-arrow.svg";
import rightArrow from "@/Assets/Icon/right-arrow.svg";
import frontManSvg from "@/Assets/Images/front-man-img.svg";
import homeBg from "@/Assets/Images/home-bg.svg";
import gymPerson from "@/Assets/Images/gym-persons.svg";
import gymPlace from "@/Assets/Images/gym-place.svg";
import Buttoncontained from "@/Components/Button/Button";

const bgImages = [homeBg, gymPerson, gymPlace];

const TermsOfUse = () => {
  const [bgIndex, setBgIndex] = useState(0);

  return (
    <div>
      <div className="relative h-full bg-white">
        <div className="pt-[200px] px-1 sm:px-6 md:px-8 lg:px-10 flex flex-col lg:flex-row justify-between items-start">
          <div className="w-full lg:w-1/3">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-black"
              style={{
                fontFamily: "Mona Sans",
                fontWeight: 400,
                fontSize: "46px",
                lineHeight: "54px",
              }}
            >
              Terms of Use
            </h1>
          </div>
          <div className="w-full lg:w-2/3 mt-4 lg:mt-0 px-0 sm:px-[70px]">
            <p
              className="text-black mb-6 sm:mb-8 md:mb-10"
              style={{
                fontFamily: "Mona Sans SemiCondensed",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "30px",
              }}
            >
              Please read carefully the following Terms of Use, which may be
              updated from time to time by Knox Studios (these "Terms"). These
              Terms define yours and Knox's rights and obligations. The most
              current version of these Terms can be accessed at any time at
              www.knoxfit.com (the "Site"). Changes to these Terms will be
              notified via posting on the Site (or other written notice to you).
            </p>
            <h3
              className="text-black font-bold mb-6 text-xl sm:text-2xl"
              style={{
                fontFamily: "Mona Sans SemiCondensed",
                fontWeight: 500,
              }}
            >
              ACCEPTANCE OF TERMS OF USE
            </h3>
            <p
              className="text-black mb-6 sm:mb-8 md:mb-10"
              style={{
                fontFamily: "Mona Sans SemiCondensed",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "30px",
              }}
            >
              By accessing, browsing, and/or using the Site and/or any facility
              operated by Knox ("The Lab"), you accept and agree to be bound to
              these Terms. In addition, when using particular Knox services, you
              also shall be subject to any posted guidelines, FAQs, or rules
              applicable to such services, which may be posted and modified from
              time to time.
            </p>
            <h3
              className="text-black font-bold mb-6 text-xl sm:text-2xl"
              style={{
                fontFamily: "Mona Sans SemiCondensed",
                fontWeight: 500,
              }}
            >
              LOREM IPSUM DOLOR SIT AMET
            </h3>
            <p
              className="text-black mb-6 sm:mb-8 md:mb-10"
              style={{
                fontFamily: "Mona Sans SemiCondensed",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "30px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h3
              className="text-black font-bold mb-6 text-xl sm:text-2xl"
              style={{
                fontFamily: "Mona Sans SemiCondensed",
                fontWeight: 500,
              }}
            >
              LOREM IPSUM DOLOR SIT AMET
            </h3>
            <p
              className="text-black mb-6 sm:mb-8 md:mb-10"
              style={{
                fontFamily: "Mona Sans SemiCondensed",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "30px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p
              className="text-black mb-6 sm:mb-8 md:mb-10"
              style={{
                fontFamily: "Mona Sans SemiCondensed",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "30px",
                paddingBottom: "10rem",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;

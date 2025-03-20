import React from "react";
import CustomImage from "@/Components/Image/image";
import homeImage from "@/assets/images/resetRetreatHome.svg";
import homeImage2 from "@/assets/images/resetRetreatsKitchen.svg";
import Buttoncontained from "@/Components/Button/Button";
import HeadingButton from "@/Components/Button/HeadingButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const ResetFirstSection = () => {
  return (
    <div className="relative h-full bg-white px-4 sm:px-6 md:px-8 pt-[50px]">
      <div className="max-w-[1000px] lg:max-w-[1300px] xl:max-w-[1600px] mx-auto pt-[50px] lg:pt-[150px] flex flex-col lg:flex-row lg:items-end">
        <div className="w-full lg:hidden">
          <h2 className="font-[Mona Sans] mt-17 mb-5 font-normal text-[24px] sm:text-[36px] md:text-[42px] xl:text-[46px] leading-[34px] sm:leading-[44px] md:leading-[50px] xl:leading-[56px] text-black">
            RESET is our foray into <br className="sm:hidden" /> the world of
            transformative travel.
          </h2>
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1.3}
            className="w-full h-[500px]"
            pagination={{ clickable: true, dynamicBullets: false }}
          >
            <SwiperSlide>
              <Image
                src={homeImage2}
                alt="Reset Retreats"
                width={450}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={homeImage}
                alt="Reset Retreats"
                width={450}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full hidden lg:flex lg:w-3/5 flex-col sm:flex-row gap-3 sm:gap-5 items-center">
          <CustomImage
            src={homeImage2}
            alt="Reset Retreats"
            width={450}
            height={500}
            className="w-full max-w-[450px] object-cover"
          />
          <CustomImage
            src={homeImage}
            alt="Reset Retreats"
            width={450}
            height={500}
            className="w-full max-w-[450px] object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-end text-center lg:text-left px-4 sm:px-6 md:px-8 lg:pl-10">
          <h2 className="hidden lg:block font-[Mona Sans] font-normal text-[24px] sm:text-[36px] md:text-[42px] xl:text-[46px] leading-[34px] sm:leading-[44px] md:leading-[50px] xl:leading-[56px] text-black">
            RESET is our foray into <br className="sm:hidden" /> the world of
            transformative travel.
          </h2>
          <p className="font-[Mona Sans SemiCondensed] font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-[18px] sm:leading-[22px] md:leading-[26px] xl:leading-[30px] text-black mt-4">
            This is where we <span className="italic">retreat</span> into nature
            as a way to build primal strength and forge new connections. So many
            of our clients are founders and CXOs, and for them—RESET is a new
            way to build connections that matter.
          </p>
          <div className="pt-6 pb-0 flex justify-center sm:mb-6 md:mb-8 lg:justify-start">
            <Buttoncontained
              text="BECOME A MEMBER"
              backgroundColor="#D9D9D966"
              color="#292929"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 lg:mt-[150px] hidden lg:flex">
        <HeadingButton
          text="UPCOMING EXPERIENCES"
          backgroundColor="#D9D9D966"
          color="#292929"
        />
      </div>

      <hr className="border-t-2 border-dashed border-gray-400 mt-[116px] sm:mt-[32px] mx-auto w-full" />
    </div>
  );
};

export default ResetFirstSection;

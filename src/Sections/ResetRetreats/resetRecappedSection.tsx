"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import HeadingButton from "@/Components/Button/HeadingButton";
import MaskGroupOne from "@/assets/images/Mask-group-1.svg";
import MaskGroupTwo from "@/assets/images/Mask-group-2.svg";
import MaskGroupThree from "@/assets/images/Mask-group-3.svg";
import MaskGroupFour from "@/assets/images/Mask-group-4.svg";
import MaskGroupFifth from "@/assets/images/Mask-group-5.svg";
import MaskGroupSix from "@/assets/images/Mask-group-6.svg";
import MaskGroupSeven from "@/assets/images/Mask-group-7.svg";

const FirstSlider = [MaskGroupOne, MaskGroupTwo, MaskGroupThree];
const SecondSlider = [MaskGroupFifth, MaskGroupSix, MaskGroupSeven];

export default function ScrollingCarousel() {
  return (
    <div className="w-full px-6 py-12 text-center bg-white">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start">
        <div className="w-full lg:w-2/10">
          <HeadingButton text="Reset Recapped" />
        </div>
        <div className="w-full lg:w-8/10">
          <h2 className="text-3xl text-[#292929] text-left mono">
            From the majestic peaks of the Himalayas to the royal grandeur of
            Rajasthan, our wellness journeys have created transformative
            experiences in India's most extraordinary settings. Take a look back
            at our previous experiences.
          </h2>
        </div>
      </div>

      {/* {images.map((src, index) => (
            <div key={index} className="object-cover flex-shrink-0 p-2">
              <Image
                src={src}
                alt={Image ${index + 1}}
                width={300}
                height={100}
                className="rounded-lg shadow-md"
              />
            </div>
          ))} */}

      <div className="relative mt-6">
        <Marquee pauseOnHover={true} speed={40} direction="left">
          {FirstSlider.map((src, index) => (
            <div key={index} className="p-2 flex-shrink-0">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={300}
                height={300}
                className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] rounded-lg shadow-md"
              />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="relative mt-6 mb-15">
        <Marquee pauseOnHover={true} speed={40} direction="left">
          {SecondSlider.map((src, index) => (
            <div key={index} className="p-2">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={300}
                height={300}
                className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

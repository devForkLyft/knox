import React from "react";
import Image from "next/image";

const RetreatSection = ({
  titleRight,
  date,
  title,
  description,
  itineraryText,
  bookText,
  imageSrc,
}: {
  titleRight: string;
  date: string;
  title: string;
  description: string;
  itineraryText: string;
  bookText: string;
  imageSrc: string;
}) => {
  return (
    <div className="bg-white">
      <div className="w-full flex flex-col lg:flex-row items-start justify-between mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-10 bg-white pb-[100px] lg:pb-[200px]">
        <div className="w-full lg:w-1/6 text-center lg:text-left mb-4 lg:mb-0">
          <div className="flex flex-row-reverse lg:flex-col items-center lg:items-start justify-center gap-4">
            <p className="text-gray-800 text-sm w-[50%]">{titleRight}</p>
            <p className="font-bold text-black w-[50%]">{date}</p>
          </div>

          {imageSrc && (
            <div className="lg:hidden w-full flex justify-center mt-15 sm:mt-20 lg:mt-10">
              <Image
                src={imageSrc}
                alt="Retreat Location"
                width={232}
                height={275}
                className="w-full max-w-[500px] sm:max-w-[232px] md:max-w-[232px] lg:max-w-[232px] h-auto rounded-[15px]"
              />
            </div>
          )}
        </div>

        <div className="w-full lg:w-[40%] text-center lg:text-left flex flex-col items-center lg:items-start">
          <h2 className="hidden mono sm:block text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] leading-[1.2] text-[#292929]">
            {title}
          </h2>

          <p className="text-[14px] sm:text-[16px] text-gray-700 mt-4">
            {description}
          </p>

          <div className="flex flex-row gap-4 mt-20 lg:mt-20 sm:mt-0">
            <button className="px-6 py-2 bg-black text-white rounded-full text-xs sm:text-sm hover:bg-gray-800 transition bebas">
              {itineraryText}
            </button>
            <button className="px-6 py-2 bg-gray-200 text-black rounded-full text-xs sm:text-sm bebas">
              {bookText}
            </button>
          </div>
        </div>

        {imageSrc && (
          <div className="hidden lg:block w-[232px] h-[275px]">
            <Image
              src={imageSrc}
              alt="Retreat Location"
              width={232}
              height={275}
              className="w-full max-w-[500px] sm:max-w-[232px] md:max-w-[232px] lg:max-w-[232px] h-auto rounded-[15px]"
            />
          </div>
        )}
      </div>
      <hr className="border-t-2 border-dashed border-gray-400 mx-[25px] lg:max-w-[100%]" />
    </div>
  );
};

export default RetreatSection;

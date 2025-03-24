import React from "react";

const CarosuelTab2 = () => {
  return (
    <div className="flex flex-col justify-between w-full bg-[#222221] rounded-2xl md:h-[600px] min-h-[400px] p-4 md:p-10">
      {/* Title Section */}
      <div className="flex flex-col justify-between w-full bg-[#222221] rounded-2xl md:h-[600px] min-h-[400px] p-4 md:p-10">
      <div className="w-full mb-6 md:mb-8">
        <h1 className="text-3xl md:text-5xl mono text-white">Getting Started</h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left Section */}
        <div className="w-full md:w-1/2 md:pr-4 mb-6 md:mb-0">
          <h2 className="text-sm font-bold uppercase tracking-wide text-white bebas">What to Bring</h2>
          <p className="mt-2 text-base md:text-lg leading-relaxed text-white">
            We take care of (almost) everything! Just make sure to bring appropriate workout clothes, suitable footwear, and a water bottle.
          </p>
          <p className="mt-2 text-base md:text-lg leading-relaxed text-white">
            For XX classes, boxing kit is mandatory; you can find them for sale in every studio. Carry a towel and a sipper; we will be providing lockers and lounge rooms.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 md:pl-4">
          <h2 className="text-sm font-bold uppercase tracking-wide text-white bebas">First Timer Briefing</h2>
          <p className="mt-2 text-base md:text-lg leading-relaxed text-white">
            As a first timer, please show up and check-in at the reception at least 15 minutes before class starts. This will allow us to welcome you, answer any questions you may have, and give you the time needed to attend the first timer briefing.
          </p>
          <p className="mt-2 text-base md:text-lg leading-relaxed text-white">
            We will show you your spot, guide you through the workout, demonstrate how to use the equipment, and answer any questions you may have.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CarosuelTab2;

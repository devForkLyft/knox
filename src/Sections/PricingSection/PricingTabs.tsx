import React, { useState } from "react";
import LabCredits from "./LabCredits";
import PersonalTraining from "./PersonalTraining";


const PricingTabs = () => {
  const [activeTab, setActiveTab] = useState("lab");

  return (
    <div className="flex flex-col items-center justify-center bg-[#EBEBEA] md:pt-52 px-4">
      {/* Title */}
      <h2 className="text-4xl font-normal mono text-black">Train on Your Terms</h2>

      {/* Description */}
      <div className="mt-7 flex flex-col md:flex-row text-center md:text-start items-center justify-center text-gray-600 space-y-2 md:space-y-0 md:space-x-4">
        <p className="text-sm w-full md:w-[280px]">Choose between our signature group classes or focused private sessions.</p>
        <p className="text-sm w-full md:w-[280px]">Use these credit packs to redeem against scheduled classes while booking.</p>
      </div>

      {/* Tab Switcher */}
      <div className="mt-7 flex space-x-1 rounded-full bg-[#D9D9D9] p-1">
        <button
          onClick={() => setActiveTab("lab")}
          className={`px-6 py-1 text-sm rounded-full transition-all mono ${
            activeTab === "lab" 
              ? "bg-white text-black shadow-sm" 
              : "text-[#292929B2]"
          }`}
        >
          The Lab Credits
        </button>
        <button
          onClick={() => setActiveTab("training")}
          className={`px-6 py-1 text-sm rounded-full transition-all mono ${
            activeTab === "training" 
              ? "bg-white text-black shadow-sm" 
              : "text-[#292929B2]"
          }`}
        >
          Personal Training
        </button>
      </div>

      {/* Separator Line */}
      <div className="w-full border-b border-[#D9D9D999] mt-8"></div>

      {/* Tab Content */}
      <div className="w-full">
        {activeTab === "lab" ? (
          <LabCredits />
        ) : (
          <PersonalTraining />
        )}
      </div>
    </div>
  );
};

export default PricingTabs;

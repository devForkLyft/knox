import React, { useState } from "react";
import PersonalTrainingData from "@/Assets/Data/PersonalTrainingData.json";


const PersonalTraining = () => {
    const { soloMembershipPacks, duoMembershipPacks } = PersonalTrainingData;
    const [selectedTier, setSelectedTier] = useState("First Timer");

    const [activeTab, setActiveTab] = useState("Knox Select");

    const tiers = ["First Timer", "Knox Select", "Knox Plus"];

    return (
        <div>
            <div className="flex flex-col items-center justify-center bg-[#EBEBEA] md:pt-52 px-4">
      {/* Title */}
      <h2 className="text-4xl font-normal mono text-black">Train on Your Terms</h2>

      {/* Tab Switcher */}
      <div className="mt-7 flex space-x-1 rounded-full bg-[#D9D9D9] p-1">
        <button
          onClick={() => setActiveTab("Knox Select")}
          className={`px-6 py-1 text-sm rounded-full transition-all ${
            activeTab === "Knox Select" 
              ? "bg-white text-black shadow-sm" 
              : "text-[#292929B2]"
          }`}
        >
         Knox Select
        </button>
        <button
          onClick={() => setActiveTab("Duo Membership")}
          className={`px-6 py-1 text-sm rounded-full transition-all ${
            activeTab === "Duo Membership" 
              ? "bg-white text-black shadow-sm" 
              : "text-[#292929B2]"
          }`}
        >
          Duo Membership
        </button>
      </div>

    </div>
        </div>
    );
};

export default PersonalTraining;

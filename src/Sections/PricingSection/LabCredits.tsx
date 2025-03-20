import React from "react";
import PricingCard from "../../Components/Button/PricingCard";
import LabCreditsData from "@/Assets/Data/LabCreditsData.json";

const LabCredits = () => {
  const { firstTimePacks, festivePacks, regularSessionPacks } = LabCreditsData;

  return (
    <div className="flex flex-col items-center justify-center w-full gap-9 pb-10 mono">
      {/* First Timer Packs Section */}
      <div className="w-full pt-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl">First Timer Packs:</h2>
          <button className="px-4 py-1 rounded-full border-[0.7px] border-[#292929] bg-transparent hover:bg-gray-50 transition-colors">
            • {firstTimePacks.location}
          </button>
        </div>
        <div className="flex flex-wrap gap-4">
          {firstTimePacks.packs.map((pack, index) => (
            <PricingCard
              key={index}
              title={pack.name}
              price={pack.price}
              description={pack.features[0]}
              buttons={[
                {
                  text: pack.buttons[0],
                  link: "#",
                  color: "bg-[#E9E9E9]"
                },
                {
                  text: pack.buttons[1],
                  link: "#",
                  color: "bg-[#C8E76E]"
                }
              ]}
            />
          ))}
        </div>
      </div>

      {/* Regular Session Packs Section */}
      <div className="w-full pt-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl mono">Regular Session Packs:</h2>
          <button className="px-4 py-1 rounded-full border-[0.7px] border-[#292929] bg-transparent hover:bg-gray-50 transition-colors">
          • {regularSessionPacks.location}
          </button>
        </div>
        <div className="flex flex-wrap gap-4">
          {regularSessionPacks.packs.map((pack, index) => (
            <PricingCard
              key={index}
              title={pack.name}
              price={pack.price}
              description={pack.features[0]}
              buttons={[
                {
                  text: pack.buttons[0],
                  link: "#",
                  color: "bg-[#E9E9E9]"
                },
                {
                  text: pack.buttons[1],
                  link: "#",
                  color: "bg-[#C4E36F]"
                }
              ]}
              mostPopular={pack.isMostPopular}
            />
          ))}
        </div>
      </div>

      {/* Festive/Offer Packs Section */}
      <div className="w-full pt-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl mono">Festive/Offer Packs:</h2>
          <button className="px-4 py-1 rounded-full border-[0.7px] border-[#292929] bg-transparent hover:bg-gray-50 transition-colors">
            • {festivePacks.location}
          </button>
        </div>
        <div className="flex flex-wrap gap-4">
          {festivePacks.packs.map((pack, index) => (
            <PricingCard
              key={index}
              title={pack.name}
              price={pack.price}
              description={pack.features[0]}
              buttons={[
                {
                  text: pack.buttons[0],
                  link: "#",
                  color: "bg-[#E9E9E9]"
                },
                {
                  text: pack.buttons[1],
                  link: "#",
                  color: "bg-[#C4E36F]"
                }
              ]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabCredits;

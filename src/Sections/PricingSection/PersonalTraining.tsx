import React, { useState } from "react";
import PersonalTrainingData from "@/Assets/Data/PersonalTrainingData.json";
import PricingCard from "../../Components/Button/PricingCard";

const PersonalTraining = () => {
    const { soloMembershipPacks, duoMembershipPacks } = PersonalTrainingData;
    const [selectedTier, setSelectedTier] = useState("First Timer");
    const [activeTab, setActiveTab] = useState("Knox Select");
    const tiers = ["First Timer", "Knox Select", "Knox Plus"];

    return (
        <div>
            <div className="flex flex-col items-center justify-center bg-[#EBEBEA] md:pt-20 px-4">
                {/* Title */}
                <h2 className="text-4xl font-normal text-black">Choose Your Training Tier</h2>

                {/* Tab Switcher */}
                <div className="mt-7 flex space-x-1 rounded-full bg-[#D9D9D9] p-1">
                    <button
                        onClick={() => setActiveTab("First Timer")}
                        className={`px-6 py-1 text-sm rounded-full transition-all ${
                            activeTab === "First Timer" 
                                ? "bg-white text-black shadow-sm" 
                                : "text-[#292929B2]"
                        }`}
                    >
                        First Timer
                    </button>
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
                        onClick={() => setActiveTab("Knox Plus")}
                        className={`px-6 py-1 text-sm rounded-full transition-all ${
                            activeTab === "Knox Plus" 
                                ? "bg-white text-black shadow-sm" 
                                : "text-[#292929B2]"
                        }`}
                    >
                        Knox Plus
                    </button>
                </div>

                {/* Content Display */}
                <div className="mt-8 w-full">
                    {/* Solo Packs Section */}
                    <div className="w-full pt-20">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl">Solo Training Packs:</h2>
                            <button className="px-4 py-1 rounded-full border-[0.7px] border-[#292929] bg-transparent hover:bg-gray-50 transition-colors bebas">
                                • {soloMembershipPacks.location}
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {soloMembershipPacks.packs.map((pack, index) => (
                                <PricingCard
                                    key={`solo-${index}`}
                                    title={pack.name}
                                    price={pack.price}
                                    description={pack.features[0]}
                                    validity={pack.validity}
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
                                    mostPopular={pack.isMostPopular}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Duo Packs Section */}
                    <div className="w-full pt-20">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl">Duo Training Packs:</h2>
                            <button className="px-4 py-1 rounded-full border-[0.7px] border-[#292929] bg-transparent hover:bg-gray-50 transition-colors bebas">
                                • {duoMembershipPacks.location}
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {duoMembershipPacks.packs.map((pack, index) => (
                                <PricingCard
                                    key={`duo-${index}`}
                                    title={pack.name}
                                    validity={pack.validity}
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
                                    mostPopular={pack.isMostPopular}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalTraining;

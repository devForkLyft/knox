import { useState } from "react";
import CarosuelTab1 from "./CarosuelTab1";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarosuelTab2 from "./CarosuelTab2";
import CarosuelTab3 from "./CarosuelTab3";
import CarosuelTab4 from "./CarosuelTav4";
export default function CarouselNavigation() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 1, component: <CarosuelTab1 /> },
    { id: 2, component: <CarosuelTab2 /> },
    { id: 3, component: <CarosuelTab3 /> },
    { id: 4, component: <CarosuelTab4 /> },
  ];

  return (
    <div className="relative bg-[#1B1B1B] text-white min-h-screen flex flex-col justify-center items-center pt-10 pb-10">
      {/* Section Title */}
      <div className="w-full px-5 mb-4 mt-20">
        <div className="flex flex-col items-start">
          <span className="text-sm uppercase tracking-wider mb-2 text-gray-400 rounded-full px-4 py-1 md:px-6 md:py-2  border-[0.7px] border-[#FAFAFA80]">• NEW TO KNOX</span>
          <h1 className="text-3xl md:text-5xl mono">Ready to Begin with Knox?</h1>
        </div>
      </div>

      {/* Dynamic Content */}
      <div className="w-full px-5">
        {/* Desktop View - Single Tab */}
        <div className="hidden md:block relative">
          {/* Navigation Controls - Positioned inside tab */}
          <div className="absolute top-6 right-6 z-10 flex items-center space-x-6">
            {/* Pagination */}
          

            {/* Left Button */}
            <button
              className={`w-10 h-10 flex items-center justify-center rounded-full bg-[#3F3F3F] ${
                activeTab === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-500"
              }`}
              disabled={activeTab === 0}
              onClick={() => setActiveTab((prev) => Math.max(prev - 1, 0))}
            >
              <ChevronLeft className="text-white w-5 h-5" />
            </button>

            <span className="text-white text-lg font-semibold tracking-wide">
              {String(activeTab + 1).padStart(2, "0")} / {String(tabs.length).padStart(2, "0")}
            </span>

            {/* Right Button */}
            <button
              className={`w-10 h-10 flex items-center justify-center rounded-full bg-[#3F3F3F] ${
                activeTab === tabs.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-500"
              }`}
              disabled={activeTab === tabs.length - 1}
              onClick={() => setActiveTab((prev) => Math.min(prev + 1, tabs.length - 1))}
            >
              <ChevronRight className="text-white w-5 h-5" />
            </button>
          </div>

          {/* Skip Button - Positioned inside tab */}
          <button className="absolute bottom-6 right-6 z-10 text-sm text-gray-400 uppercase tracking-wide bebas">
            Skip to Queries
          </button>

          {tabs[activeTab].component}
        </div>
        
        {/* Mobile View - All Tabs in Column */}
        <div className="md:hidden flex flex-col space-y-6">
          {tabs.map((tab) => (
            <div key={tab.id} className="min-h-[400px]">
              {tab.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

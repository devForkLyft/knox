import React from "react";
import cafeImage from "@/Assets/Images/NewToKnoxTab4-First.svg"
import recoveryImage from "@/Assets/Images/NewToKnoxTab4-Second.svg"
import Image from "next/image";

const amenitiesData = [
  {
    title: "PERO",
    description:
      "Our café, located at our Gurugram studio only, is open all day long to serve you a large selection of super-charged snacks, specialty coffee, nutritious bowls, and, of course, our signature superfood shakes.",
    imageUrl: cafeImage,
  },
  {
    title: "RECOVERY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    extraInfo:
      "Post-training and rehabilitation exercises, spas/amenities available at XX studio etc.",
    imageUrl: recoveryImage,
  },
];

const CarosuelTab4 = () => {
  return (
    <div className="bg-[#222221] text-white w-full p-8 md:p-10 rounded-2xl md:h-[600px] min-h-[400px] flex flex-col">
      <h1 className="text-4xl font-bold mb-8">Amenities</h1>

      {/* Two-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-36 mt-4">
        {amenitiesData.map((item, index) => (
          <div key={index} className="flex flex-col gap-6">
            <div className="relative h-[300px] w-full rounded-xl overflow-hidden">
              <Image
                src={item.imageUrl}
                alt={item.title}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="text-left">
              <h2 className="text-lg font-bold tracking-wider">{item.title}</h2>
              <p className="text-sm mt-3 leading-relaxed text-gray-300">{item.description}</p>
              {item.extraInfo && (
                <p className="text-sm mt-3 leading-relaxed text-gray-300">{item.extraInfo}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarosuelTab4;

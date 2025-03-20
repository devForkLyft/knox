import React, { useState } from "react";
import Image from "next/image";
import WhiteStar from '@/Assets/Images/WhiteAsterick.svg';
import GreenStar from '@/Assets/Images/GreenAsterick.svg';

const cardData = [
  {
    title: "Profile Completion and Waiver",
    description: "As a first-time app user, you are required to complete your profile and sign the waiver.",
  },
  {
    title: "Hydrate, Hydrate, Hydrate.",
    description: "Staying hydrated is essential for peak performance and recovery.",
  },
  {
    title: "Booking Recurring Slots",
    description: "Secure your favorite workout times with recurring class bookings.",
  },
  {
    title: "Time Cut-Off for Bookings",
    description: "Book your class at least 30 minutes before start time to secure your spot.",
  },
  {
    title: "Cancelling a Class",
    description: "Cancel at least 2 hours before the class to avoid penalties.",
  },
  {
    title: "Pet-Friendly Studio",
    description: "We welcome pets, but they must be on a leash at all times.",
  },
  {
    title: "Bringing a Guest along",
    description: "Guests must be registered before arrival and can join with a guest pass.",
  },
  {
    title: "Parking & Facilities",
    description: "We provide free parking, lockers, and showers for all members.",
  },
];

const CarosuelTab3 = () => {
  const [selectedIndex, setSelectedIndex] = useState(0); // First card is selected by default

  return (
    <div className="bg-[#222221] text-white w-full p-10 rounded-2xl h-[600px] flex flex-col">
      {/* Title */}
      <h1 className="text-3xl font-semibold mb-6">Club Rules</h1>

      {/* Grid Layout - Desktop: 3 columns, Mobile: 1 column */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-auto">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl shadow-md cursor-pointer transition-all relative
              ${index === selectedIndex
                ? "bg-white text-[#1B1B1B]"
                : "bg-[#313131] text-white"
              }
              ${index === selectedIndex ? "md:h-[120px]" : "h-auto md:h-[120px]"}
              flex flex-col`}
            onClick={() => setSelectedIndex(index)}
          >
            {/* Star Icon - Show white for non-selected on mobile, hidden on desktop */}
            {index !== selectedIndex && (
              <div className="absolute top-4 right-4 md:hidden">
                <Image src={WhiteStar} alt="star" width={16} height={16} />
              </div>
            )}
            
            {/* Star Icon - Show green for selected on mobile, hidden on desktop */}
            {index === selectedIndex && (
              <div className="absolute top-4 right-4 md:hidden">
                <Image src={GreenStar} alt="star" width={16} height={16} />
              </div>
            )}

            <h2 className="font-semibold">{card.title}</h2>
            {/* Show description for selected card on desktop, and mobile */}
            {index === selectedIndex && (
              <p className="text-sm mt-auto">{card.description}</p>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default CarosuelTab3;

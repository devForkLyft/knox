import React, { useState } from "react";
import GiftCardModal from "../Modal/GiftCardModal";

interface ButtonProps {
  text: string;
  link: string;
  color: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  buttons: ButtonProps[];
  mostPopular?: boolean;
  validity: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  buttons,
  mostPopular = false,
  validity,
}) => {
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);

  const handleButtonClick = (button: ButtonProps) => {
    console.log("button.text",button.text);
    if (button.text.toLowerCase().includes('gift')) {
      setIsGiftModalOpen(true);
    } else {
      // Handle other button clicks (e.g. navigate to link)
      window.location.href = button.link;
    }
  };

  return (
    <>
      <div
        className="relative w-[480px] h-[295px] rounded-[15px] bg-white p-6">
        {/* Most Popular Tag */}
        {mostPopular && (
          <span className="absolute top-0 right-0 bg-[#C4E36F66] text-xs font-medium bebas px-4 py-2 rounded-bl-lg rounded-tr-[15px]">
            MOST POPULAR
          </span>
        )}

        {/* Title */}
        <h3 className="text-center text-lg font-semibold">{title}</h3>

        {/* Price */}
        <p className="md:mt-14 text-center text-[#292929] text-4xl font-normal mono">₹{price}+</p>

        {/* Description */}
        <div className="flex justify-center items-center">
          <p className="md:mt-10 text-sm text-gray-800 text-center">{validity} ◆ </p> 
          <p className="md:mt-10 text-sm text-gray-800 text-center"> &nbsp;{description}</p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center space-x-3 text-[#292929]">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(button)}
              className={`px-4 py-2 text-sm letter-spacing-0.05em bebas text-center w-full rounded-full ${
                button.color
              }`}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>

      <GiftCardModal
        isOpen={isGiftModalOpen}
        onClose={() => setIsGiftModalOpen(false)}
        price={price}
        packName={title}
      />
    </>
  );
};

export default PricingCard;

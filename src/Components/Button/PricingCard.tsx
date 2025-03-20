import React from "react";

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
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  buttons,
  mostPopular = false,
}) => {
  return (
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
      <p className="md:mt-10 text-sm text-gray-600 text-center">{description}</p>

      {/* Buttons */}
      <div className="mt-6 flex justify-center space-x-3 text-[#292929]">
        {buttons.map((button, index) => (
          <a
            key={index}
            href={button.link}
            className={`px-4 py-2 text-sm letter-spacing-0.05em bebas text-center w-full rounded-full ${
              button.color
            }`}
          >
            {button.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;

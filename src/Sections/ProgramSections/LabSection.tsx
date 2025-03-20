import React, { useState } from 'react';
import LabSection1 from '@/Assets/Images/LabSection1.svg';
import LabSection2 from '@/Assets/Images/LabSection2.svg';
import LabSection3 from '@/Assets/Images/LabSection3.svg';
import LabImage from "@/Assets/Images/LabImage.svg";
import Image from 'next/image';

const programData = [
  {
    id: 1,
    image: LabSection1,
    title: 'BUILD',
    description: 'Select from our signature group training classes, each crafted to challenge and inspire.',
    link: '/programme/build'
  },
  {
    id: 2,
    image: LabSection2,
    title: 'STRIKE',
    description: 'A high-intensity class combining boxing bag drills with conditioning exercises to boost cardiovascular health, power, agility, and explosiveness.',
    link: '/programme/strike'
  },
  {
    id: 3,
    image: LabSection3,
    title: 'MOVE',
    description: 'A high-intensity class combining boxing bag drills with conditioning exercises designed to maximize health, power, agility, and explosiveness.',
    link: '/programme/move'
  }
];

function LabSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % programData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + programData.length) % programData.length);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-screen ">
        {/* Top Navigation Text */}
        <div className="hidden md:flex absolute top-8 left-6 z-10 items-center gap-2">
          <span className="text-base leading-none text-white px-5 py-1.5 border border-[#FAFAFA] rounded-full bebas">
            • SIGNATURE GROUP CLASSES
          </span>
        </div>
        
        {/* Main Title and Gurugram */}
        <div className="absolute top-4 left-4 mt-5 z-10 w-full pr-6 flex justify-between items-center">
          <h2 className="text-4xl text-white mono">The Lab</h2>
          <span className="md:hidden text-sm text-white px-4 py-1 border border-white rounded-full">
            GURUGRAM
          </span>
        </div>

        <Image 
          src={LabImage} 
          alt="The Lab" 
          className="w-full h-full object-cover rounded-3xl"
        />

        {/* Bottom Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 rounded-2xl">
          {/* Bottom Text */}
          <div className="absolute bottom-20 left-6 max-w-xl">
            <p className="text-white text-xl font-light">
              Select from our signature group training classes, each crafted to challenge and inspire.
            </p>
          </div>

          {/* Stats */}
          <div className="hidden md:flex absolute bottom-8 right-28 gap-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">03</div>
              <div className="text-sm text-gray-400">Class Formats</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">15</div>
              <div className="text-sm text-gray-400">Instructors</div>
            </div>
          </div>

          {/* Check out text */}
          <div className="hidden md:block absolute top-6 right-6 text-white text-sm">
            Check out our upcoming group classes at{' '}
            <span className="underline">9un.gym</span>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="w-full px-4 py-16">
        <div className="flex items-start justify-evenly mx-auto">
          <div className="flex gap-10 md:gap-60 flex-1">
            {/* Serial Number */}
            <div className="text-[40px] md:text-[80px] font-light text-black/90">
              {String(programData[currentIndex].id).padStart(2, '0')}
            </div>

            {/* Title and Description Column */}
            <div className="flex-1">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-4xl font-medium text-black/90">
                  {programData[currentIndex].title}:
                </h2>
                <p className="text-lg md:text-2xl font-medium text-black/90 leading-relaxed w-full md:w-[50%] font-sans">
                  {programData[currentIndex].description}
                </p>
                <div className="-ml-[calc(1rem+80px)] md:ml-0 w-[calc(100%+1rem+90px)] md:w-auto">
                  <button className="w-full md:w-auto mt-4 px-6 py-2 bg-black text-white rounded-3xl text-xs sm:text-sm hover:bg-gray-800 transition">
                    VIEW SCHEDULE
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex ml-8">
            <button 
              onClick={prevSlide}
              className="h-[30px] w-[30px] bg-[#F5F5F5] flex items-center justify-center"
              aria-label="Previous slide"
            >
              <span className="text-sm text-black/70">←</span>
            </button>
            <button 
              onClick={nextSlide}
              className="h-[30px] w-[30px] bg-[#F5F5F5] flex items-center justify-center"
              aria-label="Next slide"
            >
              <span className="text-sm text-black/70">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="w-full py-12">
        <div className="max-w-full mx-auto">
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-3 gap-8">
            {programData.map((program) => (
              <div key={program.id} className="relative group cursor-pointer">
                <Image
                  src={program.image} 
                  alt={program.title}
                  className="w-full aspect-auto object-cover"
                />
                <div className="absolute bottom-0 rounded-3xl left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <p className="text-white text-lg mb-1">• {program.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden w-full">
            <div className="relative w-full">
              <Image
                src={programData[currentIndex].image} 
                alt={programData[currentIndex].title}
                className="w-full aspect-auto object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm">• {programData[currentIndex].title}</p>
              </div>

              {/* Navigation Buttons */}
              <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-4">
                <button 
                  onClick={prevSlide}
                  className="h-[30px] w-[30px] bg-[#F5F5F5] flex items-center justify-center rounded-full"
                  aria-label="Previous slide"
                >
                  <span className="text-sm text-black/70">←</span>
                </button>
                <button 
                  onClick={nextSlide}
                  className="h-[30px] w-[30px] bg-[#F5F5F5] flex items-center justify-center rounded-full"
                  aria-label="Next slide"
                >
                  <span className="text-sm text-black/70">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LabSection;

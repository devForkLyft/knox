import React from 'react'
import PrivateTrainingMainDesktop from '@/Assets/Images/PrivateTrainingMainDesktop.svg'
import PrivateTrainingMainMobile from '@/Assets/Images/PrivateTrainingMainMobile.svg'
import PrivateTrainingSection2 from '@/Assets/Images/PrivateTrainingSection2.svg'
import Image from 'next/image'


function PrivateTrainingSectoin() {
  return (
    <div className="w-full space-y-4">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        {/* Mobile Layout */}
        <div className="absolute inset-0 z-10 md:hidden">
          {/* Top Section */}
          <div className="p-6 flex justify-between items-start">
            {/* Title */}
            <h1 className="text-4xl text-white font-light">
              <span className="block">Private</span>
              <span className="block">Training</span>
            </h1>

            {/* Location Tags */}
            <div className="flex flex-col gap-2">
              <span className="text-xs text-white px-3 py-1 border border-white/30 rounded-full">
                NEW DELHI
              </span>
              <span className="text-xs text-white px-3 py-1 border border-white/30 rounded-full">
                GURUGRAM
              </span>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="absolute bottom-12 p-6">
            <p className="text-white text-base font-light leading-relaxed">
              Engage in one-on-one sessions with our seasoned trainers, each customized to align with your specific goals.
            </p>
            <button className="mt-4 text-white text-sm underline">READ MORE</button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="absolute inset-0 z-10 hidden md:block">
          {/* Top Section */}
          <div className="p-6">
            {/* Bespoke Classes Tag */}
            <span className="text-xs text-white px-3 py-1 border border-white/30 rounded-full">
              • BESPOKE CLASSES
            </span>

            {/* Title */}
            <h1 className="text-4xl text-white font-light mt-12">Private Training</h1>
          </div>

          {/* Location Tags - Top Right */}
          <div className="absolute top-6 right-6 text-sm text-white">
            <p>Check out our upcoming group classes at:</p>
            <div className="flex gap-2 mt-1">
              <span className="underline">Gurugram</span>
              <span>,</span>
              <span className="underline">New Delhi</span>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-8 w-full px-6">
            <div className="flex justify-between items-end pr-28">
              <p className="text-white text-xl font-light leading-relaxed max-w-2xl">
                Engage in one-on-one sessions with our seasoned trainers, each customized to align with your specific goals—be it strength enhancement, weight management, or overall fitness improvement.
              </p>
              
              {/* Stats */}
              <div className="text-center">
                <div className="text-4xl font-bold text-white">12</div>
                <div className="text-sm text-gray-400">Instructors</div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop/Mobile Image handling */}
        <Image 
          src={PrivateTrainingMainDesktop}
          alt="Private Training"
          className="hidden md:block w-full h-full object-cover rounded-3xl"
        />
        <Image 
          src={PrivateTrainingMainMobile}
          alt="Private Training"
          className="block md:hidden w-full h-full object-cover rounded-3xl"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 rounded-3xl" />
      </div>

      {/* Bottom Section with Text and Image */}
      <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
        {/* Image Section - First on mobile */}
        <div className="relative rounded-3xl overflow-hidden order-1 md:order-2">
          <Image
            src={PrivateTrainingSection2}
            alt="Private Training Exercise"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section - Second on mobile */}
        <div className="bg-[#FAFAFA] rounded-3xl p-8 order-2 md:order-1">
          <div className="flex flex-col h-full">
            {/* Top Button */}
            <div className="flex justify-start mb-8">
              <button className="px-4 py-1.5 border border-black/30 rounded-full text-xs">
                • ELITE TRAINERS
              </button>
            </div>

            {/* Text Content - Pushed to Bottom */}
            <div className="flex items-end flex-1">
              <div className="max-w-3xl">
                <p className="text-4xl font-medium leading-relaxed">
                  Gone are the days of one hour a week, 1:1 with a trainer. Build the foundations of a healthy way of life with a monthly program rooted in science and brought to life by experts.
                </p>
                <div className="flex flex-row gap-4 mt-20 lg:mt-20 sm:mt-0">
                  <button className="px-6 py-3 bg-black text-white rounded-full text-xs sm:text-sm hover:bg-gray-800 transition">
                    BECOME A MEMBER
                  </button>
                  <button className="px-6 py-2 bg-gray-200 text-black rounded-full text-xs sm:text-sm">
                    VIEW ALL TRAINERS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivateTrainingSectoin

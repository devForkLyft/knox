import React from 'react';
import Image from 'next/image';
import iphoneMockup from '@/Assets/Images/NewToKnoxTab1.svg';
import iphoneMockup2 from '@/Assets/Images/NewToKnoxMobile.svg';
import AppleIcon from "@/Assets/Images/AppleIcon.svg"
import GoogleIcon from "@/Assets/Images/PlayStoreIcon.svg"

export default function CarosuelTab1() {
    return (
      <div className="flex flex-col md:flex-row  w-full bg-[#222221] rounded-2xl md:h-[600px] min-h-[400px] p-4 md:p-10">
        {/* Mobile Heading */}
        <h2 className="text-3xl mb-4 mono block md:hidden px-4 md:px-8">Booking Classes</h2>
        
        {/* iPhone Mockup */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <Image src={iphoneMockup} alt="Knox App" className="max-w-[250px] md:max-w-xs hidden md:block" />
          <Image src={iphoneMockup2} alt="Knox App" className="block md:hidden" />
        </div>
  
        {/* Text Content */}
        <div className="w-full md:w-1/2 px-4 md:px-8">
          <div className="max-w-lg mx-auto md:mx-0">
            <h2 className="text-3xl md:text-5xl mb-4 mono hidden md:block">Booking Classes</h2>
            <ol className="space-y-4 text-base md:text-lg">
              <li>1. Connect through our mobile app or website and create your account in a couple of clicks.
                   {/* Buttons */}
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-6">
                  <button className="bg-white text-black px-4 py-2 rounded w-full sm:w-auto text-sm md:text-base bebas flex items-center justify-center gap-2">
                    <Image src={GoogleIcon} alt="Google Play" className="w-5 h-5" />
                    Get it on Google Play
                  </button>
                  <button className="bg-white text-black px-4 py-2 rounded w-full sm:w-auto text-sm md:text-base bebas flex items-center justify-center gap-2">
                    <Image src={AppleIcon} alt="App Store" className="w-5 h-5" />
                    Download on App Store
                  </button>
                </div>
              </li>
              <li>
                2. Buy credits to book your class. To start, we suggest our{" "}
                <span className="font-italic">Discovery Packs</span> (INR 1499/- for a Trial Private session, or INR 999/- for
                three Lab Sessions).
              </li>
              <li>3. Check out our schedule and book your slot online by redeeming the credits against a class.</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
  
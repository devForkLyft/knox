import React from 'react'
import ComboClassesDesktop from '@/Assets/Images/ComboClassesDesktop.svg'
import ComboClassesMobile from '@/Assets/Images/ComboClassesMobile.svg'
import Image from 'next/image'

function ComboClassesSection() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[99vh]">
        {/* Top Navigation Text */}
        <div className="absolute top-6 left-6 z-10 flex items-center gap-2">
          <span className="text-xs text-white px-3 py-1 border border-white/30 rounded-full">
            • COMBO CLASSES
          </span>
        </div>
        
        {/* Main Title */}
        <div className="absolute top-6 left-6 mt-12 z-10">
          <h1 className="text-4xl text-white font-light">Combo Classes</h1>
        </div>

        {/* Desktop Image */}
        <div className="hidden md:block h-full">
          <Image 
            src={ComboClassesDesktop} 
            alt="Combo Classes" 
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        {/* Mobile Image */}
        <div className="md:hidden h-full">
          <Image 
            src={ComboClassesMobile} 
            alt="Combo Classes" 
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        {/* Bottom Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 rounded-3xl">
          {/* Bottom Text */}
          <div className="absolute bottom-20 left-6 max-w-xl">
            <p className="text-white text-xl font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
            </p>
          </div>

          {/* Bottom Right Text */}
          <div className="absolute top-6 right-6 text-white text-sm">
            Plan available exclusively at{' '}
            <span className="underline">9un.gym</span>
          </div>

          {/* Bottom Button */}
          <div className="absolute bottom-8 left-6">
            <button className="px-4 py-1.5 border border-white/30 rounded-full text-white text-xs">
              BROWSE / MEMBERS
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComboClassesSection

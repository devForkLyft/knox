import React from 'react'

interface ProgramNavBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

function ProgramNavBar({ activeTab, setActiveTab }: ProgramNavBarProps) {
  return (
    <div className='pt-48 md:scroll-pt-36 px-5'>
      <h1 className='text-2xl md:text-3xl lg:text-5xl font-normal font-sans mb-6 md:mb-5'>
        Tailored Programs. Tangible Results.
      </h1>
      <div className='flex flex-wrap items-center gap-2 md:gap-4 font-sans'> 
        <button 
          onClick={() => setActiveTab('all')}
          className={`text-[14px] md:text-[16px] font-[Mona Sans] px-3 md:px-4 py-1.5 md:py-2 font-normal leading-[20px] rounded-full transition-colors whitespace-nowrap
            ${activeTab === 'all' ? 'bg-[#292929] text-white' : 'bg-[#D9D9D966] text-black hover:bg-gray-300'}`}
        >
          All
        </button>
        <button 
          onClick={() => setActiveTab('section1')}
          className={`text-[14px] md:text-[16px] font-[Mona Sans] px-3 md:px-4 py-1.5 md:py-2 font-normal leading-[20px] rounded-full transition-colors whitespace-nowrap
            ${activeTab === 'section1' ? 'bg-[#292929] text-white' : 'bg-[#D9D9D966] text-black hover:bg-gray-300'}`}
        >
          The Lab
        </button>
        <button 
          onClick={() => setActiveTab('section2')}
          className={`text-[14px] md:text-[16px] font-[Mona Sans] px-3 md:px-4 py-1.5 md:py-2 font-normal leading-[20px] rounded-full transition-colors whitespace-nowrap
            ${activeTab === 'section2' ? 'bg-[#292929] text-white' : 'bg-[#D9D9D966] text-black hover:bg-gray-300'}`}
        >
          Private Training
        </button>
        <button 
          onClick={() => setActiveTab('section3')}
          className={`text-[14px] md:text-[16px] font-[Mona Sans] px-3 md:px-4 py-1.5 md:py-2 font-normal leading-[20px] rounded-full transition-colors whitespace-nowrap
            ${activeTab === 'section3' ? 'bg-[#292929] text-white' : 'bg-[#D9D9D966] text-black hover:bg-gray-300'}`}
        >
          Combo Classes
        </button>
      </div>
    </div>
  )
}

export default ProgramNavBar

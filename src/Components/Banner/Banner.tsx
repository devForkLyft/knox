import { div } from 'framer-motion/client';
import React from 'react';

interface BannerProps {
  isVisible: boolean;
  onAccept: () => void;
}

const Banner: React.FC<BannerProps> = ({ isVisible, onAccept }) => {
  if (!isVisible) return null;

  return (
    <div className='flex justify-end pr-20'>
    <div className='flex justify-between gap-[100px] items-center fixed p-2.5 z-[1000] bottom-0 px-9 py-7 bg-[#FAFAFA] rounded-2xl'>
      <span className='text-[26px] text-[#292929] font-medium '>This website uses cookies</span>
      <div className='flex gap-[70px]'>
      <button onClick={onAccept} style={{ marginLeft: '10px' }} className='text-[#292929] text-[26px] font-medium'>Accept</button>
      <button onClick={() => {}} style={{ marginLeft: '10px' }} className='text-[#292929] text-[26px] font-medium'>Manage</button>
      <button onClick={() => {}} style={{ marginLeft: '10px' }} className='rounded-full bg-[#D9D9D9] px-4 py-2.5'>X</button>
      </div>
    </div>
    </div>
  );
};

export default Banner;

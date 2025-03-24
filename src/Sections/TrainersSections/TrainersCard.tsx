import React from 'react';
import Header from '@/Components/Header/Header';
import TrainerCarousel from '@/Sections/TrainersSections/TrainersCarosuel';

const TrainersCard = () => {
  return (
    <>
      <div className='h-auto pb-20'>
        <Header isActive={true} />
      </div>
      
      <div className="w-full">
        <div className="px-5 mb-8 w-full">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl mono">Meet the Team</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors bebas">
                EXPERTISE
              </button>
              <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full hover:bg-gray-100 transition-colors">
                ←
              </button>
              <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full hover:bg-gray-100 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>
        
        <TrainerCarousel />
      </div>
    </>
  );
};

export default TrainersCard;

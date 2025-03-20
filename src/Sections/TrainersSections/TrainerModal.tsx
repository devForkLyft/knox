import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface TrainerModalProps {
  isOpen: boolean;
  onClose: () => void;
  trainer: {
    imageUrl: StaticImageData;
    expertise: string;
    bio: string;
    name: string;
  } | null;
}

const TrainerModal = ({ isOpen, onClose, trainer }: TrainerModalProps) => {
  if (!isOpen || !trainer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative bg-[#F5F5F5] rounded-lg w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        {/* Mobile Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 md:hidden"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Flex container with reversed order on desktop */}
        <div className="flex flex-col md:flex-row-reverse">
          {/* Image Section - Now on the right on desktop */}
          <div className="w-full md:w-1/2 relative h-[300px] md:h-[600px]">
            <Image
              src={trainer.imageUrl}
              alt={trainer.name}
              fill
              className="object-cover"
            />
            {/* Desktop Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-8 h-8 bg-white rounded-full hidden md:flex items-center justify-center hover:bg-gray-100"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content Section - Now on the left on desktop */}
          <div className="w-full md:w-1/2 p-6 md:p-12">
            <h2 className="text-2xl md:text-3xl font-normal mb-8">{trainer.name}</h2>
            
            <div className="space-y-6 md:space-y-8">
              <div>
                <div className="flex">
                  <h3 className="uppercase text-sm tracking-wider w-24">EXPERTISE:</h3>
                  <div className="flex-1 space-y-1">
                    {trainer.expertise.split(',').map((skill, index) => (
                      <p key={index} className="text-sm">{skill.trim()}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-dotted border-gray-400"></div>

              <div>
                <div className="flex">
                  <h3 className="uppercase text-sm tracking-wider w-24">BIO:</h3>
                  <p className="text-sm leading-relaxed flex-1">{trainer.bio}</p>
                </div>
              </div>

              <div className="border-t border-dotted border-gray-400"></div>

              <div>
                <div className="flex">
                  <h3 className="uppercase text-sm tracking-wider w-24">PLAYLISTS:</h3>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                      <div className="bg-[#D31027] w-full sm:w-[200px] h-14 rounded flex items-center p-2">
                        <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center mr-2">
                          <span className="text-white font-bold">N+</span>
                        </div>
                        <span className="text-white text-sm">Unholy</span>
                        <div className="ml-auto flex items-center gap-2">
                          <span className="text-white/50">...</span>
                          <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                            <span className="text-white">▶</span>
                          </div>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
                        <span className="text-gray-600 text-xl">+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerModal; 
import React, { useEffect, useRef, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import trainer1 from '@/Assets/Images/trainer1.svg';
import trainer2 from '@/Assets/Images/trainer2.svg';
import trainer3 from '@/Assets/Images/trainer3.svg';
import trainer4 from '@/Assets/Images/trainer4.svg';
import trainer5 from '@/Assets/Images/trainer5.svg';
import TrainerModal from '@/Sections/TrainersSections/TrainerModal';

interface TrainerProps {
  imageUrl: StaticImageData;
  expertise: string;
  bio: string;
  name: string;
}

const trainersData: TrainerProps[] = [
  {
    name: 'Saurabh Chaudhary',
    imageUrl: trainer1,
    expertise: 'Skill Acquisition, Meditation',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name:'Somaditya Sen',
    imageUrl: trainer2,
    expertise: 'HIIT, Strength and Conditioning, Animal Flow, Boxing',
    bio: 'Somaditya Sen is a certified HIIT, Strength and Conditioning, Active Flow, Boxing trainer with a passion for helping people achieve their fitness goals. With years of experience in the fitness industry, Somaditya is dedicated to providing personalized training programs that are tailored to each individual\'s needs and goals.',
  },
  {
    name:'Aditi Kakkar',
    imageUrl: trainer3,
    expertise: 'Olympic Lifting, Strength and Conditioning, Crossfit',
    bio: 'Aditi Kakkar is a certified yoga and Pilates trainer with a passion for helping people achieve their fitness goals. With years of experience in the fitness industry, Aditi is dedicated to providing personalized training programs that are tailored to each individual\'s needs and goals.',
  },
  {
    name:"Alok Barma",
    imageUrl: trainer4,
    expertise: 'Boxing, HIIT, Strength and Conditioning',
    bio: 'Alok Barma is a certified boxing trainer with a passion for helping people achieve their fitness goals. With years of experience in the fitness industry, Alok is dedicated to providing personalized training programs that are tailored to each individual\'s needs and goals.',
  },
  {
    name:"Millie Sharma",
    imageUrl: trainer5,
    expertise: 'Boxing, HIIT, Strength and Conditioning',
    bio: 'Alok Barma is a certified boxing trainer with a passion for helping people achieve their fitness goals. With years of experience in the fitness industry, Alok is dedicated to providing personalized training programs that are tailored to each individual\'s needs and goals.',
  },
  // Add more trainers as needed
];

const TrainerCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedTrainer, setSelectedTrainer] = useState<TrainerProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollInterval: NodeJS.Timeout;

    const startAutoScroll = () => {
      // Only auto-scroll on desktop
      if (window.innerWidth >= 768) {
        scrollInterval = setInterval(() => {
          if (scrollContainer) {
            scrollContainer.scrollLeft += 304;

            if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 304) {
              scrollContainer.style.scrollBehavior = 'auto';
              scrollContainer.scrollLeft = 0;
              setTimeout(() => {
                scrollContainer.style.scrollBehavior = 'smooth';
              }, 100);
            }
          }
        }, 2000);
      }
    };

    startAutoScroll();

    const handleMouseEnter = () => clearInterval(scrollInterval);
    const handleMouseLeave = () => startAutoScroll();

    scrollContainer?.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer?.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Create duplicated data for infinite scroll effect
  const extendedTrainersData = [...trainersData, ...trainersData, ...trainersData];

  const handleTrainerClick = (trainer: TrainerProps) => {
    setSelectedTrainer(trainer);
    setIsModalOpen(true);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div 
        ref={scrollRef}
        className="flex md:flex-row flex-col gap-6 overflow-x-auto overflow-y-auto md:overflow-y-hidden no-scrollbar py-8 px-4 md:px-8 lg:px-16"
        style={{ 
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
          maxHeight: typeof window !== 'undefined' && window.innerWidth < 768 ? '80vh' : 'auto'
        }}
      >
        {extendedTrainersData.map((trainer, index) => (
          <div 
            key={index} 
            className="min-w-[280px] md:min-w-[280px] w-full cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => handleTrainerClick(trainer)}
          >
            <div className="relative h-[380px] w-full">
              <Image
                src={trainer.imageUrl}
                alt={trainer.name}
                fill
                className="object-cover rounded-lg"
              />
              {/* Add trainer name overlay for mobile */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 md:hidden">
                <h3 className="text-white text-lg font-medium">{trainer.name}</h3>
                <p className="text-white/70 text-sm">{trainer.expertise.split(',')[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <TrainerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        trainer={selectedTrainer}
      />
    </div>
  );
};

export default TrainerCarousel;

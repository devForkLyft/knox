import ContactForm from '@/Components/Form/ContactForm';
import React from 'react';
import ContactLayout from '@/Components/Layout/ContactLayout';
import HeadingButton from '@/Components/Button/HeadingButton';
const ReachTrainersSection = () => {
  return <>
    <div className='h-full'>
    <div className='mt-10 px-5 mb-10'>
    <HeadingButton text="Get in the know" />
    </div>
    <ContactLayout layoutBgColor="#FAFAFA" layoutTextColor="#1B1B1B" mainText="Speak to our trainers" 
    subText="Feel free to check out our FAQs, where we already cover a lot of topics."
    description="Anything else? Just fill in the form and we will get back to your very shortly!"
    children={
     <ContactForm bgColor="#D9D9D9" placeholderColor="#1B1B1B" />
    }/>
      </div>
    
 </>
};

export default ReachTrainersSection;

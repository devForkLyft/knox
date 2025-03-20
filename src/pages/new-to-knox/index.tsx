import React from 'react';
import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import ContactLayout from '@/Components/Layout/ContactLayout';
import ContactForm from '@/Components/Form/ContactForm';
import PanelCarosuel from '@/Sections/NewToKnoxSections/PanelCarosuel';
const HomePage = () => {
    return (
        <>
            <div className='bg-[#1B1B1B]'>
                <Header isActive={false} />
                <PanelCarosuel />
                <ContactLayout layoutBgColor="#1B1B1B" layoutTextColor="#FAFAFA" mainText="We're here to help"
                    subText="Feel free to check out our FAQs, where we already cover a lot of topics."
                    description="Anything else? Just fill in the form and we will get back to your very shortly!"
                    children={<ContactForm bgColor="#222221" placeholderColor="#D9D9D9"  />} />
                <Footer bgColor='bg-[#1B1B1B]' />
            </div>
        </>
    )
}

export default HomePage;

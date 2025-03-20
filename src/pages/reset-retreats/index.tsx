import React from "react";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import ResetFirstSection from "@/Sections/ResetRetreats/becomeMemberSection";
import ResetSecondSection from "@/Sections/ResetRetreats/upcomingExperienceSection";
import homeImage3 from "@/assets/images/resetImage1.svg";
import homeImage4 from "@/assets/images/resetImage2.svg";
import ScrollingCarousel from "@/Sections/ResetRetreats/resetRecappedSection";

const ResetRetreats = () => {
  return (
    <div>
      <Header isActive={true} />
      <ResetFirstSection />
      <ResetSecondSection
        titleRight="Journey to Serenity: Ananda in the Himalayas"
        date="March 6 - 9, 2025"
        title="A transformative 4-day wellness and spiritual retreat at Ananda in the Himalayas."
        description="Join an exclusive group of 15 participants. Experience ancient spiritual wisdom with luxurious Ayurvedic practices, creating the perfect sanctuary for those seeking to disconnect and rejuvenate."
        itineraryText="GET ITINERARY"
        bookText="PRE-BOOK RETREAT"
        imageSrc={homeImage3}
      />
      <ResetSecondSection
        titleRight="RAAS Devigarh"
        date="March 6 - 9, 2025"
        title="A restorative weekend at RAAS Devigarh amidst nature and good company."
        description="Join us for a weekend with workouts, ice baths, spa treatments, and networking. Indulge in bespoke spa treatments, evening social dinners by the pool and a holistic spa routine featuring indigenous ingredients and ancient wisdom."
        itineraryText="GET ITINERARY"
        bookText="PRE-BOOK RETREAT"
        imageSrc={homeImage4}
      />
      <ScrollingCarousel />
      <Footer />
    </div>
  );
};

export default ResetRetreats;

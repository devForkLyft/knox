import React from "react";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import PricingTabs from "@/Sections/PricingSection/PricingTabs";

const HomePage = () => {
  return (
    <div>
      <Header isActive={true} />
      <PricingTabs />
      <Footer />
    </div>
  );
};

export default HomePage;

import React from "react";
import TermsOfUse from "../../Sections/TermsTemplatePageSection/TermsOfUse";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Faq from "@/Sections/FaqSection/Faq";

const HomePage = () => {
  return (
    <div>
      <Header isActive={true} />
      <Faq />
      <Footer />
    </div>
  );
};

export default HomePage;

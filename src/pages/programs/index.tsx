import React, { useState } from "react";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import LabSection from "@/Sections/ProgramSections/LabSection";
import PrivateTrainingSectoin from "@/Sections/ProgramSections/PrivateTrainingSectoin";
import ComboClassesSection from "@/Sections/ProgramSections/ComboClassesSection";
import ProgramNavBar from "@/Sections/ProgramSections/ProgramNavBar";


const HomePage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const renderSection = () => {
    switch(activeTab) {
      case 'all':
        return (
          <div className="space-y-12"> {/* Add vertical spacing between sections */}
            <LabSection/>
            <PrivateTrainingSectoin/>
            <ComboClassesSection/>
          </div>
        );
      case 'section1':
        return <LabSection/>;
      case 'section2':
        return <PrivateTrainingSectoin/>;
      case 'section3':
        return <ComboClassesSection/>;
      default:
        return <LabSection/>;
    }
  };

  return (
    <>
      <Header isActive={true}/>
      <main className="min-h-screen">
        <ProgramNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="px-5 mt-16">
          {renderSection()}
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default HomePage;

"use client"; // Only needed for Next.js App Router
import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Drawer,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import AcUnitIcon from "@mui/icons-material/AcUnit"; // Updated icon

const faqs = [
  {
    question: "Lorem Ipsum Dolor Sit",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    question: "Personalized Approach",
    answer: "Tailored solutions based on client needs.",
  },
  {
    question: "Expert Trainers",
    answer: "Our team consists of highly skilled professionals.",
  },
  {
    question: "Holistic Wellness Philosophy",
    answer: "Balancing mind, body, and spirit for overall health.",
  },
  {
    question: "Cutting-Edge Fitness",
    answer: "Innovative techniques backed by science.",
  },
];

const Faq = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(null);
  const [mainExpanded, setMainExpanded] = useState(null);

  const handleSidebarAccordionChange = (index: any) => {
    setSidebarExpanded(sidebarExpanded === index ? null : index);
  };

  const handleMainAccordionChange = (index: any) => {
    setMainExpanded(mainExpanded === index ? null : index);
  };

  return (
    <div className="flex pt-[150px] pb-[200px] bg-white text-black min-h-screen sm:pb[100px]">
      <main className="flex-1 p-4">
        <div className="text-[46px] font-bold mb-14 md:text-[40px] sm:text-[28px]">
          FAQs
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={mainExpanded === index}
              onChange={() => handleMainAccordionChange(index)}
              className="shadow-md bg-grey rounded-[40px]"
              style={{ background: "#E6E6E2", borderRadius: "15px" }}
              elevation={0} // Removes shadow
            >
              <AccordionSummary
                expandIcon={
                  <AcUnitIcon className="text-black" sx={{ fontSize: 13 }} />
                }
                className="bg-white text-black"
              >
                <h3 className="font-medium text-[26px] text-[#1B1B1B] sm:text-[20px]">
                  {faq.question}
                </h3>
              </AccordionSummary>
              <AccordionDetails className="text-black text-[16px] pr-[60px]">
                {faq.answer}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Faq;

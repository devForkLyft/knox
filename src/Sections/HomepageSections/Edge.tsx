'use client';
import React from "react";
import Title from "@/Components/Title/Title";
import dotIcon from "@/Assets/Icon/dot-icon.svg";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import Buttoncontained from "@/Components/Button/Button";

const accordionData = [
  {
    title: "Expert/Qualified Trainers",
    content: "At Knox, our trainers are more than just fitness enthusiasts—they're industry experts. Each coach is certified, experienced, and passionate about helping you achieve your goals. They bring diverse skill sets and cutting-edge knowledge to deliver personalized, effective, and safe training sessions tailored just for you.",
  },
  {
    title: "Individual Assessments by Coaches",
    content: "We believe every fitness journey starts with understanding you. Our coaches conduct in-depth individual assessments to evaluate your fitness level, mobility, strength, and overall health. This ensures your training program is built to suit your unique needs and maximize your progress.",
  },
  {
    title: "Identification of Weak Points",
    content: "Your fitness goals are only as strong as your foundation. At Knox, our coaches specialize in identifying weak points—whether it’s posture, mobility, or specific muscle imbalances—and creating targeted strategies to address them. The result? Improved performance, reduced risk of injury, and greater confidence in every move.",
  },
  {
    title: "Goal-Oriented Training",
    content: "Whether you’re training for strength, endurance, weight loss, or simply to feel good, our programs are laser-focused on your personal objectives. Our coaches design every session with your goals in mind, ensuring that each workout moves you closer to achieving the results you desire.",
  },
  {
    title: "Cross-Training with Different Coaches",
    content: "At Knox, we embrace the power of variety. Our coaches bring unique skills and expertise—from strength training to Pilates, boxing, and mobility work. You’ll have the opportunity to train with multiple experts, each helping you achieve specific aspects of your fitness journey. This approach keeps your workouts fresh, exciting, and multidimensional.",
  },
];

const Edge = () => {
  return (
    <div className="bg-[#1B1B1B] px-4 sm:px-6 lg:px-5 pt-36 md:pt-24 pb-48 text-white">
      <Title title="THE KNOX EDGE" iconSrc={dotIcon} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-5">
        {/* First box */}
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug font-sans max-w-xl">
            At Knox, our edge isn't just what we do, but how we do it.
          </h1>
          <div className="flex flex-col sm:flex-row items-start gap-6 pt-5">
            <p className="text-base font-normal leading-5 max-w-sm">
              We engineer transformations through a sophisticated blend of science, expertise, and personalized attention.
            </p>
            <p className="text-base font-normal leading-5 max-w-sm">
              Explore our signature elements that create a one-of-a-kind program for success, no matter your goals.
            </p>
          </div>
        </div>

        {/* Second box */}
        <div>
          {accordionData.map((item, index) => (
            <Accordion key={index} defaultExpanded={index === 0} sx={{ backgroundColor: "#222221", borderRadius: "10px", marginTop: "20px", padding: "15px 20px" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon className="text-white" />} aria-controls={`panel${index + 1}-content`} id={`panel${index + 1}-header`}>
                <Typography component="span" sx={{ color: "#FAFAFA", fontSize: { xs: "18px", md: "26px" }, fontWeight: "500" }}>
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "#FAFAFA", fontSize: "16px", fontWeight: "400", paddingBottom: "10px" }}>
                  {item.content}
                </Typography>
                {index === 0 && (
                  <Link href="/" passHref className="text-base font-normal text-[#FAFAFA] underline">
                    SPEAK TO OUR TRAINERS
                  </Link>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#FAFAFA] font-normal leading-snug mt-40 md:max-w-4xl">
        No Knox experience is the same. We’re here to help you find your custom plan, get matched, and speak with our elite trainers to take a trial class.
      </h1>
      <div className="pt-12">
        <Buttoncontained text="SPEAK TO OUR TRAINER" />
      </div>
    </div>
  );
};

export default Edge;

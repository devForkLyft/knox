"use client";
import { Button } from "@mui/material";
import Image from "next/image";
import whiteRightArrow from "@/Assets/Icon/white-right-arrow.svg";
import Logo from "@/Assets/Icon/logo.svg";

interface FooterProps {
  bgColor?: string;
}

export default function StudioLocations({ bgColor }: FooterProps) {
  return (
    <div className={`${bgColor ? bgColor : "bg-[linear-gradient(to_top,_#1B1B1B_90%,_white_100%)]"} text-white min-h-screen px-4 sm:px-6 lg:px-5 pt-36 lg:pt-32`}>
      <h2 className="text-sm sm:text-base text-[#D9D9D9] font-normal uppercase block md:hidden">
        Our Studios
      </h2>
      <div className="mx-auto flex flex-col-reverse lg:flex-row justify-center gap-10 lg:gap-40 pt-5">
        {/* Left Section */}
        <div className="w-full lg:w-1/3 grid grid-cols-2 gap-5 md:inline">
          <h2 className="text-sm sm:text-base text-[#D9D9D9] font-normal uppercase hidden md:block bebas">
            Our Studios
          </h2>

          <div className="mt-8 sm:mt-14">
            <h3 className="text-sm sm:text-base font-normal leading-5">
              1. New Delhi -
            </h3>
            <p className="w-full sm:w-[250px] text-[#FAFAFA] text-sm sm:text-base leading-5 font-normal pt-3">
              Opposite Flyover, Plot No. 34, DS Bawa, Basement Ring Road, Lajpat
              Nagar 4, New Delhi, South Delhi, Delhi 110024
            </p>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#676767",
                color: "#FAFAFA",
                fontWeight: "bold",
                borderRadius: "30px",
                // padding: "6px 30px",
                padding: { xs: "6px 16px", sm: "6px 24px", md: "6px 30px" },
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                marginTop: "24px",
              }}
            >
              <span className="flex items-center gap-1.5 bebas">
                LOCATE ON MAPS
                <Image
                  src={whiteRightArrow}
                  alt="Arrow Icon"
                  width={0}
                  height={0}
                />
              </span>
            </Button>
          </div>
          <div className="mt-8 sm:mt-12">
            <h3 className="text-sm sm:text-base font-normal leading-5">
              2. Gurugram +
            </h3>
            <p className="w-full sm:w-[250px] text-[#FAFAFA] text-sm sm:text-base leading-5 font-normal pt-3">
              Opposite Flyover, Plot No. 34, DS Bawa, Basement Ring Road, Lajpat
              Nagar 4, New Delhi, South Delhi, Delhi 110024
            </p>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#676767",
                color: "#FAFAFA",
                fontWeight: "bold",
                borderRadius: "30px",
                // padding: "6px 30px",
                padding: { xs: "6px 16px", sm: "6px 24px", md: "6px 30px" },
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                marginTop: "24px",
              }}
            >
              <span className="flex items-center gap-1.5 bebas">
                LOCATE ON MAPS
                <Image
                  src={whiteRightArrow}
                  alt="Arrow Icon"
                  width={0}
                  height={0}
                />
              </span>
            </Button>
          </div>
        </div>

        {/* Right Section - Embedded Map Placeholder */}
        <div className="w-full lg:w-2/3 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83937455055!2d77.0688979148902!3d28.52728032333666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38d477d87b3%3A0x4218a61f11a47258!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1648801803166!5m2!1sen!2sus"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-10 text-gray-400 border-b border-dashed border-gray-500 pb-10">
        <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {["Connect", "", "Discover", "Member Area", "Shop", "Info"].map(
            (section, index) => (
              <div
                key={index}
                className={`text-sm sm:text-base md:${
                  section === "" ? "hidden" : "block"
                }`}
              >
                <h4 className="text-white font-normal leading-4 uppercase bebas">
                  {section}
                </h4>
                <ul className="pt-4 space-y-2 text-[#FAFAFA]">
                  {section === "Connect" && (
                    <>
                      <li>+91-93155-22626</li>
                      <li>hello@knoxfit.in</li>
                      <li className="hidden md:block">Instagram</li>
                      <li className="hidden md:block">Facebook</li>
                    </>
                  )}

                  {section === "" && (
                    <div className="block pt-5 md:hidden">
                      <>
                        <li>Instagram</li>
                        <li>Facebook</li>
                      </>
                    </div>
                  )}

                  {section === "Discover" && (
                    <>
                      <li>The Lab</li>
                      <li>Private Training</li>
                      <li>Combo Classes</li>
                      <li>Cafe</li>
                      <li>Children's Programs</li>
                    </>
                  )}
                  {section === "Member Area" && (
                    <>
                      <li>Download App</li>
                      <li>Buy Credits</li>
                      <li>View Schedule</li>
                    </>
                  )}
                  {section === "Shop" && (
                    <>
                      <li>Gift Cards</li>
                      <li>Merch</li>
                      <li>Collection Name</li>
                      <li>Collection Name 2</li>
                    </>
                  )}
                  {section === "Info" && (
                    <>
                      <li>FAQ</li>
                      <li>Speak to Trainer</li>
                      <li>Cancellations</li>
                      <li>Privacy & Legal</li>
                      <li>Corporate Membership</li>
                    </>
                  )}
                </ul>
              </div>
            )
          )}
        </div>
      </footer>

      <div className="flex sm:flex-row justify-between items-center mt-8 text-sm sm:text-base pb-7">
        <p className="mono">Copyright Knox Studio, 2024</p>
        <Image
          src={Logo}
          alt="logo"
          width={100}
          height={40}
          className="md:flex hidden"
        />
        <p className="mono">Site by Forklyft Inc</p>
      </div>
    </div>
  );
}

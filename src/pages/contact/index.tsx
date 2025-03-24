import ContactForm from "@/Components/Form/ContactForm";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import { TextField } from "@mui/material";
import { div } from "framer-motion/client";
import React from "react";

const index = () => {
  return (
    <>
    <div className="bg-[#222221] h-auto md:h-screen">
      <div className="pb-20">
        <Header isActive={false} />
      </div>
      <div className="bg-[#222221] border-dotted md:border-solid border-b-1 border-[#D9D9D9] p-5">
        <div className="">
          <h1 className="text-[28px] md:text-[46px] text-[#FAFAFA] font-normal mono">
            Reach Out:
          </h1>
        </div>
      </div>

      <div className="md:flex md:flex-row flex-col justify-around gap-10 p-5">
        <div className="w-auto md:w-[300px] flex flex-col gap-5 text-[#FAFAFA] text-base font-normal leading-5">
          <p>
            Feel free to check out our <span className="underline"> FAQs,</span>{" "}
            where we already cover a lot of topics.
          </p>
          <p>
            Anything else? Just fill in the form and we will get back to your
            very shortly!
          </p>
          <div className="w-auto md:w-[200px] flex flex-col gap-2.5 pt-5 md:pt-[60px] leading-5">
            <p>Or drop by at any of our studios:</p>
            <div className="flex items-center gap-2.5">
              <span className="md:underline p-1.5 md:p-0 border-2 border-white md:border-none rounded-full md:rounded-none">
                Gurugram ,
              </span>
              <span className="md:underline p-1.5 md:p-0 border-2 border-white md:border-none rounded-full md:rounded-none">
                New Delhi
              </span>
            </div>
          </div>
        </div>

        {/* <div className="w-full flex flex-col gap-5 pt-10 md:pt-0">
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiInputBase-input": {
                color: "#FAFAFA",
              },
              "& label": {
                color: "#FAFAFA",
              },
              "& label.Mui-focused": {
                color: "#FAFAFA",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "",
                },
                "&:hover fieldset": {
                  borderColor: "",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1B1B1B",
                },
              },
              backgroundColor: "#1B1B1B",
              color: "white",
              borderRadius: "15px",
            }}
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            type="tel"
            fullWidth
            sx={{
              "& .MuiInputBase-input": {
                color: "#FAFAFA",
              },
              "& label": {
                color: "#FAFAFA",
              },
              "& label.Mui-focused": {
                color: "#FAFAFA",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "",
                },
                "&:hover fieldset": {
                  borderColor: "",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1B1B1B",
                },
              },
              backgroundColor: "#1B1B1B",
              color: "white",
              borderRadius: "15px",
            }}
          />
          <div className="relative w-full bg-[#1B1B1B] rounded-[15px]">
            <TextField
              label="Send us a Message"
              multiline
              rows={10}
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiInputBase-input": {
                  color: "#FAFAFA",
                },
                "& label": {
                  color: "#FAFAFA",
                },
                "& label.Mui-focused": {
                  color: "#FAFAFA",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "",
                  },
                  "&:hover fieldset": {
                    borderColor: "",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1B1B1B",
                  },
                },
                backgroundColor: "#1B1B1B",
                color: "white",
                borderRadius: "15px",
              }}
            />
            <div className="absolute bottom-5 md:bottom-8 right-8">
              <span className="flex justify-end uppercase text-base font-normal text-[#FAFAFA] underline">
                Send Message
              </span>
            </div>
          </div>
        </div> */}
        <ContactForm bgColor="#1B1B1B" placeholderColor="#FAFAFA"  />
      </div>
    </div>
    <Footer bgColor="bg-[#1B1B1B]" />
    </>
  );
};

export default index;

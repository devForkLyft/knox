import { TextField } from '@mui/material';
import React from 'react';

const ContactForm = ({bgColor, placeholderColor}:{bgColor:string, placeholderColor:string}) => {
  return   <div className="w-full flex flex-col gap-5 pt-10 md:pt-0">
  <TextField
    id="outlined-basic"
    label="Full Name"
    variant="outlined"
    fullWidth
    sx={{
      "& .MuiInputBase-input": {
        color: placeholderColor,
      },
      "& label": {
        color: placeholderColor,
      },
      "& label.Mui-focused": {
        color: placeholderColor,
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          border: "none",
        },
        "&:hover fieldset": {
          border: "none",
        },
        "&.Mui-focused fieldset": {
          border: "none",
        },
      },
      backgroundColor: bgColor,
      color: placeholderColor,
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
        color: placeholderColor,
      },
      "& label": {
        color: placeholderColor,
      },
      "& label.Mui-focused": {
        color: placeholderColor,
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          border: "none",
        },
        "&:hover fieldset": {
          border: "none",
        },
        "&.Mui-focused fieldset": {
          border: "none",
        },
      },
      backgroundColor: bgColor,
      color: placeholderColor,
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
          color: placeholderColor,
        },
        "& label": {
          color: placeholderColor,
        },
        "& label.Mui-focused": {
          color: placeholderColor,
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            border: "none",
          },
          "&:hover fieldset": {
            border: "none",
          },
          "&.Mui-focused fieldset": {
            border: "none",
          },
        },
        backgroundColor: bgColor,
        color: placeholderColor,
        borderRadius: "15px",
      }}
    />
    <div className="absolute bottom-5 md:bottom-8 right-8">
      <span 
        className="flex justify-end uppercase text-base font-normal underline bebas"
        style={{ color: placeholderColor }}
      >
        Send Message
      </span>
    </div>
  </div>
</div>;
};

export default ContactForm;

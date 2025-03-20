"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import rightArrow from "@/Assets/Icon/login-right-arrow.png"

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<{ phone: string }>({
    mode: "onTouched", 
  });

  const onSubmit = (data: { phone: string }) => {
    console.log("Phone Number Submitted:", data.phone);
  };

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 w-full h-screen">
      <div className="hidden lg:flex justify-center items-center bg-gray-500 p-5">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={40}
          className="w-24 lg:w-36 xl:w-48 object-contain"
        />
      </div>

      <div className="flex justify-center items-center flex-col gap-6 bg-white px-6 md:px-10 w-full h-screen">
        <h1 className="text-black font-normal text-2xl md:text-3xl">Log In</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-4 w-full max-w-xs md:max-w-sm mt-12"
        >
          <TextField
            type="tel"
            sx={{ width: "344px" }}
            label="Phone Number"
            variant="outlined"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit phone number",
              },
            })}
            error={!!errors.phone && touchedFields.phone}
            helperText={touchedFields.phone ? errors.phone?.message : ""}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#b1e312",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "30px",
              padding: "6px 0px",
              width: "344px",
            }}
          >
            <span className="flex items-baseline justify-center gap-1">
              LOGIN
              <Image src={rightArrow} alt="Arrow Icon" />
            </span>
          </Button>
        </form>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { TextField, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const ContactPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-[#0F3D0F] text-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-green-400">Reach Out:</h2>
          <IconButton className="text-white">
            <CloseIcon />
          </IconButton>
        </div>

        {/* Contact Info */}
        <p className="text-gray-300 text-sm">
          Feel free to reach out via WhatsApp, email, or chat if stuck.
          <br />
          Do you like any of our packages? Example: "3D Plan, Cafe"
        </p>

        {/* Contact Form */}
        <form className="mt-6 space-y-4">
          <TextField
            fullWidth
            variant="outlined"
            label="Full Name"
            InputLabelProps={{ className: "text-gray-300" }}
            InputProps={{
              className: "bg-gray-800 text-white border-green-500",
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Phone Number"
            InputLabelProps={{ className: "text-gray-300" }}
            InputProps={{
              className: "bg-gray-800 text-white border-green-500",
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Send us a Message"
            multiline
            rows={4}
            InputLabelProps={{ className: "text-gray-300" }}
            InputProps={{
              className: "bg-gray-800 text-white border-green-500",
            }}
          />

          {/* Image Upload */}
          <div className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-green-500 rounded-lg">
            <label className="cursor-pointer flex flex-col items-center text-gray-300">
              <AddPhotoAlternateIcon className="text-green-400 text-3xl mb-2" />
              <span>Upload an Image</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>

            {selectedImage && (
              <img
                src={selectedImage}
                alt="Uploaded preview"
                className="mt-4 w-32 h-32 object-cover rounded-lg"
              />
            )}
          </div>

          {/* Submit Button */}
          <Button
            variant="contained"
            fullWidth
            className="bg-green-600 text-white hover:bg-green-500"
          >
            Submit Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

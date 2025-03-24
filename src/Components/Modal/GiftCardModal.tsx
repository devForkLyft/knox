import React from 'react';
import Image from 'next/image';
import { Dialog, TextField } from '@mui/material';
import logo from '@/Assets/Icon/logo.svg';

interface GiftCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  price: string;
  packName: string;
}

const GiftCardModal: React.FC<GiftCardModalProps> = ({
  isOpen,
  onClose,
  price,
  packName,
}) => {
  return (
    <Dialog 
      open={isOpen} 
      onClose={onClose}
      maxWidth="md"
      PaperProps={{
        style: {
          borderRadius: '15px',
          padding: '24px',
          width: '100%',
          maxWidth: '800px',
        },
      }}
    >
      <div className="flex gap-8">
        {/* Left side - Preview */}
        <div className="w-1/2 bg-[#C8E76E] p-8 rounded-lg">
          <div className="flex flex-col items-center">
            <Image src={logo} alt="Knox Logo" width={150} height={80} />
            <div className="mt-8 w-full bg-white rounded-lg p-6">
              <p className="text-sm">Dear <span className="recipient-name">_______</span>,</p>
              <p className="mt-4 text-sm">Please accept my gift of ₹{price}/- redeemable at Knox Studios.</p>
              <p className="mt-4 text-sm message-preview">Message to Recipient</p>
              <p className="mt-8 text-sm">Warmest,</p>
              <p className="mt-2 text-sm sender-name">_______</p>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-1/2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Gift Card</h2>
            <p className="text-xl mono">₹{price}/-</p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium mb-4">Customize</h3>
            <TextField
              fullWidth
              label="Recipient Name"
              variant="outlined"
              size="small"
            />
            <TextField
              fullWidth
              label="Recipient Email"
              variant="outlined"
              size="small"
            />
            <TextField
              fullWidth
              label="Message to Recipient"
              variant="outlined"
              multiline
              rows={4}
            />
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              size="small"
            />
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium mb-2">Terms & Conditions</h3>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• The Gift Card can only be redeemed at Knox Studio products at the studio or online</li>
              <li>• The Gift Card must be used by one user from the date of purchase</li>
              <li>• The Gift Card is non-refundable</li>
              <li>• If not redeemed in full, the balance can be redeemed on the next purchase</li>
            </ul>
          </div>

          <div className="mt-6 flex justify-end space-x-4">
            <button
              onClick={onClose}
              className="px-8 py-2 rounded-full bg-[#E9E9E9] text-sm bebas"
            >
              REDEEM
            </button>
            <button
              className="px-8 py-2 rounded-full bg-[#C8E76E] text-sm bebas"
            >
              LET'S GIFT!
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default GiftCardModal; 
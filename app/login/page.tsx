/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { IDKitWidget, VerificationLevel, useIDKit } from '@worldcoin/idkit';
import type { ISuccessResult } from '@worldcoin/idkit';


export default function LoginPage() {
  const { setOpen } = useIDKit();

  const handleSuccess = (result: ISuccessResult) => {
    window.alert(
      'Successfully verified! Your nullifier hash is: ' + result.nullifier_hash
    );
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center w-1/2 bg-black text-white">
        <h1 className="text-xl mb-4">Welcome To</h1>
        <h2 className="text-5xl font-extrabold mb-4 text-pink-400 text-[#FFFFFF]">ZeroCheck</h2>
        <p className="text-center text-gray-400 max-w-md">
          Simplifying Events Participation, Enabling Tracking Verification, and
          Rewarding of Attendees
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center w-1/2 bg-gray-50">
        {/* Card Container */}
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
          <h2 className="text-2xl font-semibold text-center mb-6 text-[#1D1D1D]">ZeroCheck</h2>
          <p className="text-gray-600 text-center mb-6 text-[#1D1D1D]">Welcome to ZeroCheck</p>

          {/* World ID Button */}
          <IDKitWidget
            app_id={process.env.NEXT_PUBLIC_WLD_APP_ID as `app_${string}`}
            action="verify"
            onSuccess={handleSuccess}
            verification_level={VerificationLevel.Device}
          >
            {({ open }) => (
              <button
                onClick={open}
                className="bg-black text-white py-2 px-6 rounded-md w-full flex items-center justify-center mb-4 hover:bg-gray-800 transition"
              >
                <div className="flex items-center">
                  Continue with World ID
                  <span className="ml-2"> </span>
                  <img src="/images/wc_logo.png" alt="World ID Logo" className="w-4 h-4 mr-2" />
                </div>
              </button>
            )}
          </IDKitWidget>

          {/* Divider */}
          <div className="text-gray-400 text-center mb-4">OR</div>

          {/* Explore as Guest */}
          <button className="text-black border border-black py-2 px-6 rounded-md w-full hover:bg-black hover:text-white transition">
            Explore as a Guest
          </button>

          {/* Terms and Policy */}
          <p className="text-gray-400 text-xs text-center mt-6">
            By continuing you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}

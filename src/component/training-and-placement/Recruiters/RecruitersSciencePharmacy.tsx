"use client";
import React from "react";

const recruitersPharmacyData: string[] = [
  "/assets/images/training-and-placement/recruiters/science-pharmacy/sos18.png",
  "/assets/images/training-and-placement/recruiters/science-pharmacy/sos1.png",
  "/assets/images/training-and-placement/recruiters/science-pharmacy/sos2.png",
  "/assets/images/training-and-placement/recruiters/science-pharmacy/sos3.png",
  "/assets/images/training-and-placement/recruiters/science-pharmacy/sos4.png",
  "/assets/images/training-and-placement/recruiters/science-pharmacy/sos5.png",
  "/assets/images/training-and-placement/recruiters/science-pharmacy/sos6.png",
  "/assets/images/training-and-placement/recruiters/science-pharmacy/sos7.png",
  "/assets/images/training-and-placement/recruiters/science-pharmacy/sos8.png",
  "/assets/images/training-and-placement/recruiters/science-pharmacy/sos9.png",
  "/assets/images/training-and-placement/recruiters/science-pharmacy/sos10.png",
  "/assets/images/training-and-placement/recruiters/science-pharmacy/sos11.png",
  "/assets/images/training-and-placement/recruiters/science-pharmacy/sos12.png",
  "/assets/images/training-and-placement/recruiters/science-pharmacy/sos13.png",
  "/assets/images/training-and-placement/recruiters/science-pharmacy/sos14.png",
  "/assets/images/training-and-placement/recruiters/science-pharmacy/sos15.png",
  "/assets/images/training-and-placement/recruiters/science-pharmacy/sos16.png",
  "/assets/images/training-and-placement/recruiters/science-pharmacy/sos17.png",
];

const RecruitersSciencePharmacy = () => {
  
  return (
    <section className="w-full py-12 flex justify-center">
      <div className="w-full max-w-7xl px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {recruitersPharmacyData.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center border border-[#f26122] p-4 rounded-md bg-white"
            >
              <img
                src={logo}
                alt={`Company Logo ${index + 1}`}
                className="h-[120px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecruitersSciencePharmacy;

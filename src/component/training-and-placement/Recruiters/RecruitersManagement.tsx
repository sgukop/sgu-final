"use client";
import React from "react";

const recruitersManagementData: string[] = [
  "/assets/images/training-and-placement/recruiters/commerce-management/mba43.png",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba44.png",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba1.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba2.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba3.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba4.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba5.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba6.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba7.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba8.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba9.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba10.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba11.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba12.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba13.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba14.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba15.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba16.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba17.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba18.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba19.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba20.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba22.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba23.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba24.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba25.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba26.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba27.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba29.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba30.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba31.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba32.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba33.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba34.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba35.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba36.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba37.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba38.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba39.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba40.jpg",
  "/assets/images/training-and-placement/recruiters/commerce-management/mba41.jpg",
];

const RecruitersManagement = () => {
  
  return (
    <section className="w-full py-12 flex justify-center">
      <div className="w-full max-w-7xl px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {recruitersManagementData.map((logo, index) => (
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

export default RecruitersManagement;

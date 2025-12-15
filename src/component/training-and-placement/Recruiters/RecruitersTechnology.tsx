"use client";
import React from "react";

const recruiterstechnologyData: string[] = [
  "/assets/images/training-and-placement/recruiters/technology/recruiter1.png",
  "/assets/images/training-and-placement/recruiters/technology/recruiter2.png",
  "/assets/images/training-and-placement/recruiters/technology/recruiter3.png",
  "/assets/images/training-and-placement/recruiters/technology/recruiter4.png",
  "/assets/images/training-and-placement/recruiters/technology/recruiter5.png",
  "/assets/images/training-and-placement/recruiters/technology/engg01.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg02.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg03.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg04.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg05.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg06.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg07.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg08.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg09.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg10.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg11.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg12.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg13.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg16.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg17.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg18.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg19.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg20.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg21.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg22.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg23.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg24.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg25.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg26.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg27.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg28.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg29.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg30.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg31.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg32.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg33.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg34.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg35.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg36.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg37.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg38.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg39.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg40.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg41.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg42.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg43.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg44.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg45.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg46.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg47.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg48.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg49.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg50.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg51.jpg",
  "/assets/images/training-and-placement/recruiters/technology/engg52.jpg",
];

const RecruitersTechnology: React.FC = () => {
  return (
    <section className="w-full py-12 flex justify-center">
      <div className="w-full max-w-7xl px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {recruiterstechnologyData.map((logo, index) => (
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

export default RecruitersTechnology;

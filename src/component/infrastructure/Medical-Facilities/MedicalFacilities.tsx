import RecreationalFacilitiesPage from "@/app/recreational-facilities/page";
import React from "react";

const MedicalFacilities = () => {
 
    const medical = [
    {
        imgSrc: "assets/images/infrastructure/medical-aid/medical-aid1.JPG",
    },
    {
        imgSrc: "assets/images/infrastructure/medical-aid/medical-aid2.JPG",
    },
    {
        imgSrc: "assets/images/infrastructure/medical-aid/medical-aid3.JPG",
    },
    {
        imgSrc: "assets/images/infrastructure/medical-aid/medical-aid4.JPG",
    },
    {
        imgSrc: "assets/images/infrastructure/medical-aid/medical-aid5.JPG",
    },
    {
        imgSrc: "assets/images/infrastructure/medical-aid/medical-aid6.JPG",
    },
    {
        imgSrc: "assets/images/infrastructure/medical-aid/medical-aid7.JPG",
    },
    {
        imgSrc: "assets/images/infrastructure/medical-aid/medical-aid8.JPG",
    },
    {
      imgSrc: "assets/images/infrastructure/medical-aid/medical-aid13.jpg",
    },
    {
        imgSrc: "assets/images/infrastructure/medical-aid/medical-aid9.jpeg",
    },
    {
        imgSrc: "assets/images/infrastructure/medical-aid/medical-aid11.jpeg",
    },
    
  ]
 return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Medical Aid Facilities</h2>
        <div className="row tl-7-classes-row">
            {medical.map((medicalItem, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={medicalItem.imgSrc} alt="Medical Aid Facilities Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div>
    </div>
    </section>
  );
};

export default MedicalFacilities;

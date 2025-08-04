import RecreationalFacilitiesPage from "@/app/recreational-facilities/page";
import React from "react";

const ResidentialFacilities = () => {
 
    const residential = [
    {
        imgSrc: "assets/images/hostel/hostel1.jpg",
    },
    {
        imgSrc: "assets/images/hostel/hostel2.jpg",
    },
    {
        imgSrc: "assets/images/hostel/hostel3.jpg",
    },
    {
        imgSrc: "assets/images/hostel/hostel4.jpg",
    },
    {
        imgSrc: "assets/images/hostel/hostel5.jpg",
    },
]
 return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Residential Facilities</h2>
        <div className="row tl-7-classes-row">
            {residential.map((residentialItem, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={residentialItem.imgSrc} alt="Residential Facilities Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div>
    </div>
    </section>
  );
};

export default ResidentialFacilities;

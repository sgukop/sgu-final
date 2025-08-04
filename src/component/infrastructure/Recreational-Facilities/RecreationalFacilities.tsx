import RecreationalFacilitiesPage from "@/app/recreational-facilities/page";
import React from "react";

const RecreationalFacilities = () => {
 
    const recreational = [
    {
        imgSrc: "assets/images/recreational-facilities/image1.jpg",
    },
    {
        imgSrc: "assets/images/recreational-facilities/image2.jpg",
    },
   
    {
        imgSrc: "assets/images/recreational-facilities/image4.jpg",
    },
    {
        imgSrc: "assets/images/recreational-facilities/image5.jpg",
    },
    {
        imgSrc: "assets/images/recreational-facilities/image6.jpg",
    },
    {
        imgSrc: "assets/images/recreational-facilities/image7.jpg",
    },
   
    {
        imgSrc: "assets/images/recreational-facilities/image9.jpg",
    },
    {
        imgSrc: "assets/images/recreational-facilities/image10.jpg",
    },
    {
      imgSrc: "assets/images/recreational-facilities/image3.jpg",
    },
    {
      imgSrc: "assets/images/recreational-facilities/image8.jpg",
    },
 ]
 return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Recreational Facilities</h2>
        <div className="row tl-7-classes-row">
            {recreational.map((recreationalItem, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={recreationalItem.imgSrc} alt="Recreational Facilities Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div>
    </div>
    </section>
  );
};

export default RecreationalFacilities;

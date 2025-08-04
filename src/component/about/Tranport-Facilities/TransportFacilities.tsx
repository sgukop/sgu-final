import React from "react";

const TransportFacilities = () => {
 
    const transportation = [
    {
        imgSrc: "assets/images/transportation/Bus1.jpg",
    },
    {
        imgSrc: "assets/images/transportation/Bus2.jpg",
    },
    {
        imgSrc: "assets/images/transportation/Bus3.jpg",
    },
 ]
 return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Transportation</h2>
        <div className="row tl-7-classes-row">
            {transportation.map((transportationItem, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={transportationItem.imgSrc} alt="Transportation Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div>
    </div>
    </section>
  );
};

export default TransportFacilities;

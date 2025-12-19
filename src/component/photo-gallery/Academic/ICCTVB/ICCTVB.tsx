import React from "react";

const ICCTVB = () => {
  const Promptutsav = [
    {
        imgSrc: "assets/images/photo-gallery/academics/ICCTVB 2025/1.jpeg",
    },
    
         
    
    
    
    
 ];

return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Promptusav 2025-2026</h2>

        <div className="tl-11-section-heading">
            <h2 className="tl-11-section-title mt-50">ICCTVB  2025-2026</h2>
        </div>
        <div className="row tl-7-classes-row">
       
          {Promptutsav.map((Items, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={Items.imgSrc} alt="Events Photoes" />
                </div>
                
              </div>
            </div>
          ))}
        </div>
    </div>
    </section>
  );
};

export default ICCTVB;

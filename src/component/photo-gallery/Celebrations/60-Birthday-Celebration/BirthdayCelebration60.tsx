import React from "react";

const BirthdayCelebration60 = () => {
  const celebrationsphotoes = [
    {
        imgSrc: "assets/images/photo-gallery/celebrations/60th-birthday-celebration/1.JPEG",
    },
    {
        imgSrc: "assets/images/photo-gallery/celebrations/60th-birthday-celebration/2.JPEG",
    },
    {
        imgSrc: "assets/images/photo-gallery/celebrations/60th-birthday-celebration/3.JPEG",
    },
    
        
    
];

return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Birthday Celebration of Hon. President</h2>
        
        <div className="row tl-7-classes-row">
        <h6 className="tl-8-feature-title">60th Birthday Celebration of Hon. President Mr. Sanjayji Ghodawat in the presence of Mr. Prasad Oak (marathi film actor) on 28th February 2025 at Sanjay Ghodawat University Campus</h6>
          {celebrationsphotoes.map((Items, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={Items.imgSrc} alt="celebrations Photoes" />
                </div>
                
              </div>
            </div>
          ))}
        </div>
    </div>
    </section>
  );
};

export default BirthdayCelebration60;

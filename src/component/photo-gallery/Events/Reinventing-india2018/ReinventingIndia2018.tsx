import React from "react";

const ReinventingIndia2018 = () => {
  const reinventingphotoes = [
    {
        imgSrc: "assets/images/photo-gallery/events/cover-photoes/img-2.jfif",
    },
];

return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Reinventing India Event</h2>
        
        <div className="row tl-7-classes-row">
        <h6 className="tl-8-feature-title">Padma Vibhushan Hon. Raghunath Mashelkar former Director General of CSIR visited SGU Campus on 14th Nov, 2018 and addressed the staff on 'Reinventing India'</h6>
          {reinventingphotoes.map((Items, index) => (
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

export default ReinventingIndia2018;

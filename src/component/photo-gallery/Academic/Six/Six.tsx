import React from "react";

const Convocation = () => {
  const Convocation = [
    {
        imgSrc: "assets/images/photo-gallery/academics/6th Convocation Ceremony/1.jpeg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/6th Convocation Ceremony/2.jpeg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/6th Convocation Ceremony/3.jpeg",
    },
    
 ];

return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">6th Convocation Ceremony</h2>
        
        <div className="row tl-7-classes-row">
        <h6 className="tl-8-feature-title">6th Convocation Ceremony</h6>
          {Convocation.map((Items, index) => (
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

export default Convocation;

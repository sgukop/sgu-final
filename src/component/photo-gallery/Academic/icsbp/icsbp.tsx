import React from "react";

const icsbp = () => {
  const icsbp = [
    {
        imgSrc: "assets/images/photo-gallery/academics/icsbp/1.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/icsbp/2.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/icsbp/3.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/icsbp/4.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/icsbp/5.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/icsbp/6.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/icsbp/7.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/icsbp/8.jpg",
    },

 ];

return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">ICSBP-2026</h2>

        <div className="tl-11-section-heading">
            <h2 className="tl-11-section-title mt-50">ICSBP 2026 MBA</h2>
        </div>
        <div className="row tl-7-classes-row">
       
          {icsbp.map((Items, index) => (
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

export default icsbp;

import React from "react";

const icsshfe = () => {
  const icsshfe = [
    {
        imgSrc: "assets/images/photo-gallery/academics/icsshfe/1.jpeg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/icsshfe/2.jpeg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/icsshfe/3.jpeg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/icsshfe/4.jpeg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/icsshfe/5.jpeg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/icsshfe/6.jpeg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/icsshfe/7.jpeg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/icsshfe/8.jpeg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/icsshfe/9.jpeg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/icsshfe/10.jpeg",
    },

 ];

return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Icsshfe-2026</h2>

        <div className="tl-11-section-heading">
            <h2 className="tl-11-section-title mt-50">Icsshfe 2026 </h2>
        </div>
        <div className="row tl-7-classes-row">
       
          {icsshfe.map((Items, index) => (
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

export default icsshfe;

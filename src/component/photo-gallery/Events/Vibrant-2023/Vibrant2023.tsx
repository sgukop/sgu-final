import React from "react";

const Vibrant2023 = () => {
  const vibrant2023photoes = [
    {
        imgSrc: "assets/images/photo-gallery/events/vibrant-2023/1.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/vibrant-2023/2.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/vibrant-2023/3.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/vibrant-2023/4.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/vibrant-2023/5.jfif",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/vibrant-2023/6.jfif",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/vibrant-2023/7.jfif",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/vibrant-2023/8.jfif",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/vibrant-2023/9.jfif",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/vibrant-2023/10.jfif",
    },
];

return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Vibrant 2023</h2>
        
        <div className="row tl-7-classes-row">
        <h6 className="tl-8-feature-title">National Level Symposium Vibrant 2023 had been organised on 2nd & 3rd March 2023</h6>
          {vibrant2023photoes.map((Items, index) => (
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

export default Vibrant2023;

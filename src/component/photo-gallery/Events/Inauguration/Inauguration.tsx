import React from "react";

const Inauguration = () => {
  const inaugurationphotoes = [
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/1.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/2.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/3.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/4.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/5.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/6.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/7.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/8.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/9.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/10.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/11.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/12.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/13.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/14.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/15.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/16.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/17.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/18.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/19.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/20.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/21.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/22.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/23.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/24.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/25.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/26.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/27.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/events/school-of-architecture-inauguration/28.jpg",
    },
];

return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">School of Architecture Inauguration Program</h2>
        
        <div className="row tl-7-classes-row">
        <h6 className="tl-8-feature-title">Inauguration Program of School of Architecture on 1st August 2018</h6>
          {inaugurationphotoes.map((Items, index) => (
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

export default Inauguration;

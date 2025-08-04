import React from "react";

const IndependenceDay2023 = () => {
  const independenceDay2023 = [
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/independence-day-2023/1.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/independence-day-2023/2.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/independence-day-2023/3.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/independence-day-2023/4.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/independence-day-2023/5.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/independence-day-2023/6.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/independence-day-2023/7.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/independence-day-2023/8.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/independence-day-2023/9.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/independence-day-2023/10.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/independence-day-2023/11.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/independence-day-2023/12.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/independence-day-2023/13.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/independence-day-2023/14.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/independence-day-2023/15.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/independence-day-2023/16.jpg",
    },
]

return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Independence Day 2023</h2>
        
        <div className="row tl-7-classes-row">
        <h6 className="tl-8-feature-title">Celebration of 77th Independence Day at Sanjay Ghodawat University on 15th Aug 2023</h6>
          {independenceDay2023.map((Items, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={Items.imgSrc} alt="Independence Day Photoes" />
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
    </section>
  );
};

export default IndependenceDay2023;

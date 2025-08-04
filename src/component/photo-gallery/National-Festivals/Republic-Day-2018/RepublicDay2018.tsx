import React from "react";

const RepublicDay2018 = () => {
  const republicday = [
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/1.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/2.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/3.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/4.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/5.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/6.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/7.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/8.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/9.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/10.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/11.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/12.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/13.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/14.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/15.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/16.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/17.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/18.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/19.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/20.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/21.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/22.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/23.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/24.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/25.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/26.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2018/27.jpg",
    },
  ]

return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Republic Day Celebration</h2>
        
        <div className="row tl-7-classes-row">
        <h6 className="tl-8-feature-title">Celebration of 69th Republic Day at Sanjay Ghodawat University on 26th January 2018</h6>
          {republicday.map((Items, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={Items.imgSrc} alt="Republic Day Photoes" />
                </div>
                
              </div>
            </div>
          ))}
        </div>
    </div>
    </section>
  );
};

export default RepublicDay2018;

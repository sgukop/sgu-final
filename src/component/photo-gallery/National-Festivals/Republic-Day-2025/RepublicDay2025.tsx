import React from "react";

const RepublicDay2018 = () => {
  const republicday = [
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2025/1.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2025/2.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2025/3.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2025/4.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2025/5.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2025/6.JPEG",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2025/7.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2025/8.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2025/9.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2025/10.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2025/11.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2025/12.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/national-festivals/republic-day-2025/13.jpg",
    },
    
  ]

return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Republic Day Celebration 2025</h2>
        
        <div className="row tl-7-classes-row">
        <h6 className="tl-8-feature-title">Celebration of 76th Republic Day at Sanjay Ghodawat University on 26th January 2025</h6>
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

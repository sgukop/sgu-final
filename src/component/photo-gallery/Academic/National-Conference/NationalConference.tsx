import React from "react";

const NationalConference = () => {
  const nationalconference = [
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/1.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/2.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/3.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/4.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/5.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/6.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/7.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/8.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/9.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/10.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/11.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/12.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/13.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/14.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/15.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/16.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/17.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/18.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/19.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/20.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/21.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/22.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/23.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/24.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/25.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/26.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/27.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/28.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/29.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/30.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/31.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/32.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/33.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/34.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/35.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/36.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/37.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/38.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/39.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/first-national-conference/40.jpg",
    },
 ];

return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">First National Conference</h2>
        
        <div className="row tl-7-classes-row">
        <h6 className="tl-8-feature-title">First National Conference on Space and Atmospheric Science (NCSAS-2019) was organised on 10th and 11th May, 2019 in Collaboration with Indian Institute of Tropical Meteorology (IITM), Pune and Indian Institute of Geomagnetism (IIG), Mumbai</h6>
          {nationalconference.map((Items, index) => (
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

export default NationalConference;

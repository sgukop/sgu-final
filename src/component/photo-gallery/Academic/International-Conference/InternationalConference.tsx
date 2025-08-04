import React from "react";

const InternationalConference = () => {
  const conferencephotoes = [
    {
        imgSrc: "assets/images/photo-gallery/academics/second-international-conference/1.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/second-international-conference/2.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/second-international-conference/3.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/second-international-conference/4.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/second-international-conference/5.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/second-international-conference/6.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/second-international-conference/7.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/second-international-conference/8.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/second-international-conference/9.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/second-international-conference/10.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/second-international-conference/11.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/second-international-conference/12.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/second-international-conference/13.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/second-international-conference/14.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/second-international-conference/15.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/second-international-conference/16.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/second-international-conference/17.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/second-international-conference/18.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/second-international-conference/19.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/second-international-conference/20.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/second-international-conference/21.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/second-international-conference/22.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/second-international-conference/23.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/second-international-conference/24.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/second-international-conference/25.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/second-international-conference/26.jpg",
    },
 ];

return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">2nd International Conference</h2>
        <div className="row tl-7-classes-row">
        <h6 className="tl-8-feature-title">2nd International Conference had been organised on Sustainable Growth Through Universal Practices in Science, Technology & Management on 8th to 10th June 2018 in Goa</h6>
          {conferencephotoes.map((Items, index) => (
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

export default InternationalConference;

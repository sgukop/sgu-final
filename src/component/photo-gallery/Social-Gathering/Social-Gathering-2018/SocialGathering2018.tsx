import React from "react";

const SocialGathering2018 = () => {
  const gatheringphotoes = [
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/1.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/2.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/3.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/4.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/5.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/6.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/7.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/8.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/9.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/10.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/11.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/12.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/13.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/14.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/15.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/16.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/17.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/18.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/19.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/20.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/21.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/22.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/23.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/24.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/25.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/26.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/27.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/28.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/29.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/30.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/31.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/32.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/33.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/34.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/35.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/36.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/37.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/38.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/39.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/40.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/41.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/42.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/43.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/44.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/45.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/46.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/47.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/48.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/49.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2018/50.jpg",
    },
];

return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">UMANG - Annual Social Gathering 2018</h2>
        <div className="row tl-7-classes-row">
        <h6 className="tl-8-feature-title">UMANG - Annual Social Gathering 2018 had been organised on 28th February and 1st March 2018</h6>
          {gatheringphotoes.map((Items, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={Items.imgSrc} alt="Social Gathering 2018 photoes" />
                </div>
                
              </div>
            </div>
          ))}
        </div>
    </div>
    </section>
  );
};

export default SocialGathering2018;

import React from "react";

const SocialGathering2022 = () => {
  const gatheringphotoes = [
    {
        imgSrc: "assets/images/photo-gallery/social-gathering/social-gathering-2022/1.jfif",
    },
];

return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">UMANG - Annual Social Gathering 2022</h2>
        <div className="row tl-7-classes-row">
        <h6 className="tl-8-feature-title">UMANG - Annual Social Gathering 2022 had been organised on 28th February and 1st March 2022</h6>
          {gatheringphotoes.map((Items, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={Items.imgSrc} alt="Social Gathering 2022 photoes" />
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
    </section>
  );
};

export default SocialGathering2022;

import React from "react";

const FDP = () => {
  const fdpphotoes = [
    {
        imgSrc: "assets/images/photo-gallery/academics/FDP/1.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/FDP/2.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/FDP/3.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/FDP/4.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/FDP/5.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/FDP/6.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/FDP/7.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/FDP/8.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/FDP/9.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/FDP/10.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/FDP/11.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/FDP/12.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/FDP/13.jpg",
    },
 ];

return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">FDP on Learner Centric Online Course Development</h2>

        <div className="tl-11-section-heading">
            <h2 className="tl-11-section-title mt-50">FDP on Learner Centric Online Course Development</h2>
        </div>
        <div className="row tl-7-classes-row">
       
          {fdpphotoes.map((Items, index) => (
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

export default FDP;

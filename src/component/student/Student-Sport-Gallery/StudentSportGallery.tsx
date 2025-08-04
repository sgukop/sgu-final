import React from "react";

const StudentSportGallery = () => {
  
 const sports = [
    {
        imgSrc: "assets/images/sports/sport1.jpg",
    },
    {
        imgSrc: "assets/images/sports/sport2.jpg",
    },
    {
        imgSrc: "assets/images/sports/sport3.jpg",
    },
    {
        imgSrc: "assets/images/sports/sport4.jpg",
    },
    {
        imgSrc: "assets/images/sports/sport5.jpg",
    },
    {
        imgSrc: "assets/images/sports/sport6.jpg",
    },
    {
        imgSrc: "assets/images/sports/sport7.jpg",
    },
    {
        imgSrc: "assets/images/sports/sport8.jpg",
    },
    {
      imgSrc: "assets/images/sports/sport9.jpg",
  },
  {
      imgSrc: "assets/images/sports/sport10.jpg",
  },
  {
      imgSrc: "assets/images/sports/sport11.jpg",
  },
  {
    imgSrc: "assets/images/sports/sport12.jpg",
  },
 ]

return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Sports Gallery</h2>
        <div className="row tl-7-classes-row">
            {sports.map((sportsItem, index) => (
            <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
              <div className="tl-7-class">
                <div className="tl-7-class-img">
                  <img src={sportsItem.imgSrc} alt="Sports Images" />
                </div>
                
              </div>
            </div>
          ))}
        </div>
    </div>
    </section>
  );
};

export default StudentSportGallery;

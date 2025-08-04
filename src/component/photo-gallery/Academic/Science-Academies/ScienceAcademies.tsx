import React from "react";

const ScienceAcademies = () => {
  const academiesphotoes = [
    {
        imgSrc: "assets/images/photo-gallery/academics/science-academies/1.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/science-academies/2.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/science-academies/3.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/science-academies/4.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/science-academies/5.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/science-academies/6.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/science-academies/7.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/science-academies/8.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/science-academies/9.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/science-academies/10.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/science-academies/11.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/science-academies/13.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/science-academies/14.jpg",
    },
 ];

return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Science Academies' Lecture Workshop 2018</h2>
        <p className="tl-8-feature-descr">Science Academies' Lecture Workshop on Recent Advances in Catalysis Sciences had been organised on 23rd & 24th February 2018. Resource Personnels were Dr. C.S. Gopinath, FASc (Sr. Principal Scientist, National Chemical Laboratory, Pune), Dr. C.V. Ramana, FASc (Division of Organic Chemistry, National Chemical Laboratory, Pune), Prof. (Dr.) Pramod Patil, (Professor & Head, School of Nanoscience & Nanotechnology, Shivaji University, Kolhapur), Dr. S. Sivasanker, FASc (Retired Head, Catalysis Division, NCL-Pune. Chair Professor , National centre for Catalysis Research, IIT , Madras)</p>
        <a href="#" target="_blank" className="tl-def-btn-2 mb-4 mt-4" >Workshop Brochure <i className="fa-regular fa-arrow-right"></i></a>
        <div className="row tl-7-classes-row">
        
          {academiesphotoes.map((Items, index) => (
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

export default ScienceAcademies;

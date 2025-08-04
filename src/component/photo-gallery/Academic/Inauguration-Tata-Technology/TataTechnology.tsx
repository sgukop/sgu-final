import React from "react";

const TataTechnology = () => {
  const tatatechnology = [
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/1.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/2.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/3.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/4.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/5.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/6.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/7.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/8.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/9.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/10.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/11.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/12.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/13.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/14.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/15.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/16.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/17.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/18.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/19.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/20.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/21.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/22.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/23.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/24.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/25.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/26.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/27.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/inauguration-tata-technology/28.jpg",
    },
];

return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Inauguration of Technology Competency Center</h2>
        
        <div className="row tl-7-classes-row">
        <h6 className="tl-8-feature-title">Inauguration of Technology Competency Center with TATA Technology on 19th December 2017 at the hands of Chief Guest Hon. Shreekanthji Moorthy, Global Vice President & LOB Head - PLM, TATA Technologies Ltd., Pune. In the presence of the President of the Function Hon. Sanjayji Ghodawat, President, SGU</h6>
          {tatatechnology.map((Items, index) => (
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

export default TataTechnology;

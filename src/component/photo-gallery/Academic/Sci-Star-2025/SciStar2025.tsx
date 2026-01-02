import React from "react";

const SciStar2025 = () => {
  const scistar2025 = [
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/1.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/2.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/3.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/4.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/5.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/6.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/7.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/8.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/9.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/10.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/11.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/12.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/13.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/14.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/15.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/16.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/17.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/18.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/19.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/20.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/21.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/22.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/23.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/24.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/25.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/26.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/27.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/28.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/29.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/30.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/31.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/32.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/33.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/34.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/35.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/36.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/37.jpg",
    },
    
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/39.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2025/40.jpg",
    },

    
 ];

return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Sci-STAR 2025 (A State Level Science Competition)</h2>
        <div className="row tl-7-classes-row">
            {scistar2025.map((Items, index) => (
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

export default SciStar2025;

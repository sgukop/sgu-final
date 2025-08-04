import React from "react";

const SciStar2018 = () => {
  const scistar2018 = [
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/1.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/2.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/3.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/4.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/5.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/6.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/7.jpeg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/8.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/9.jpeg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/10.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/11.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/13.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/14.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/15.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/16.jpeg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/17.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/18.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/19.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/20.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/21.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/22.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/23.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/24.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/25.jpeg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/26.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/27.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/28.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/29.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/30.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/31.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/32.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/33.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/34.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/35.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/36.jpg",
    },
    {
        imgSrc: "assets/images/photo-gallery/academics/sci-star-2018/37.jpeg",
    },
 ];

return (
    <section className="tl-4-innovs pt-100 pb-100">
      <div className="container">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Sci-STAR 2018 (A State Level Science Competition)</h2>
        <div className="row tl-7-classes-row">
            {scistar2018.map((Items, index) => (
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

export default SciStar2018;

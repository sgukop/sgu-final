import React from "react";
import NavLinks from "../Reusable-components/Navlinks";
import MenuList from "../Reusable-components/MenuList";

const LibraryGallery = () => {
  const libraryGallery = [
    {
      imgSrc: "assets/images/sgu-library/photo-gallery/library1.jpg",
    },
    {
      imgSrc: "assets/images/sgu-library/photo-gallery/library2.jpg",
    },
    {
      imgSrc: "assets/images/sgu-library/photo-gallery/library3.jpg",
    },
    {
      imgSrc: "assets/images/sgu-library/photo-gallery/library4.jpg",
    },
    {
      imgSrc: "assets/images/sgu-library/photo-gallery/library5.jpg",
    },
    {
      imgSrc: "assets/images/sgu-library/photo-gallery/library6.jpg",
    },
    {
      imgSrc: "assets/images/sgu-library/photo-gallery/library7.jpg",
    },
    {
      imgSrc: "assets/images/sgu-library/photo-gallery/library8.jpg",
    },
    {
      imgSrc: "assets/images/sgu-library/photo-gallery/library9.jpg",
    },
    {
      imgSrc: "assets/images/sgu-library/photo-gallery/library10.jpg",
    },
    {
      imgSrc: "assets/images/sgu-library/photo-gallery/library11.jpg",
    },
    {
      imgSrc: "assets/images/sgu-library/photo-gallery/library12.jpg",
    },
    {
      imgSrc: "assets/images/sgu-library/photo-gallery/library13.jpg",
    },
    {
      imgSrc: "assets/images/sgu-library/photo-gallery/library14.jpg",
    },
    {
      imgSrc: "assets/images/sgu-library/photo-gallery/library15.jpg",
    },
    {
      imgSrc: "assets/images/sgu-library/photo-gallery/library16.jpg",
    },
    {
      imgSrc: "assets/images/sgu-library/photo-gallery/library17.jpg",
    },
    {
      imgSrc: "assets/images/sgu-library/photo-gallery/library18.jpg",
    },
    {
      imgSrc: "assets/images/sgu-library/photo-gallery/library19.jpg",
    },
    {
      imgSrc: "assets/images/sgu-library/photo-gallery/library20.jpg",
    },
    {
      imgSrc: "assets/images/sgu-library/photo-gallery/library21.jpg",
    },
    /* {
      imgSrc: "assets/images/sgu-library/photo-gallery/library22.jpg",
    },
    {
      imgSrc: "assets/images/sgu-library/photo-gallery/library23.jpg",
    },
    {
      imgSrc: "assets/images/sgu-library/photo-gallery/library24.jpg",
    },
    {
      imgSrc: "assets/images/sgu-library/photo-gallery/library25.jpg",
    },  */
  ];

  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Photo Gallery</h2>

        <div className="row">
          <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row">
              <div className="row tl-7-classes-row">
                {libraryGallery.map((labItem, index) => (
                  <div className="col-lg-4 col-sm-6 rounded-[20px]" key={index}>
                    <div className="tl-7-class">
                      <div className="tl-7-class-img">
                        <img src={labItem.imgSrc} alt="Laboratories Images" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryGallery;

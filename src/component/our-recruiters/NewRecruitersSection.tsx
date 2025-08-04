"use client";

import React, { useState, useEffect } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const logos: string[] = [
   "/assets/images/recruiters/company6.png",
  "/assets/images/recruiters/company2.png",
  "/assets/images/recruiters/company4.png",
  "/assets/images/recruiters/company5.png",
  "/assets/images/recruiters/company3.png",
  "/assets/images/recruiters/company1.png",
  "/assets/images/recruiters/engg02.jpg",
  "/assets/images/recruiters/engg03.jpg",
  "/assets/images/recruiters/engg04.jpg",
  "/assets/images/recruiters/engg06.jpg",
  "/assets/images/recruiters/engg07.jpg",
  "/assets/images/recruiters/engg09.jpg",
  "/assets/images/recruiters/engg10.jpg",
  "/assets/images/recruiters/engg11.jpg",
  "/assets/images/recruiters/engg12.jpg",
  "/assets/images/recruiters/engg16.jpg",
  "/assets/images/recruiters/engg17.jpg",
  "/assets/images/recruiters/engg18.jpg",
  "/assets/images/recruiters/engg21.jpg",
  "/assets/images/recruiters/engg36.jpg",
  "/assets/images/recruiters/engg37.jpg",
  "/assets/images/recruiters/engg38.jpg",
  "/assets/images/recruiters/mba04.jpg",
  "/assets/images/recruiters/mba05.jpg",
  "/assets/images/recruiters/mba07.jpg",
  "/assets/images/recruiters/mba10.jpg",
  "/assets/images/recruiters/mba11.jpg",
  "/assets/images/recruiters/mba15.jpg",
  "/assets/images/recruiters/mba16.jpg",
  "/assets/images/recruiters/mba18.jpg",
];

const chunkArray = <T,>(array: T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const NewRecruitersSection: React.FC = () => {
  // const [slidesPerPage, setSlidesPerPage] = useState(1);
  const [testimonialChunks, setTestimonialChunks] = useState<any>([]);

  const updateSlidesPerPage = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1699) {
      // setSlidesPerPage(3);
      setTestimonialChunks(chunkArray(logos, 6));
    } else if (screenWidth >= 1400) {
      // setSlidesPerPage(2);
      setTestimonialChunks(chunkArray(logos, 4));
    } else {
      // setSlidesPerPage(1);
      setTestimonialChunks(chunkArray(logos, 2));
    }
  };

  useEffect(() => {
    updateSlidesPerPage();
    window.addEventListener("resize", updateSlidesPerPage);
    return () => window.removeEventListener("resize", updateSlidesPerPage);
  }, []);

  return (
    <section className="w-full flex flex-col justify-center items-center pt-16">
      {/* Carousel */}
      <div className="relative w-full md:w-[90%] pb-16">
        <Carousel
          showArrows={true}
          showThumbs={false}
          autoPlay={true}
          emulateTouch={true}
          className="rounded-xl"
          renderArrowPrev={(onClickHandler, _, label) =>
          (
            <button
              className="!absolute top-[62%] !left-4 -translate-y-2/4 cursor-pointer arrow-responsive"
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                position: "absolute",
                zIndex: 2,
                left: 15,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <div className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] rounded-full bg-[#ffd300] flex justify-center items-center sm:ml-6">
                <div className="w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] rounded-full bg-[#455883] flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40px"
                    viewBox="0 -960 960 960"
                    width="40px"
                    fill="#fff"
                  >
                    <path d="M640-198 200-478l440-280v560Z" />
                  </svg>
                </div>
              </div>
            </button>
          )
          }
          renderArrowNext={(onClickHandler, _, label) => (
              <button
                className="!absolute top-2/4 !right-4 -translate-y-2/4 cursor-pointer arrow-responsive"
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position: "absolute",
                  zIndex: 2,
                  right: 15,
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <div className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] rounded-full bg-[#ffd300] flex justify-center items-center sm:mr-6">
                  <div className="w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] rounded-full bg-[#455883] flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="40px"
                      viewBox="0 -960 960 960"
                      width="40px"
                      fill="#ffff"
                    >
                      <path d="M320-202v-560l440 280-440 280Z" />
                    </svg>
                  </div>
                </div>
              </button>
            )
          }
        >
          {testimonialChunks.map((chunk: any[], index: React.Key | null | undefined) => (
            <div className="flex justify-around gap-4 sm:px-48" key={index}>
              {chunk.map((logo, logoIndex) => (
                <img
                  key={logoIndex}
                  src={logo}
                  alt={`Company Logo ${logoIndex + 1}`}
                  className="min-w-[200px] h-[150px] object-cover"
                />
              ))}
            </div>
          ))}
        </Carousel>
      </div>

      <div className="w-full h-[50px] bg-[#ffd300]"></div>
    </section>
  );
};

export default NewRecruitersSection;

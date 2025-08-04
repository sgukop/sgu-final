"use client";

import React, { useState, useEffect } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const testimonials = [
  {
    image: "/assets/images/home/event-3.png",
    message:
      "I had an amazing time at SGU University. The diverse community and engaging courses helped me develop both academically and personally. I had a great time. Highly recommended!",
    name: "Abhishek Patil",
    course: "B,A - Economics, 2017-2022",
    bgColor: "#2e3867",
  },
  {
    image: "/assets/images/home/testimonials/testimonial4.png",
    message:
      "The curriculum was exceptional, and the faculty truly cared about our success. The experiences I gained will stay with me forever.",
    name: "Rohan Gupta",
    course: "M.B.A - Marketing, 2018-2023",
    bgColor: "#4f70b6",
  },
  {
    image: "/assets/images/home/testimonial.png",
    message:
      "SGU University offered me countless opportunities to grow professionally and personally. I couldn't have asked for a better experience.",
    name: "Neha Sharma",
    course: "B.Sc - Computer Science, 2019-2024",
    bgColor: "#3e4a8e",
  },
  {
    image: "/assets/images/home/testimonials/testimonial2.png",
    message:
      "It was my immense luck and fortune to be a part of SGU University where I can grow. The entire faculty & department leaves no stone unturned to shape one's future in my four years.",
    name: "Rohan Gupta",
    course: "B.Sc - Computer Science, 2019-2024",
    bgColor: "#3e4a8e",
  },
  {
    image: "/assets/images/home/testimonials/testimonial5.png",
    message:
      "SGU University provided me with a nurturing environment to pursue my passion for technology. The support from professors and the cutting-edge facilities made my journey unforgettable.",
    name: "Neha Sharma",
    course: "B.Sc - Computer Science, 2019-2024",
    bgColor: "#3e4a8e",
  },
];

const NewTestimonialSlider: React.FC = () => {
  // const [slidesPerPage, setSlidesPerPage] = useState(1);
  const [testimonialChunks, setTestimonialChunks] = useState<any>([]);

  const updateSlidesPerPage = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1699) {
      // setSlidesPerPage(3);
      setTestimonialChunks(chunkArray(testimonials, 2));
    } else if (screenWidth >= 1400) {
      // setSlidesPerPage(2);
      setTestimonialChunks(chunkArray(testimonials, 2));
    } else {
      // setSlidesPerPage(1);
      setTestimonialChunks(chunkArray(testimonials, 1));
    }
  };

  useEffect(() => {
    updateSlidesPerPage();
    window.addEventListener("resize", updateSlidesPerPage);
    return () => window.removeEventListener("resize", updateSlidesPerPage);
  }, []);

  return (
    <section className="absolute top-10 left-auto w-full flex wrapping-recruiters gap-y-20 justify-center gap-x-4 rounded-2xl p-8 pt-10 overflow-y-hidden">
      {/* Testimonials Carousel */}
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
                top: "58%",
                transform: "translateY(-50%)",
              }}
            >
              <div className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] rounded-full bg-white flex justify-center items-center sm:ml-6">
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
          renderArrowNext={(onClickHandler, _, label) =>
          (
            <button
              className="!absolute top-2/4 !right-4 -translate-y-2/4 cursor-pointer arrow-responsive"
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{
                position: "absolute",
                zIndex: 2,
                right: 15,
                top: "58%",
                transform: "translateY(-50%)",
              }}
            >
              <div className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] rounded-full bg-white flex justify-center items-center sm:mr-6">
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
            <div className="flex justify-center gap-4 sm:px-48 overflow-y-hidden overflow-x-hidden pt-4" key={index}>
              <div className="flex justify-center gap-4 bg-white p-3 rounded-xl">
                {chunk.map((testimonial, i) => (
                  <div
                    key={i}
                    className={`max-w-[500px] sm:w-[520px] sm:h-[480px] bg-[#2e3867] text-white rounded-2xl`}
                    style={{ backgroundColor: testimonial.bgColor }}
                  >
                    <div className="w-[180px] h-[180px] rounded-full border-8 border-[#e6e7e8] -mt-8 mx-auto">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name} photo`}
                        className="rounded-full z-30"
                      />
                    </div>
                    <p className="text-white text-xl my-4 w-full px-8 text-justify">
                      {testimonial.message}
                    </p>
                    <div className="text-white flex flex-col gap-y-1 py-3 px-8">
                      <h4 className="text-2xl font-semibold text-left">{testimonial.name}</h4>
                      <span className="text-2xl text-left">{testimonial.course}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>

    </section>
  );
};

export default NewTestimonialSlider;

// Helper function for chunking
const chunkArray = <T,>(array: T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

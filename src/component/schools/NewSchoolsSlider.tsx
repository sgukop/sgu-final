"use client";

import React, { useState, useEffect } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { NavLink } from "react-bootstrap";

const schools = [
    {
        programs: "UG",
        department: "School of  Design",
        slug: "/design-dept-about",
        bgColor: "#f26122",
    },
    {
        programs: "UG, PG, Ph.D.",
        department: "School of Commerce",
        slug: "/commerce-dept-about",
        bgColor: "#ed1e81",
    },
    {
        programs: "UG, PG, Ph.D.",
        department: "School of Management",
        slug: "/management-dept-about",
        bgColor: "#47bfaf",
    },
    {
        programs: "UG, PG, Ph.D.",
        department: "Department of Physics",
        slug: "/physical-dept-about",
        bgColor: "#4f70b6",
    },
    {
        programs: "UG, PG, Ph.D.",
        department: "Department of Chemistry",
        slug: "/chemical-dept-about",
        bgColor: "#f26122",
    },
    {
        programs: "UG, PG, Ph.D.",
        department: "Department of Mathematics",
        slug: "/mathematics-dept-about",
        bgColor: "#ed1e81",
    },
    {
        programs: "UG",
        department: "Pharmaceutical Sciences",
        slug: "/pharmacy-dept-about",
        bgColor: "#47bfaf",
    },
    {
        programs: "UG, PG",
        department: "Bachelor of computer Applications",
        slug: "/BCA-dept-about",
        bgColor: "#4f70b6",
    },
    {
        programs: "UG, PG",
        department: "Master of computer Applications",
        slug: "/MCA-dept-about",
        bgColor: "#f26122",
    },
    {
        programs: "UG",
        department: "Department of Legal Studies (Law)",
        slug: "/law-dept-about",
        bgColor: "#ed1e81",
    },
    {
        programs: "UG",
        department: "B.Sc(Food Science & Technology)",
        slug: "/FST-dept-about",
        bgColor: "#47bfaf",
    },
    {
        programs: "UG",
        department: "B.M.L.T(Food Science & Technology)",
        slug: "/MLT-dept-about",
        bgColor: "#4f70b6",
    },
    {
        programs: "UG",
        department: "Biotechnology",
        slug: "/biotech-dept-about",
        bgColor: "#f26122",
    },
    {
        programs: "UG",
        department: "Department of English",
        slug: "/english-dept-about",
        bgColor: "#ed1e81",
    },
    {
        programs: "UG",
        department: "Department of Geography",
        slug: "/geography-dept-about",
        bgColor: "#47bfaf",
    },
        {
        programs: "UG, PG, Ph.D",
        department: "Aerospace Engineering",
        slug: "/aerospace-engineering-about",
        bgColor: "#f26122",
    },
    
    {
        programs: "UG, PG, Ph.D",
        department: "Civil Engineering",
        slug: "/civil-dept-about",
        bgColor: "#47bfaf",
    },
    
    {
        programs: "UG, PG, Ph.D",
        department: "Electronics and Communication Engineering",
        slug: "/electronics-dept-about",
        bgColor: "#f26122",
    },
    {
        programs: "UG, PG, Ph.D",
        department: "Computer Science & Engineering",
        slug: "/computer-science-dept-about",
        bgColor: "#ed1e81",
    },
    {
        programs: "UG, PG, Ph.D",
        department: "Artificial Intelligence and Machine Learning(AI&ML)",
        slug: "/AI-ML-dept-about",
        bgColor: "#47bfaf",
    },
    {
        programs: "UG, PG",
        department: "Artificial Intelligence & Data Science Department(AI&DS)",
        slug: "/AI-DS-dept-about",
        bgColor: "#47bfaf",
    },

];

const chunkArray = <T,>(array: T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const NewSchoolsSlider: React.FC = () => {
  // const [slidesPerPage, setSlidesPerPage] = useState(1);
  const [testimonialChunks, setTestimonialChunks] = useState<any>([]);

  const updateSlidesPerPage = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1699) {
      // setSlidesPerPage(3);
      setTestimonialChunks(chunkArray(schools, 4));
    } else if (screenWidth >= 1400) {
      // setSlidesPerPage(2);
      setTestimonialChunks(chunkArray(schools, 3));
    } else {
      // setSlidesPerPage(1);
      setTestimonialChunks(chunkArray(schools, 1));
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
      <div className="relative w-full md:w-[100%]">
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
           <div className='w-full flex flex-wrap justify-center items-center gap-4 mt-10 2xl:h-full md:h-full' key={index}>
              {chunk.map((schoolItems, schoolIndex) => (
                <div className='w-[360px] h-full py-14 px-[1px] text-white rounded-tr-[200px]' key={schoolIndex}  style={{ backgroundColor: schoolItems.bgColor }}>
                <h2 className='text-4xl font-extrabold pt-4 mb-3 tracking-wide px-6 text-white'>
                    {schoolItems.programs}
                </h2>
                <p className='text-2xl font-medium tracking-wide px-6'>
                    {schoolItems.department}
                </p>
                <NavLink
                    href={schoolItems.slug}
                    target="_self"
                    className='py-3 mt-4 pl-3 bg-white text-[#f26122] text-3xl font-bold rounded-r-[100px] w-[90%]'
                >
                   <span className='text-3xl' style={{color:'#f26122'}}>Read More &gt;&gt;</span>
                </NavLink>
            </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default NewSchoolsSlider;

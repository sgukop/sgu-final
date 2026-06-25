"use client";
import { courseList, blogList } from "@/data/Data";
import Link from "next/link";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CourseSlider = () => {
  return (
    <>
     <section className="tl-1-courses pb-80 pt-130">
      <div className="container">
      <div className="tl-1-section-heading">
        <h2 className="tl-2-section-title">Latest news / Events / Announcements / Blong</h2>
        <div 
        className="tl-2-blogs-slider-nav" 
        id="tl-1-courses-slider-nav"
        >
          <button className="owl-prev courses-slider-prev">
            <i className="fa-light fa-arrow-left"></i>
          </button>
          <button className="owl-next  courses-slider-next">
            <i className="fa-light fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <Swiper
      className="tl-1-courses-slider owl-carousel"
      slidesPerView={3}
      spaceBetween={30}
      loop={true}
      navigation={{
        nextEl: '.courses-slider-next',
        prevEl: '.courses-slider-prev'
      }}
      modules={[Navigation]}
      breakpoints={{
        0: {
          spaceBetween: 10,
          slidesPerView: 1
        },
        480: {
          slidesPerView: 1.5,
          spaceBetween: 15
        },
        576: {
          spaceBetween: 15,
          slidesPerView: 2
        },
        768: {
          spaceBetween: 20,
          slidesPerView: 2
        },
        992: {
          spaceBetween: 20,
          slidesPerView: 2
        },
        1200: {
          spaceBetween: 30,
          slidesPerView: 3
        }
      }}
    >
        {blogList.slice(0,10).map((item) => (
          <SwiperSlide className="tl-1-course" key={item.id}>
            <div className="tl-1-course-img">
              <img src={item.imgSrc} alt="Course Image" />
              <span className="tl-1-course-price">{item.category}</span>
            </div>

            <div className="tl-1-course-txt">
            <h3 className="tl-1-course-author">
               {item.slug ? (
                                    <Link href={`/${item.slug}`} legacyBehavior>
                                    <a target="_blank" rel="noopener noreferrer">{item.title}</a>
                                  </Link>
                                ) : (
                                    item.title
                                )}
              </h3>   
            {/*  <h3 className="tl-1-course-author"> 
                                    <a target="_blank" href={item.pdf} rel="noopener noreferrer">{item.title}</a>
                                  </h3>   */}
              <h4 className="tl-1-course-title pb-10">
              {item.desc.slice(0, 80)}...
              </h4>
              <div className="tl-1-course-stats">
                <div className="tl-1-course-stat">
                  <span className="tl-1-course-stat-icon">
                    <i className="fa-regular fa-clock"></i>
                  </span>
                  <span className="tl-1-course-stat-txt">
                    {item.date}
                  </span>
                </div>

                {/* <div className="tl-1-course-stat">
                  <span className="tl-1-course-stat-icon">
                    <i className="fa-regular fa-user-group"></i>
                  </span>
                  <span className="tl-1-course-stat-txt">
                    {item.students} Students
                  </span>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
     </section>
    </>
  );
};

export default CourseSlider;

// components/FacultySlider.tsx
'use client';
import { teacherList } from '@/data/Data';
import Link from 'next/link';
import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const FacultySlider22 = () => {
  return (
    <section className="tl-5-faculties">
      <div className="container">
        <div className="tl-7-section-heading">
         {/*  <h2 className="tl-6-section-title">Management</h2>  */}
          <h2 className="tl-2-section-title">Management</h2>
        </div>

        <Swiper 
          slidesPerView={4}
          spaceBetween={30}
          autoplay={true}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="tl-5-faculties-slider owl-carousel"
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >   
          {teacherList.slice(0, 4).map((item) => (
            <SwiperSlide className="col-md-4 col-6 col-xxs-12" key={item.id}>
              <div className="tl-3-single-staff tl-8-single-expert">
                <div className="tl-3-single-staff-img tl-8-single-expert-img">
                  <img src={item.imgSrc} height={350} alt="Staff Image"/>
    
                </div>

                <ul className="tl-3-single-staff-socials" >
                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                  </ul>
                <div className="tl-3-single-staff-txt tl-8-single-expert-txt">
                  <h5 className="tl-8-single-expert-name">
                    <Link href={item.pdf} target="_blank">{item.name}</Link>
                  </h5>
                  <span className="tl-8-single-expert-role">{item.position}</span>
                </div>
              </div>
            </SwiperSlide>  
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default FacultySlider22;

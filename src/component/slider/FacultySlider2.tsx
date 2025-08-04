'use client'
import { teacherList } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/swiper-bundle.css';

const FacultySlider2 = () => {
  return (
    <section className="tl-7-faculty tl-7-section-spacing" style={{paddingTop:'120px'}}>
      <div className="container">
        <div className="tl-7-section-heading">
          <h2 className="tl-6-section-title">Management</h2>
          {/* <h2 className="tl-7-section-title">Meet The <span className="last-word">Faculty</span></h2> */}
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
            bulletClass: 'owl-dot',
            bulletActiveClass: 'active',
            bulletElement: 'button',
          }}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="tl-3-staff-row tl-7-faculty-row owl-carousel"
        >
          {teacherList.slice(0, 4).map((item) => (
            <SwiperSlide className="tl-3-single-staff tl-8-single-expert" key={item.id}>
              <div className="tl-3-single-staff-img tl-8-single-expert-img">
                <img src={item.imgSrc} alt="Staff Image" />
                <ul className="tl-3-single-staff-socials">
                  <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
              </div>

              <div className="tl-3-single-staff-txt tl-8-single-expert-txt">
                <h5 className="tl-8-single-expert-name"><Link href={`/staff/${item.slug}`}>{item.name}</Link></h5>
                <span className="tl-8-single-expert-role">{item.position}</span>
              </div>
            </SwiperSlide>
          ))}

          <div className='owl-dots'></div>
        </Swiper>
      </div>
    </section>
  )
}

export default FacultySlider2

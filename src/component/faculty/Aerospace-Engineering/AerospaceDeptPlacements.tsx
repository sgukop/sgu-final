'use client'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const AerospaceDeptPlacements = () => {
  return (
    <section className="tl-8-testimonial pt-100 pb-100">
        <div className="container-fluid">
        <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">Placements</h2>
        <div className="row">
            <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="tl-8-experts-heading justify-content-center">
          
               
                <a href="https://manage-api.sguk.ac.in/api/assets/6750269e4b17e19d8f361abe" target="_blank" className="tl-def-btn-2">Read More <i className="fa-regular fa-arrow-right"></i></a>
            </div>

            <div className="row justify-content-center position-relative">
                <div className="col-lg-10 col-md-12">
                    <Swiper 
                    autoplay={true}
                    loop={true}
                    navigation={{
                        nextEl: '.owl-next',
                        prevEl: '.owl-prev'
                    }}
                    modules={[Autoplay,Navigation]}
                    className="tl-8-testimonial-slider owl-carousel">
                         <SwiperSlide className="placement-image">
                            <h3>2021-2025</h3>
                                <img src="assets/images/aerospace-engineering-dept/placements/2021-2025 Placement.jpg" alt="Placement image"/>
                        </SwiperSlide>
                        <SwiperSlide className="placement-image">
                                <img src="assets/images/aerospace-engineering-dept/placements/placement1.jpg" alt="Placement image"/>
                        </SwiperSlide>

                        <SwiperSlide className="placement-image">
                        <img src="assets/images/aerospace-engineering-dept/placements/placement2.jpg" alt="Placement image"/>
                        </SwiperSlide>

                        <SwiperSlide className="placement-image">
                        <img src="assets/images/aerospace-engineering-dept/placements/placement3.jpg" alt="Placement image"/>
                        </SwiperSlide>

                        <SwiperSlide className="placement-image">
                        <img src="assets/images/aerospace-engineering-dept/placements/placement4.jpg" alt="Placement image"/>
                        </SwiperSlide>

                        <SwiperSlide className="placement-image">
                        <img src="assets/images/aerospace-engineering-dept/placements/placement5.jpg" alt="Placement image"/>
                        </SwiperSlide>

                        <SwiperSlide className="placement-image">
                        <img src="assets/images/aerospace-engineering-dept/placements/placement6.jpg" alt="Placement image"/>
                        </SwiperSlide>

                        <SwiperSlide className="placement-image">
                        <img src="assets/images/aerospace-engineering-dept/placements/placement7.jpg" alt="Placement image"/>
                        </SwiperSlide>

                        <SwiperSlide className="placement-image">
                        <img src="assets/images/aerospace-engineering-dept/placements/placement8.jpg" alt="Placement image"/>
                        </SwiperSlide>

                        <SwiperSlide className="placement-image">
                        <img src="assets/images/aerospace-engineering-dept/placements/placement9.jpg" alt="Placement image"/>
                        </SwiperSlide>

                        <SwiperSlide className="placement-image">
                        <img src="assets/images/aerospace-engineering-dept/placements/placement10.jpg" alt="Placement image"/>
                        </SwiperSlide>

                        <SwiperSlide className="placement-image">
                        <img src="assets/images/aerospace-engineering-dept/placements/placement11.jpg" alt="Placement image"/>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="tl-8-testimonial-slider-nav">
                    <button type="button" role="presentation" className="owl-prev">
                        <i className="fa-regular fa-arrow-left"></i>
                    </button>
                    <button type="button" role="presentation" className="owl-next"> 
                        <i className="fa-regular fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default AerospaceDeptPlacements
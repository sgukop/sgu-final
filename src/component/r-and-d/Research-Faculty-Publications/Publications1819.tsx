'use client'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Publications1819 = () => {
  return (
    <section className="tl-8-testimonial pt-50 pb-50">
        <div className="container">
            <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Faculty Publications for 2018-19</h2></div>

            <div className="row justify-content-center position-relative">
                <div className="col-lg-10 col-md-12">
                    <Swiper 
                    autoplay={true}
                    loop={true}
                    navigation={{
                        nextEl: '.owl-next2',
                        prevEl: '.owl-prev2'
                    }}
                    modules={[Autoplay,Navigation]}
                    className="tl-8-testimonial-slider owl-carousel">
                        <SwiperSlide className="placement-image">
                                <img src="assets/images/r&d/faculty-publications/2018-19/18-19 page1.png" alt="Faculty Publications for 2018-19"/>
                        </SwiperSlide>

                        <SwiperSlide className="placement-image">
                        <img src="assets/images/r&d/faculty-publications/2018-19/18-19 page2.png" alt="Faculty Publications for 2018-19"/>
                        </SwiperSlide>

                        <SwiperSlide className="placement-image">
                        <img src="assets/images/r&d/faculty-publications/2018-19/18-19 page3.png" alt="Faculty Publications for 2018-19"/>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="tl-8-testimonial-slider-nav">
                    <button type="button" role="presentation" className="owl-prev2">
                        <i className="fa-regular fa-arrow-left"></i>
                    </button>
                    <button type="button" role="presentation" className="owl-next2"> 
                        <i className="fa-regular fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Publications1819
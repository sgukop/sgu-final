'use client'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Publications1719 = () => {
  return (
    <section className="tl-8-testimonial pt-50 pb-50">
        <div className="container">
            <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Faculty Publications for 2017-19</h2></div>

            <div className="row justify-content-center position-relative">
                <div className="col-lg-10 col-md-12">
                    <Swiper 
                    autoplay={true}
                    loop={true}
                    navigation={{
                        nextEl: '.owl-next1',
                        prevEl: '.owl-prev1'
                    }}
                    modules={[Autoplay,Navigation]}
                    className="tl-8-testimonial-slider owl-carousel">
                        <SwiperSlide className="placement-image">
                                <img src="assets/images/r&d/faculty-publications/2017-19/17-19 PAGE1.jpg" alt="Faculty Publication for 2017-19"/>
                        </SwiperSlide>

                        <SwiperSlide className="placement-image">
                                <img src="assets/images/r&d/faculty-publications/2017-19/17-19 PAGE2.jpg" alt="Faculty Publication for 2017-19"/>
                        </SwiperSlide>

                        <SwiperSlide className="placement-image">
                                <img src="assets/images/r&d/faculty-publications/2017-19/17-19 PAGE3.jpg" alt="Faculty Publication for 2017-19"/>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="tl-8-testimonial-slider-nav">
                    <button type="button" role="presentation" className="owl-prev1">
                        <i className="fa-regular fa-arrow-left"></i>
                    </button>
                    <button type="button" role="presentation" className="owl-next1"> 
                        <i className="fa-regular fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Publications1719
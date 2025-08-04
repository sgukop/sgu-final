'use client'
import { schoolsList, serviceSliderData } from '@/data/Data'
import Link from 'next/link'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const SchoolsSlider = () => {
  return (
    <section className="tl-2-services pt-60 pb-100" data-bg-color="#F3F1F1">
            <div className="container">
                <div className="tl-2-section-heading">
                    <h2 className="tl-2-section-title">Schools</h2>

                   
                </div>

                <div className="position-relative">
                    <Swiper 
                    className="tl-2-services-slider owl-carousel"
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{delay: 2000}}
                    navigation={{
                        nextEl: '.schools-slider-next',
                        prevEl: '.schools-slider-prev'
                    }}
                    modules={[Autoplay,Navigation]}
                    breakpoints={
                        {
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                
                            480: {
                                slidesPerView: 1.5,
                                centeredSlides: true,
                            },
                
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 25,
                            },
                
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 25,
                            },
                
                            1200: {
                                spaceBetween: 30,
                            }
                        }
                    }
                    >
                        {schoolsList.map((item) => (
                          <SwiperSlide className="tl-2-service whiiiteee-bg" key={item.id}>
                            <div className="tl-1-service-heading tl-2-service-heading">
                              

                                <span className="tl-8-service-order-numb">{item.schoolsubdept}</span>
                            </div>

                            <h4 className="tl-1-service-title tl-2-service-title"><a href={item.slug} target="_self">{item.schoolsdept}</a></h4>
                            <p className="tl-1-service-descr tl-2-service-descr">{item.desc}</p>
                            <Link href={item.slug} className="tl-2-blog-btn" target="_self"><span className="tl-2-blog-btn-icon"><i className="fa-regular fa-arrow-up-right"></i></span> read more</Link>
                        </SwiperSlide>  
                        ))}
                        
                    </Swiper>
                    <div className="tl-2-services-slider-nav" id="tl-2-services-slider-nav">
                        <button type="button" role="presentation" className="owl-prev schools-slider-prev">
                            <i className="fa-light fa-arrow-left"></i>
                        </button>
                        <button type="button" role="presentation" className="owl-next schools-slider-next"> 
                            <i className="fa-light fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default SchoolsSlider
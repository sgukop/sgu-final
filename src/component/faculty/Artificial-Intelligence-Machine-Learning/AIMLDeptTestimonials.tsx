'use client'
import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
interface PaddingProps {
    padding: string;
}
const AIMLDeptTestimonials:React.FC<PaddingProps>  = ({padding}) => {
  return (
    <section className={`tl-1-testimonial ${padding}`}>
       
        <div className="tl-11-section-heading"><h2 className="tl-11-section-title">Testimonials</h2></div>

            <div className="tl-1-testimonial-slider-container">
                <Swiper 
                className="tl-1-testimonial-slider owl-carousel"
                slidesPerView={1}
                loop={true}
                pagination={{
                    bulletElement:'button',
                    bulletClass:'testimonial-bullet',
                    bulletActiveClass:'active'
                }}
                autoplay={{
                    delay:2000,
                    disableOnInteraction: true,
                }}
                modules={[Autoplay,Pagination]}
                >
                    <SwiperSlide className="tl-1-testimony">
                        <img src="assets/images/management-dept/alumni/sweta.jpg" alt="Testimonial Student Image" className="tl-1-testimony-img"/>

                        <div className="tl-1-testimony-txt">
                           <p className="tl-1-testimony-review">SGU.</p>
                            <div className="tl-1-reviewer">
                                <div className="tl-1-reviewer-txt">
                                    <h6 className="tl-1-reviewer-name">AIML</h6>
                                    <span className="tl-1-reviewer-label">2025-26</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
    </section>
  )
}

export default AIMLDeptTestimonials

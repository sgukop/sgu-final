'use client'
import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
interface PaddingProps {
    padding: string;
}
const ChemicalDeptTestimonials:React.FC<PaddingProps>  = ({padding}) => {
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
                           <p className="tl-1-testimony-review">This is Eureka, currently pursuing my B.Sc. in Chemistry at Sanjay Ghodawat University. My experience in the Department of Chemistry has been truly wonderful and enriching. The supportive faculty, dedicated staff, state-of-the-art laboratories, and positive academic environment have contributed immensely to my personal and professional growth.

                                                                I’m very happy to share that I have qualified IIT JAM and now aspire to join one of the premier institutes in India. This achievement was possible because of the skills and knowledge I gained during my B.Sc. Chemistry program.

                                                                I would encourage students to consider joining the B.Sc. Chemistry program at Sanjay Ghodawat University and build a bright future. Thank you, and all the best!</p>
                            <div className="tl-1-reviewer">
                                <div className="tl-1-reviewer-txt">
                                    <h6 className="tl-1-reviewer-name">Eureka Kadlas</h6>
                                    <span className="tl-1-reviewer-label">B.Sc. Chemistry, 2025-26</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
    </section>
  )
}

export default ChemicalDeptTestimonials

'use client'
import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
interface PaddingProps {
    padding: string;
}
const ManagementDeptTestimonials:React.FC<PaddingProps>  = ({padding}) => {
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
                           <p className="tl-1-testimony-review">My journey at Sanjay Ghodawat University was just magical, I would say 2 years of MBA were just full of memories and happy learning .Getting teachers in a friendly manner is just awe to look into my college days , they made my learning achievements possible through the way of approach to students which is really a fantastic experience overall, working for an organisation successfully is because of the good placement support provided. Teachers are not just teachers here they become your friend, sometimes even personal mentors to your problems. Grateful to be a part of SGU.</p>
                            <div className="tl-1-reviewer">
                                <div className="tl-1-reviewer-txt">
                                    <h6 className="tl-1-reviewer-name">Shweta Singh</h6>
                                    <span className="tl-1-reviewer-label">Batch: MBA (Marketing & HR) 2015-17</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
    </section>
  )
}

export default ManagementDeptTestimonials

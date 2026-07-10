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
                        

                        <div className="tl-1-testimony-txt">
                           <p className="tl-1-testimony-review">SGU has honestly provided me with many opportunities that have helped me network & grow in my career. Within SGU, the Department of AIML has always been very supportive, whether through lectures or by encouraging & supporting me in founding the student association. They have constantly supported and elevated me to achieve bigger things.                                         . Proud to announce that I have received admission to the M.Sc. in Artificial Intelligence program at the University of Sheffield, England, UK. </p>
                            <div className="tl-1-reviewer">
                                <div className="tl-1-reviewer-txt">
                                    <h6 className="tl-1-reviewer-name">Vijay Patil</h6>
                                    <span className="tl-1-reviewer-label">Batch: B.Tech  2025-26</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="tl-1-testimony">
                        
                        <div className="tl-1-testimony-txt">
                           <p className="tl-1-testimony-review">My journey at Sanjay Ghodawat University has been truly transformative. The faculties were incredibly supportive, always encouraging me to think critically and explore innovative solutions. My internship at Tech Mahindra was a turning point, allowing me to apply AI techniques to solve real industry challenges. Beyond academics, SGU’s vibrant campus life, technical clubs, & events helped me develop leadership and teamwork skills. </p>
                            <div className="tl-1-reviewer">
                                <div className="tl-1-reviewer-txt">
                                    <h6 className="tl-1-reviewer-name">AboliMali</h6>
                                    <span className="tl-1-reviewer-label">Batch: B.Tech  2025-26</span>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="tl-1-testimony">
                       

                        <div className="tl-1-testimony-txt">
                           <p className="tl-1-testimony-review">As an alumnus of S.G.U., graduating in 2024, I’m proud to say the university played a pivotal role in shaping my professional journey. The curriculum was well-aligned with industry needs, and the faculty pushed us to think beyond textbooks. I especially appreciated the focus on practical learning and real world problem solving. Getting placed through campus was a testament to the strong industry connections and training support provided. The environment at S.G.U. fosters both personal and academic growth.</p>
                            <div className="tl-1-reviewer">
                                <div className="tl-1-reviewer-txt">
                                    <h6 className="tl-1-reviewer-name">Adinath	Sangaj</h6>
                                    <span className="tl-1-reviewer-label">Batch: B.Tech  2024-25</span>
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

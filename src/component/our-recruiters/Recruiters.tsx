'use client'
import { membershipList } from '@/data/Data'
import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
interface MemberProps {
  style: string;
  swiperStyle: string;
  slideStyle: string;
}
const Recruiters:React.FC<MemberProps> = ({style,slideStyle,swiperStyle}) => {
  return (
    <section className={style}>
        <div className="container">
        <h2 className="tl-section-title text-center mb-30">Our <span className="last-word"> Recruiters</span></h2> 
       
            <Swiper 
            className={`tl-6-members ${swiperStyle} owl-carousel`}
            slidesPerView={5}
            slidesPerGroup={1}
            loop={true}
            autoplay={{delay: 2000}}
            navigation={{
              nextEl: '.tl-6-members-next',
              prevEl: '.tl-6-members-prev',
            }}
            modules={[Autoplay,Navigation]}
            breakpoints={{
              0: {
                  slidesPerView: 3,
              },
  
              480: {
                  slidesPerView: 4,
              },
            }}
            >
              
               
            </Swiper>
        </div>
    </section>
  )
}

export default Recruiters